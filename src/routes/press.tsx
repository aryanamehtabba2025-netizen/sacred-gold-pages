import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Indriya Press & Source References | Student Guide" },
      { name: "description", content: "Official Indriya sources referenced by this educational jewellery guide, with a clear distinction between brand information and student commentary." },
      { property: "og:title", content: "Indriya Press & Source References" },
      { property: "og:description", content: "Original source links and transparent editorial attribution for this student assignment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PressPage,
});

function PressPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-16 text-foreground lg:px-8">
      <p className="eyebrow">Sources</p>
      <h1 className="mt-4 text-4xl text-primary">Press &amp; Source References</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        This student assignment references official brand pages. These links are not independent
        press coverage or endorsements; no verified third-party press articles have been added yet.
      </p>
      <section className="mt-10" aria-labelledby="official-sources">
        <h2 id="official-sources" className="text-3xl text-primary">Official brand sources</h2>
        <ul className="mt-5 space-y-5 text-primary">
          <li><a href="https://www.indriya.com" className="underline underline-offset-4">Indriya official website</a><p className="mt-1 text-sm text-muted-foreground">Primary source for the brand's own information.</p></li>
          <li><a href="https://www.indriya.com/temple-jewellery" className="underline underline-offset-4">Temple jewellery collection</a><p className="mt-1 text-sm text-muted-foreground">Check current listings for product details rather than treating this demo as inventory.</p></li>
          <li><a href="https://www.indriya.com/terms-and-conditions" className="underline underline-offset-4">Official terms and conditions</a><p className="mt-1 text-sm text-muted-foreground">Refer to the current brand policies before purchasing.</p></li>
        </ul>
      </section>
      <nav aria-label="Related pages" className="mt-12 flex flex-wrap items-center gap-6 border-t border-border pt-8">
        <Button asChild variant="outline"><Link to="/varalakshmi-vratham-gold-jewellery">Back to Jewellery</Link></Button>
        <Link to="/about" className="text-primary underline underline-offset-4">About the author</Link>
      </nav>
    </main>
  );
}