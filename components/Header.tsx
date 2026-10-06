"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { generalEnquiry } from "@/lib/whatsapp";

const nav = [["Home", "/"], ["Products", "/products"], ["About", "/about"], ["Contact", "/contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="topline"><div className="container topline-inner"><span><i className="status-dot" /> Wholesale medical agency in Kurnool</span><a href="tel:+919100192042">Call us: 9100192042</a></div></div>
    <div className="container nav-wrap">
      <Logo />
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      <nav id="primary-navigation" className={`nav-links${open ? " nav-open" : ""}`} aria-label="Main navigation">
        {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <WhatsAppLink message={generalEnquiry} className="button button-nav">Enquire on WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink>
      </nav>
    </div>
  </header>;
}
