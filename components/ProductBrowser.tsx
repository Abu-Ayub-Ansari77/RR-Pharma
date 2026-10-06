"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { Product } from "@/data/types";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { generalEnquiry, productEnquiry } from "@/lib/whatsapp";

export function ProductBrowser({ products, categories, initialCategory = "All products" }: { products: Product[]; categories: string[]; initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const results = useMemo(() => products.filter(p => p.active !== false && (category === "All products" || p.category === category) && `${p.name} ${p.category} ${p.description || ""}`.toLowerCase().includes(query.toLowerCase())), [products, category, query]);
  return <>
    <div className="catalogue-controls"><label className="search-box"><span aria-hidden="true">⌕</span><span className="sr-only">Search products</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products or categories" /></label><label className="filter-select"><span className="sr-only">Filter by category</span><select value={category} onChange={e => setCategory(e.target.value)}><option>All products</option>{categories.map(item => <option key={item}>{item}</option>)}</select><span aria-hidden="true">⌄</span></label></div>
    {results.length ? <div className="product-grid">{results.map(product => <article className="product-card" key={product.slug}><div className="product-image"><Image src={product.image || "/images/product-placeholder.svg"} alt={product.name} width={600} height={420} /></div><div className="product-info"><span className="product-category">{product.category}{product.productType ? ` · ${product.productType}` : ""}</span><h2>{product.name}</h2>{product.description && <p>{product.description}</p>}<Link className="text-link" href={`/products/${product.slug}`}>View details →</Link><WhatsAppLink message={productEnquiry(product.name)} className="button button-outline">Enquire on WhatsApp ↗</WhatsAppLink></div></article>)}</div> : <div className="catalogue-empty"><span className="empty-icon">⌕</span><div><h2>{products.length ? "No products found." : "Our product catalogue is being updated."}</h2><p>{products.length ? "Try a different search or category, or contact us with your enquiry." : "Please get in touch with RR Pharmacy if you are looking for a particular product."}</p></div><WhatsAppLink message={query ? `Hello RR Pharmacy, I am looking for ${query}. Please let me know if it is available.` : generalEnquiry} className="button button-dark">Ask us on WhatsApp ↗</WhatsAppLink></div>}
    <p className="catalogue-disclaimer">Product information is for general informational and enquiry purposes. Please consult a qualified healthcare professional for medical advice, diagnosis, or treatment.</p>
  </>;
}
