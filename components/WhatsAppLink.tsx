import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppLink({ message, children, className = "button button-primary", label }: {
  message: string; children: React.ReactNode; className?: string; label?: string;
}) {
  return <a className={className} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <span className="whatsapp-icon" aria-hidden="true">◔</span>{children}
  </a>;
}
