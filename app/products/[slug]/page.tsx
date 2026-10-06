import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import products from "@/data/products.json";
import type { Product } from "@/data/types";
import { productEnquiry } from "@/lib/whatsapp";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const catalog = products as Product[];
export function generateStaticParams() { return catalog.filter(p => p.active !== false).map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = catalog.find(p => p.slug === slug && p.active !== false);
  return product ? { title: product.name, description: product.description || `${product.name} product details and wholesale enquiries from RR Pharmacy, Kurnool.`, alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: `/products/${product.slug}` } : undefined } : { title: "Product not found" };
}
export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = catalog.find(p => p.slug === slug && p.active !== false);
  if (!product) notFound();
  return <section className="section detail-section"><div className="container"><div className="breadcrumb"><Link href="/products">← Back to products</Link><span>·</span><span>{product.category}</span></div><article className="detail-layout"><div className="detail-image"><Image src={product.image || "/images/product-placeholder.svg"} alt={product.name} width={600} height={420} /></div><div className="detail-copy"><span className="eyebrow">{product.category}{product.productType ? ` · ${product.productType}` : ""}</span><h1>{product.name}</h1>{product.description && <p>{product.description}</p>}<div className="detail-enquiry"><span>Wholesale enquiries</span><h2>Contact us for wholesale pricing.</h2><p>Message our team to ask about this product and its available details.</p><WhatsAppLink message={productEnquiry(product.name)} className="button button-dark">Enquire about {product.name} ↗</WhatsAppLink></div><p className="catalogue-disclaimer">Product information is for general informational and enquiry purposes. Please consult a qualified healthcare professional for medical advice, diagnosis, or treatment.</p></div></article></div></section>;
}
