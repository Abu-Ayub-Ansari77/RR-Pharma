import Link from "next/link";
import { business } from "@/lib/business";
import { Logo } from "@/components/Logo";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { generalEnquiry } from "@/lib/whatsapp";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand"><Logo light /><p>A wholesale medical agency serving customers in Kurnool, Andhra Pradesh.</p><WhatsAppLink message={generalEnquiry} className="button button-footer">Message us on WhatsApp ↗</WhatsAppLink></div>
      <div><h2>Explore</h2><ul><li><Link href="/">Home</Link></li><li><Link href="/products">Products</Link></li><li><Link href="/about">About us</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
      <div><h2>Get in touch</h2><ul><li><a href="tel:+919100192042">{business.phone}</a></li>{business.address.map(line => <li key={line}>{line}</li>)}</ul><p className="footer-hours">Every day<br />9:00 AM – 10:00 PM</p></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} RR Pharmacy. All rights reserved.</span><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link></div></div>
    <div className="container footer-disclaimer">Product information is for general informational and enquiry purposes. Please consult a qualified healthcare professional for medical advice, diagnosis, or treatment.</div>
  </footer>;
}
