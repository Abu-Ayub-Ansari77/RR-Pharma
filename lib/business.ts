export const business = {
  name: "RR Pharmacy",
  owner: "Muhammad Basha",
  phone: "9100192042",
  whatsapp: "919100192042",
  address: ["Santhosh Nagar Colony", "Near Sree Uma Madhava School", "Kurnool – 518003", "Andhra Pradesh, India"],
  hours: "Every day, 9:00 AM – 10:00 PM",
} as const;

export const categories = [
  { name: "Tablets", icon: "▤", description: "Browse tablet product enquiries" },
  { name: "Capsules", icon: "◒", description: "Browse capsule product enquiries" },
  { name: "Syrups", icon: "♧", description: "Browse syrup product enquiries" },
  { name: "Injections", icon: "⌁", description: "Browse injection product enquiries" },
  { name: "Medical Supplies", icon: "＋", description: "Browse medical supply enquiries" },
  { name: "Surgical Products", icon: "⌕", description: "Browse surgical product enquiries" },
  { name: "Healthcare Products", icon: "♡", description: "Browse healthcare product enquiries" },
  { name: "Other Products", icon: "•••", description: "Browse other product enquiries" },
] as const;

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address.join(", "))}`;
}
