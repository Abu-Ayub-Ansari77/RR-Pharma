import { business } from "@/lib/business";

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const generalEnquiry = "Hello RR Pharmacy, I would like to enquire about your products.";

export function productEnquiry(name: string) {
  return `Hello RR Pharmacy, I would like to enquire about ${name}. Please share the available details and wholesale pricing.`;
}
