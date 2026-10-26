import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/indriya-logo.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About This Indriya Jewellery Guide | Aryan Mehta" },
      { name: "description", content: "Meet Aryan Mehta, SYBBA Marketing Major, and learn how this educational Indriya jewellery guide uses sources and customer review screenshots." },
      { property: "og:title", content: "About This Indriya Jewellery Guide" },
      { property: "og:description", content: "Author credentials, research method, editorial standards and contact details for this student assignment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "AboutPage",
      url: "https://sacred-gold-pages.lovable.app/about",
      name: "About This Indriya Jewellery Guide",
      mainEntity: { "@type": "Person", name: "Aryan Mehta", description: "SYBBA Marketing Major; student author of this educational jewellery guide", url: "https://sacred-gold-pages.lovable.app/about#author" },
    }) }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
      <Link to="/varalakshmi-vratham-gold-jewellery" aria-label="Jewellery guide home"><img src={logoAsset.url} alt="Indriya logo" width={841} height={650} className="h-12 w-auto" /></Link>
      <Button asChild variant="outline"><Link to="/varalakshmi-vratham-gold-jewellery">Back to Jewellery</Link></Button>
    </div></header>
    <main className="mx-auto max-w-3xl space-y-10 px-5 py-16 lg:px-8">
      <div><p className="eyebrow">About</p><h1 className="mt-4 text-4xl text-primary">About This Jewellery Guide</h1><p className="mt-5 leading-relaxed text-muted-foreground">This is a student assignment about Indriya jewellery, not the official Indriya website. Product purchases, store appointments and policy questions belong with the brand through its official website.</p></div>
      <section id="author"><h2 className="text-3xl text-primary">About the author: Aryan Mehta</h2><p className="mt-4 leading-relaxed text-muted-foreground">Aryan Mehta is an SYBBA Marketing Major. His academic focus is marketing; this guide is an educational research project, not advice from a certified gemologist or professional jewellery designer.</p><p className="mt-4 text-sm text-muted-foreground">Published: <time dateTime="2026-10-26">October 26, 2026</time></p></section>
      <section><h2 className="text-3xl text-primary">Research method and first-party work</h2><p className="mt-4 leading-relaxed text-muted-foreground">The original work on this site is the organisation of source-linked information, bridal comparison checklists and transcription of user-supplied Google review screenshots. No store visit, staff interview or professional jewellery experience is claimed.</p></section>
      <section><h2 className="text-3xl text-primary">Editorial standards and trust</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-muted-foreground"><li>Customer review ratings are preserved as shown in the screenshots, including four-star reviews.</li><li>Educational examples are not live product quotations or verified inventory.</li><li>Check current official listings for prices, materials, purity and availability.</li><li>Brand policies are linked to their original source; this demo cannot offer exchange or purchase guarantees.</li></ul></section>
      <nav aria-label="About related links" className="flex flex-wrap gap-6 border-t border-border pt-8 text-primary"><Link to="/contact" className="underline underline-offset-4">Contact and corrections</Link><Link to="/press" className="underline underline-offset-4">Press &amp; sources</Link><a href="https://www.indriya.com" className="underline underline-offset-4">Official Indriya website</a></nav>
    </main>
  </div>;
}