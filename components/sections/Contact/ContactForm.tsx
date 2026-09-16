"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { RiLoaderLine, RiMailSendLine } from "@remixicon/react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/toast"
import type {
  ContactApiErrorResponse,
  ContactApiResponse,
} from "@/features/contact/contact-api"
import {
  createContactSchema,
  type ContactFormValues,
} from "@/features/contact/contact-schema"

const CONTACT_FIELDS = ["subject", "email", "message"] as const
const CONTACT_REQUEST_TIMEOUT_MS = 20_000

class ContactSubmissionError extends Error {
  constructor(readonly response: ContactApiErrorResponse | null) {
    super(response?.code ?? "CONTACT_REQUEST_FAILED")
    this.name = "ContactSubmissionError"
  }
}

async function readContactResponse(response: Response) {
  try {
    return (await response.json()) as ContactApiResponse
  } catch {
    return null
  }
}

async function submitContactRequest(
  data: ContactFormValues,
  website: string,
) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, website }),
    signal: AbortSignal.timeout(CONTACT_REQUEST_TIMEOUT_MS),
  })

  const result = await readContactResponse(response)

  if (!response.ok || !result?.success) {
    throw new ContactSubmissionError(
      result && !result.success ? result : null,
    )
  }

  return result
}

export function ContactForm() {
  const [website, setWebsite] = useState("")
  const t = useTranslations("Contact")
  const contactSchema = createContactSchema({
    subjectRequired: t("validation.subject-required"),
    subjectTooLong: t("validation.subject-too-long"),
    emailInvalid: t("validation.email-invalid"),
    messageRequired: t("validation.message-required"),
    messageTooShort: t("validation.message-too-short"),
    messageTooLong: t("validation.message-too-long"),
  })

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  })

  const { isSubmitting } = form.formState

  const serverValidationMessages: Record<string, string> = {
    SUBJECT_REQUIRED: t("validation.subject-required"),
    SUBJECT_TOO_LONG: t("validation.subject-too-long"),
    EMAIL_INVALID: t("validation.email-invalid"),
    MESSAGE_REQUIRED: t("validation.message-required"),
    MESSAGE_TOO_SHORT: t("validation.message-too-short"),
    MESSAGE_TOO_LONG: t("validation.message-too-long"),
  }

  async function onSubmit(data: ContactFormValues) {
    form.clearErrors("root")

    const request = submitContactRequest(data, website)

    try {
      await toast.promise(request, {
        loading: t("toast.send-loading"),
        success: t("toast.send-success"),
        error: t("toast.send-failed"),
      })

      form.reset()
      setWebsite("")
    } catch (error) {
      if (
        error instanceof ContactSubmissionError &&
        error.response?.code === "VALIDATION_ERROR" &&
        error.response.errors
      ) {
        let mappedFieldError = false

        for (const fieldName of CONTACT_FIELDS) {
          const errorCode = error.response.errors[fieldName]?.[0]

          if (!errorCode) {
            continue
          }

          form.setError(fieldName, {
            type: "server",
            message:
              serverValidationMessages[errorCode] ?? t("toast.send-failed"),
          })
          mappedFieldError = true
        }

        if (mappedFieldError) {
          return
        }
      }

      form.setError("root.server", {
        type: "server",
        message: t("toast.send-failed"),
      })
    }
  }

  return (
    <form
      id="contact-form"
      aria-busy={isSubmitting}
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          autoComplete="off"
          name="website"
          onChange={(event) => setWebsite(event.target.value)}
          tabIndex={-1}
          type="text"
          value={website}
        />
      </div>

      <FieldGroup className="gap-4">
        <Controller
          name="subject"
          control={form.control}
          render={({ field, fieldState }) => {
            const fieldId = "contact-subject"
            const errorId = `${fieldId}-error`

            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={fieldId}>
                  {t("subject-label")}
                </FieldLabel>
                <Input
                  {...field}
                  id={fieldId}
                  aria-describedby={fieldState.invalid ? errorId : undefined}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  className="h-10 rounded-md border-border/80 bg-surface-2/60 px-3.5 placeholder:text-text-tertiary hover:border-surface-highlight focus-visible:border-signal"
                  disabled={isSubmitting}
                  maxLength={100}
                  placeholder={t("subject-placeholder")}
                  required
                />
                {fieldState.invalid && (
                  <FieldError id={errorId} errors={[fieldState.error]} />
                )}
              </Field>
            )
          }}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => {
            const fieldId = "contact-email"
            const errorId = `${fieldId}-error`

            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={fieldId}>{t("email-label")}</FieldLabel>
                <Input
                  {...field}
                  id={fieldId}
                  aria-describedby={fieldState.invalid ? errorId : undefined}
                  aria-invalid={fieldState.invalid}
                  autoComplete="email"
                  className="h-10 rounded-md border-border/80 bg-surface-2/60 px-3.5 placeholder:text-text-tertiary hover:border-surface-highlight focus-visible:border-signal"
                  disabled={isSubmitting}
                  inputMode="email"
                  placeholder={t("email-placeholder")}
                  required
                  type="email"
                />
                {fieldState.invalid && (
                  <FieldError id={errorId} errors={[fieldState.error]} />
                )}
              </Field>
            )
          }}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => {
            const fieldId = "contact-message"
            const errorId = `${fieldId}-error`

            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={fieldId}>{t("message-label")}</FieldLabel>
                <Textarea
                  {...field}
                  id={fieldId}
                  aria-describedby={fieldState.invalid ? errorId : undefined}
                  aria-invalid={fieldState.invalid}
                  className="min-h-28"
                  disabled={isSubmitting}
                  maxLength={2000}
                  placeholder={t("message-placeholder")}
                  required
                  rows={4}
                />
                {fieldState.invalid && (
                  <FieldError id={errorId} errors={[fieldState.error]} />
                )}
              </Field>
            )
          }}
        />

        {form.formState.errors.root?.server && (
          <FieldError
            errors={[form.formState.errors.root.server]}
            id="contact-form-error"
          />
        )}

        <Button
          className="mt-1 h-10 w-full"
          disabled={isSubmitting}
          size="lg"
          type="submit"
        >
          {isSubmitting ? t("sending-button") : t("send-button")}
          {isSubmitting ? (
            <RiLoaderLine aria-hidden="true" className="animate-spin" />
          ) : (
            <RiMailSendLine aria-hidden="true" />
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}
