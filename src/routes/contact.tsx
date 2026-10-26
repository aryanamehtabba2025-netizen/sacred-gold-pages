import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/indriya-logo.png.asset.json";

const CANONICAL = "https://www.indriya.com/contact";
const TITLE = "Contact Indriya | Talk to Our Jewellery Team";
const DESCRIPTION =
  "Get in touch with Indriya for help with temple jewellery, gold necklaces, bangles and bridal sets. Call us on 9920792272.";

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
          <a href="/" aria-label="Indriya home">
            <img
              src={logoAsset.url}
              alt="Indriya Aditya Birla Jewellery logo"
              width={841}
              height={650}
              className="h-12 w-auto lg:h-14"
            />
          </a>
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
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 text-4xl text-primary lg:text-5xl">Contact Us</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Feel free to contact us at{" "}
          <a
            href="tel:+919920792272"
            className="border-b border-accent pb-0.5 text-primary transition-colors hover:border-primary"
          >
            9920792272
          </a>
          .
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          This is the contact number supplied for this student assignment. For current product
          information or boutique appointments, use Indriya's official website. Learn more on our <a href="/about" className="text-primary underline underline-offset-4">About page</a>.
        </p>
        <Button asChild size="lg" className="mt-10 bg-gold text-maroon-deep hover:bg-gold-soft">
          <a href="tel:+919920792272">Call 9920792272</a>
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
          <p className="mt-10 text-xs text-ivory/60">&copy; {new Date().getFullYear()} Indriya.</p>
        </div>
      </footer>
    </div>
  );
}
