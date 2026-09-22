import type { ContactFormValues } from "./contact-schema"

export type ContactFieldName = keyof ContactFormValues

export type ContactValidationErrors = Partial<
  Record<ContactFieldName, string[]>
>

export type ContactApiSuccessResponse = {
  success: true
}

export type ContactApiErrorCode =
  | "INVALID_JSON"
  | "UNSUPPORTED_MEDIA_TYPE"
  | "PAYLOAD_TOO_LARGE"
  | "VALIDATION_ERROR"
  | "DELIVERY_FAILED"

export type ContactApiErrorResponse = {
  success: false
  code: ContactApiErrorCode
  errors?: ContactValidationErrors
}

export type ContactApiResponse =
  | ContactApiSuccessResponse
  | ContactApiErrorResponse
