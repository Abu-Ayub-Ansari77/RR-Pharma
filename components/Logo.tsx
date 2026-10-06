import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link className={`brand${light ? " brand-light" : ""}`} href="/" aria-label="RR Pharmacy home">
    <span className="brand-mark" aria-hidden="true"><span>R</span><span>R</span><i>＋</i></span>
    <span className="brand-copy"><strong>RR Pharmacy</strong><small>WHOLESALE MEDICAL AGENCY</small></span>
  </Link>;
}
