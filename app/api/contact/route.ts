import * as z from "zod"

import type {
  ContactApiErrorResponse,
  ContactApiResponse,
} from "@/features/contact/contact-api"
import { createContactSchema } from "@/features/contact/contact-schema"
import { submitContact } from "@/features/contact/server/contact.service"

export const runtime = "nodejs"

const MAX_CONTACT_BODY_BYTES = 10_000

const contactSchema = createContactSchema({
  subjectRequired: "SUBJECT_REQUIRED",
  subjectTooLong: "SUBJECT_TOO_LONG",
  emailInvalid: "EMAIL_INVALID",
  messageRequired: "MESSAGE_REQUIRED",
  messageTooShort: "MESSAGE_TOO_SHORT",
  messageTooLong: "MESSAGE_TOO_LONG",
})

function contactResponse(body: ContactApiResponse, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  })
}

function errorResponse(code: ContactApiErrorResponse["code"], status: number) {
  return contactResponse({ success: false, code }, status)
}

function hasHoneypotValue(body: unknown) {
  if (typeof body !== "object" || body === null || !("website" in body)) {
    return false
  }

  return (
    typeof body.website === "string" && body.website.trim().length > 0
  )
}

function getDeliveryErrorMetadata(error: unknown) {
  if (!(error instanceof Error)) {
    return { name: "UnknownError" }
  }

  const smtpError = error as Error & {
    code?: string
    command?: string
    responseCode?: number
  }

  return {
    name: smtpError.name,
    code: smtpError.code,
    command: smtpError.command,
    responseCode: smtpError.responseCode,
  }
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.toLowerCase()
  const mediaType = contentType?.split(";", 1)[0]?.trim()

  if (mediaType !== "application/json") {
    return errorResponse("UNSUPPORTED_MEDIA_TYPE", 415)
  }

  const declaredContentLength = Number(
    request.headers.get("content-length") ?? 0,
  )

  if (
    Number.isFinite(declaredContentLength) &&
    declaredContentLength > MAX_CONTACT_BODY_BYTES
  ) {
    return errorResponse("PAYLOAD_TOO_LARGE", 413)
  }

  let body: unknown

  try {
    const rawBody = await request.text()

    if (new TextEncoder().encode(rawBody).byteLength > MAX_CONTACT_BODY_BYTES) {
      return errorResponse("PAYLOAD_TOO_LARGE", 413)
    }

    body = JSON.parse(rawBody)
  } catch {
    return errorResponse("INVALID_JSON", 400)
  }

  if (hasHoneypotValue(body)) {
    return contactResponse({ success: true })
  }

  const result = contactSchema.safeParse(body)

  if (!result.success) {
    return contactResponse(
      {
        success: false,
        code: "VALIDATION_ERROR",
        errors: z.flattenError(result.error).fieldErrors,
      },
      422,
    )
  }

  try {
    await submitContact(result.data)

    return contactResponse({ success: true })
  } catch (error) {
    console.error(
      "Contact email delivery failed",
      getDeliveryErrorMetadata(error),
    )

    return errorResponse("DELIVERY_FAILED", 503)
  }
}
