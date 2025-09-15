import { Metadata } from "next";
import ContactPageClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact KILAT - Get in Touch | Malaysia",
  description: "Have questions about our AI ebooks, prompts, or services? Contact the KILAT team in Malaysia. We'd love to hear from you and help with your AI learning journey.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}