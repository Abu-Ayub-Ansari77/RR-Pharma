import type { MetadataRoute } from "next";
import products from "@/data/products.json";
import type { Product } from "@/data/types";
const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/about", "/contact", "/privacy", "/terms"];
  const productPaths = (products as Product[]).filter(product => product.active !== false).map(product => `/products/${product.slug}`);
  return [...pages, ...productPaths].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
