import type { Metadata } from "next";
import Link from "next/link";
import products from "@/data/products.json";
import type { Product } from "@/data/types";
import { ProductBrowser } from "@/components/ProductBrowser";
import { categories } from "@/lib/business";

export const metadata: Metadata = { title: "Products", description: "Browse RR Pharmacy's wholesale product catalogue in Kurnool and send product enquiries on WhatsApp.", alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: "/products" } : undefined };

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const categoryNames: string[] = categories.map(item => item.name);
  const selected = categoryNames.includes(category || "") ? category! : "All products";
  return <><section className="page-hero"><div className="container"><span className="eyebrow">THE RR PHARMACY CATALOGUE</span><h1>Browse <em>products.</em></h1><p>Explore product categories and contact our team for wholesale enquiries.</p><div className="breadcrumb"><Link href="/">Home</Link><span>→</span><span>Products</span></div></div></section><section className="section"><div className="container"><ProductBrowser products={products as Product[]} categories={categoryNames} initialCategory={selected} /></div></section></>;
}
