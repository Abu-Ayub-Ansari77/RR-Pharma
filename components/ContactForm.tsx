"use client";

import { useState, type FormEvent } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim(); const phone = String(form.get("phone") || "").trim(); const enquiry = String(form.get("enquiry") || "").trim(); const message = String(form.get("message") || "").trim();
    const next: Record<string, string> = {};
    if (!name) next.name = "Please enter your name.";
    if (!phone) next.phone = "Please enter your phone number.";
    else if (!/^[+\d\s().-]{7,20}$/.test(phone)) next.phone = "Please enter a valid phone number.";
    if (!message) next.message = "Please enter a message.";
    setErrors(next); setStatus(""); if (Object.keys(next).length) return;
    const body = `Hello RR Pharmacy,\n\nName: ${name}\nPhone: ${phone}\nProduct / enquiry: ${enquiry || "Not specified"}\nMessage: ${message}`;
    setStatus("Your WhatsApp enquiry is ready. Continue in WhatsApp to send it.");
    window.open(whatsappUrl(body), "_blank", "noopener,noreferrer");
  }
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-heading"><span className="eyebrow">SEND AN ENQUIRY</span><h2>How can we help?</h2><p>Complete the form and continue to WhatsApp to send your enquiry.</p></div>
    <label>Name <span>*</span><input name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <small className="form-error" id="name-error">{errors.name}</small>}</label>
    <label>Phone number <span>*</span><input name="phone" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />{errors.phone && <small className="form-error" id="phone-error">{errors.phone}</small>}</label>
    <label>Product / enquiry <small>(optional)</small><input name="enquiry" /></label>
    <label>Message <span>*</span><textarea name="message" rows={4} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <small className="form-error" id="message-error">{errors.message}</small>}</label>
    <button className="button button-dark" type="submit">Continue to WhatsApp ↗</button>
    {status && <p className="form-success" role="status">{status}</p>}
  </form>;
}
