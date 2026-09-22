import "server-only"

import nodemailer from "nodemailer"

import type { ContactFormValues } from "@/features/contact/contact-schema"
import { contactEnv } from "./contact-env"

const transporter = nodemailer.createTransport({
  host: contactEnv.SMTP_HOST,
  port: contactEnv.SMTP_PORT,
  secure: contactEnv.SMTP_SECURE,
  auth: {
    user: contactEnv.SMTP_USER,
    pass: contactEnv.SMTP_PASS,
  },
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 10_000,
})

export async function sendContactEmail(input: ContactFormValues) {
  return transporter.sendMail({
    from: contactEnv.SMTP_FROM,
    to: contactEnv.CONTACT_TO_EMAIL,
    replyTo: input.email,
    subject: `[Portfolio] ${input.subject}`,
    text: input.message,
  })
}
