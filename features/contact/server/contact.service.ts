import "server-only"

import type { ContactFormValues } from "@/features/contact/contact-schema"
import { sendContactEmail } from "./smtp-mailer"

export async function submitContact(input: ContactFormValues) {
  await sendContactEmail(input)
}
