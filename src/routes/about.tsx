import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://aryanamehtabba2025-netizen.github.io/sacred-gold-pages/about/";
const TITLE = "About This Page | Indriya Student Concept Project";
const DESCRIPTION =
  "About this student concept page: who created it, how it was researched, and how to contact the creator. Not an official Indriya store.";

const SOURCE_URL =
  "https://handicrafts.nic.in/crafts/All_Crafts/Craft_Categories/Miscellaneous/Jewellery/Temple_Jewellery_of_Nagercoil/TempleJewelleryofNagercoilWebPage.html";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: TITLE,
          description: DESCRIPTION,
          url: CANONICAL,
          author: { "@type": "Person", name: "Aryan Mehta" },
          publisher: {
            "@type": "Person",
            name: "Aryan Mehta",
            description: "Student concept project; not an official Indriya store",
          },
          datePublished: "2026-10-26",
          dateModified: "2026-10-26",
        }),
      },
    ],
  }),
  component: AboutPage,
});

const links = [
  { label: "Jewellery", href: "https://www.indriya.com/jewellery" },
  { label: "Gold", href: "https://www.indriya.com/gold" },
  { label: "Temple Jewellery", href: "https://www.indriya.com/temple-jewellery" },
  { label: "Weddings", href: "https://www.indriya.com/wedding" },
  { label: "Store Locator", href: "https://www.indriya.com/jewellery-stores" },
  { label: "Contact", href: `${import.meta.env.BASE_URL}contact/` },
  { label: "Policies", href: "https://www.indriya.com/terms-and-conditions" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#about-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/varalakshmi-vratham-gold-jewellery" aria-label="Indriya home">
            <span className="font-serif text-2xl tracking-wide text-primary">
              Indriya{" "}
              <span className="block font-sans text-[10px] uppercase tracking-widest">
                Student concept
              </span>
            </span>
          </Link>
          <Button
            asChild
            variant="outline"
            className="border-accent/60 bg-transparent text-primary hover:bg-secondary"
          >
            <a href="https://www.indriya.com/jewellery-stores">Find a Store</a>
          </Button>
        </div>
      </header>

      <main id="about-main" className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow">About</p>
        <h1 className="mt-4 text-4xl text-primary lg:text-5xl">About This Page</h1>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          This is a student concept page created by{" "}
          <span className="text-primary">Aryan Mehta</span> as an educational project. It is not an
          official Indriya store, and no product availability, prices, policies, or guarantees are
          asserted here.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Category links on the landing page point to the official Indriya website (indriya.com) so
          you can check current designs, materials, and details. The photographs on this page are
          AI-generated, representational placeholders — no real Indriya products are shown.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          The landing page summarizes promises published on Indriya’s official website and links
          readers there to check the current terms. This student project does not itself sell or
          certify jewellery.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Aryan is the student author and page editor, not an Indriya representative, jeweller or
          gemmologist. His first-party work on this project was selecting the questions, comparing
          published sources and writing the educational summaries; it was not a hands-on inspection
          of the pictured jewellery.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          For questions about this educational project, see the{" "}
          <Link to="/contact" className="border-b border-accent pb-0.5 text-primary">
            contact page
          </Link>
          . For purchases or product enquiries, use the official Indriya website.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Published: <time dateTime="2026-10-26">26 October 2026</time> · Updated:{" "}
          <time dateTime="2026-10-26">26 October 2026</time>
        </p>

        <h2 className="mt-14 text-3xl text-primary">How this page was created</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Aryan prepared this page for a coursework assignment with AI-assisted drafting and image
          generation. He checked background statements against the published sources below and
          edited the final wording. The images are illustrative, not product photographs. Product
          links lead to the official Indriya website for current details.
        </p>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          The public{" "}
          <a
            href="https://github.com/aryanamehtabba2025-netizen/sacred-gold-pages"
            className="border-b border-accent pb-0.5 text-primary"
          >
            student project source
          </a>{" "}
          records the page content and changes. For a correction or question about this page, use
          the contact link above; do not post personal information publicly.
        </p>

        <h2 className="mt-14 text-3xl text-primary">Sources</h2>
        <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li>
            <a
              href="https://www.indriya.com/"
              className="border-b border-accent pb-0.5 text-primary transition-colors hover:border-primary"
            >
              Indriya official website
            </a>{" "}
            — source for the brand's own product and policy claims. Confirm the current details
            there before buying.
          </li>
          <li>
            <a
              href={SOURCE_URL}
              className="border-b border-accent pb-0.5 text-primary transition-colors hover:border-primary"
            >
              Temple Jewellery of Nagercoil
            </a>{" "}
            — Government of India, Office of the Development Commissioner (Handicrafts). Background
            reading on the craft tradition; no text copied.
          </li>
        </ul>

        <Button asChild size="lg" className="mt-14 bg-gold text-maroon-deep hover:bg-gold-soft">
          <Link to="/varalakshmi-vratham-gold-jewellery">Back to the Landing Page</Link>
        </Button>
      </main>

      <footer className="bg-maroon-deep text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <nav aria-label="Footer">
            <ul className="grid gap-4 text-sm sm:grid-cols-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-ivory/80 underline-offset-4 transition-colors hover:text-ivory hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-10 text-xs text-ivory/60">
            Student concept page by Aryan Mehta; not affiliated with or operated by Indriya.
          </p>
        </div>
      </footer>
    </div>
  );
}
