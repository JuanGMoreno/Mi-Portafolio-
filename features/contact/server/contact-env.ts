import "server-only"

import * as z from "zod"

const contactEnvSchema = z.object({
  SMTP_HOST: z.string().trim().min(1),
  SMTP_PORT: z.coerce.number().int().min(1).max(65_535),
  SMTP_SECURE: z
    .enum(["true", "false"])
    .transform((value) => value === "true"),
  SMTP_USER: z.string().trim().min(1),
  SMTP_PASS: z.string().min(1),
  SMTP_FROM: z.string().trim().min(1),
  CONTACT_TO_EMAIL: z.email(),
})

const result = contactEnvSchema.safeParse({
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_SECURE: process.env.SMTP_SECURE,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  SMTP_FROM: process.env.SMTP_FROM,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
})

if (!result.success) {
  const invalidVariables = result.error.issues
    .map((issue) => issue.path.join("."))
    .filter(Boolean)
    .join(", ")

  throw new Error(
    `Invalid contact email configuration: ${invalidVariables || "unknown variables"}`,
  )
}

export const contactEnv = result.data
