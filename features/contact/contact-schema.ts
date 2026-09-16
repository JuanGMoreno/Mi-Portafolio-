import * as z from "zod"

export type ContactValidationMessages = {
  subjectRequired: string
  subjectTooLong: string
  emailInvalid: string
  messageRequired: string
  messageTooShort: string
  messageTooLong: string
}

export function createContactSchema(messages: ContactValidationMessages) {
  return z.object({
    subject: z
      .string()
      .trim()
      .min(1, { error: messages.subjectRequired })
      .max(100, { error: messages.subjectTooLong }),
    email: z.email({ error: messages.emailInvalid }),
    message: z
      .string()
      .trim()
      .min(1, { error: messages.messageRequired })
      .min(10, { error: messages.messageTooShort })
      .max(2000, { error: messages.messageTooLong }),
  })
}

export type ContactFormValues = z.infer<
  ReturnType<typeof createContactSchema>
>
