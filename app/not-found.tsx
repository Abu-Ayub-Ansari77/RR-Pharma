import Link from "next/link";
export default function NotFound() { return <section className="section not-found"><div className="container"><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>We can’t find<br /><em>that page.</em></h1><p>The page you’re looking for may have moved or isn’t available.</p><Link className="button button-dark" href="/">Return home →</Link></div></section>; }
