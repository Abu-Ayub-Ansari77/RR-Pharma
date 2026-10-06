import { WhatsAppLink } from "@/components/WhatsAppLink";
import { generalEnquiry } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return <WhatsAppLink message={generalEnquiry} className="floating-whatsapp" label="Send RR Pharmacy a WhatsApp enquiry"><span aria-hidden="true">◔</span><span className="floating-label">Chat with us</span></WhatsAppLink>;
}
