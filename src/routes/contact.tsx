import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://aryanamehtabba2025-netizen.github.io/sacred-gold-pages/contact/";
const TITLE = "Contact the Creator | Indriya Student Concept";
const DESCRIPTION =
  "Contact the creator of this independent student concept page, or visit the official Indriya website for product enquiries.";

export const Route = createFileRoute("/contact")({
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
  }),
  component: ContactPage,
});

const links = [
  { label: "Jewellery", href: "https://www.indriya.com/jewellery" },
  { label: "Gold", href: "https://www.indriya.com/gold" },
  {
    label: "Temple Jewellery",
    href: "https://www.indriya.com/temple-jewellery",
  },
  { label: "Weddings", href: "https://www.indriya.com/wedding" },
  {
    label: "Store Locator",
    href: "https://www.indriya.com/jewellery-stores",
  },
  { label: "About this page", href: `${import.meta.env.BASE_URL}about/` },
  {
    label: "Policies",
    href: "https://www.indriya.com/terms-and-conditions",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" aria-label="Indriya home">
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

      <main className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow">Student project</p>
        <h1 className="mt-4 text-4xl text-primary lg:text-5xl">Contact the Creator</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          This is an independent educational concept page by Aryan Mehta, not an official Indriya
          store or customer-service channel.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          For questions or corrections about this student project, email{" "}
          <a className="underline underline-offset-4" href="mailto:7aryanmehta@gmail.com">
            7aryanmehta@gmail.com
          </a>
          . Aryan is the student author, not a jewellery professional or Indriya representative. You
          can also open an issue in the public GitHub repository, but do not include private or
          payment information in a public issue.
        </p>
        <Button asChild size="lg" className="mt-10 bg-gold text-maroon-deep hover:bg-gold-soft">
          <a href="https://github.com/aryanamehtabba2025-netizen/sacred-gold-pages/issues">
            Ask about this project on GitHub
          </a>
        </Button>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          For real jewellery products, prices, appointments, or policies, visit the{" "}
          <a className="underline underline-offset-4" href="https://www.indriya.com/">
            official Indriya website
          </a>
          .
        </p>
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
            Student concept page by Aryan Mehta; not affiliated with Indriya.
          </p>
        </div>
      </footer>
    </div>
  );
}
