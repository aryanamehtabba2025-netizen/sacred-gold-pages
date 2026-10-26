import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/indriya-logo.png.asset.json";
import craftImg from "@/assets/craft-detail.jpg";

const TITLE = "Temple Jewellery Guide | Indriya";
const DESCRIPTION =
  "Explore temple jewellery’s cultural context, Lakshmi, peacock and lotus motifs, bridal styling and practical care in this guide by Aryan Mehta.";
const URL = "https://sacred-gold-pages.lovable.app/temple-jewellery-guide";

export const Route = createFileRoute("/temple-jewellery-guide")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Temple Jewellery Guide",
          description: DESCRIPTION,
          author: { "@type": "Person", name: "Aryan Mehta" },
          publisher: {
            "@type": "Person",
            name: "Aryan Mehta",
            description: "Student concept project; not an official Indriya store",
          },
          datePublished: "2026-10-19",
          dateModified: "2026-10-22",
          mainEntityOfPage: URL,
        }),
      },
    ],
  }),
  component: TempleJewelleryGuide,
});

function TempleJewelleryGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#guide-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="border-b border-border/70 bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link to="/varalakshmi-vratham-gold-jewellery" aria-label="Indriya landing page">
            <img
              src={logoAsset.url}
              alt="Indriya Aditya Birla Jewellery logo"
              width={841}
              height={650}
              className="h-12 w-auto lg:h-14"
            />
          </Link>
          <Button
            asChild
            variant="outline"
            className="border-accent/60 bg-transparent text-primary hover:bg-secondary"
          >
            <Link to="/varalakshmi-vratham-gold-jewellery">Back to Jewellery</Link>
          </Button>
        </div>
      </header>
      <main id="guide-main">
        <article>
          <header className="mx-auto max-w-3xl px-5 pb-10 pt-14 lg:px-8 lg:pt-20">
            <p className="eyebrow">Heritage &amp; Adornment</p>
            <h1 className="mt-4 text-4xl leading-tight text-primary lg:text-5xl">
              Temple Jewellery Guide
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              The motifs, cultural connections and everyday care behind a richly ornamented
              jewellery tradition.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              By <span className="text-primary">Aryan Mehta</span> <span aria-hidden="true">·</span>{" "}
              <time dateTime="2026-10-19">19 October 2026</time>
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Student assignment demo · Educational guidance, not product claims.
            </p>
          </header>
          <figure className="mx-auto max-w-5xl px-5 lg:px-8">
            <img
              src={craftImg}
              alt="Illustrative close-up of temple-inspired jewellery with lotus and peacock forms in an antique gold tone"
              width={1200}
              height={1400}
              sizes="(min-width: 1024px) 960px, 100vw"
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover sm:aspect-[2/1]"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Representational imagery of temple-inspired ornamentation.
            </figcaption>
          </figure>
          <div className="mx-auto max-w-3xl space-y-12 px-5 py-14 lg:px-8 lg:py-20">
            <section aria-labelledby="definition-heading">
              <h2 id="definition-heading" className="text-3xl text-primary">
                What is temple jewellery?
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Temple jewellery is traditional Indian jewellery inspired by motifs and ornaments
                used in temple art and worship. Deities, floral forms and intricate gold-toned
                craftsmanship are common features, but the term describes a design tradition rather
                than a guarantee of gold content, origin or making technique.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Its visual language connects with temple sculpture, devotional adornment and
                cultural practices, particularly in South India. Related styles also appear in
                classical dance, weddings and festive dress. Traditions differ across communities
                and makers; not every contemporary piece has been used in worship, and no single
                origin date explains all temple-inspired jewellery.
              </p>
            </section>
            <section aria-labelledby="motifs-heading">
              <h2 id="motifs-heading" className="text-3xl text-primary">
                Lakshmi, peacock and lotus designs
              </h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl text-primary">Lakshmi</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Depictions of Lakshmi may form the centre of a pendant or appear within an
                    ornamental border. In many traditions she is associated with prosperity, but
                    wearing a motif does not promise any religious or financial outcome.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-primary">Peacocks</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Curved necks, feather-like patterns and paired birds give peacock designs their
                    distinctive rhythm. Their cultural associations and the way they are stylized
                    vary by tradition and maker.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-primary">Lotuses</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Lotus petals can frame a central figure or repeat along a necklace, earring or
                    bangle. The flower has devotional associations in several traditions, while
                    contemporary designs may also use it simply as a floral form.
                  </p>
                </div>
              </div>
            </section>
            <section aria-labelledby="bridal-heading">
              <h2 id="bridal-heading" className="text-3xl text-primary">
                Choosing a South Indian bridal look
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Coordinate the metal tone, scale and motifs with the outfit and the jewellery you
                already plan to wear. A statement necklace can sit alongside simpler earrings or
                bangles; consider how layered pieces rest against the blouse neckline and saree.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Prioritize secure, comfortable fittings and try the full combination before the
                event. Check weight, movement and whether ornaments catch on the fabric; ornate
                styling need not mean wearing every possible piece.
              </p>
            </section>
            <section aria-labelledby="care-heading">
              <h2 id="care-heading" className="text-3xl text-primary">
                Practical care and storage
              </h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
                <li>
                  Keep jewellery dry and away from perfume, hairspray and household chemicals. Put
                  it on after applying personal-care products.
                </li>
                <li>
                  After wearing, wipe gently with a soft, dry cloth; avoid scrubbing textured
                  details.
                </li>
                <li>
                  Store pieces separately in a lined pouch or box to reduce rubbing and tangling.
                </li>
                <li>
                  Follow the maker’s instructions for the specific metal, finish and any stones. Do
                  not assume that soaking, polishing compounds or ultrasonic cleaning are suitable.
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                If a fitting feels loose or a finish looks damaged, seek advice from the maker or a
                qualified jewellery professional before wearing or cleaning it further.
              </p>
            </section>
            <section aria-labelledby="sources-heading">
              <h2 id="sources-heading" className="text-3xl text-primary">
                Sources
              </h2>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <a
                    href="https://handicrafts.nic.in/crafts/All_Crafts/Craft_Categories/Miscellaneous/Jewellery/Temple_Jewellery_of_Nagercoil/TempleJewelleryofNagercoilWebPage.html"
                    className="border-b border-accent pb-0.5 text-primary transition-colors hover:border-primary"
                  >
                    Temple Jewellery of Nagercoil
                  </a>{" "}
                  — Government of India, Office of the Development Commissioner (Handicrafts).
                  Background reading on the craft tradition; no text copied.
                </li>
              </ul>
            </section>
            <nav aria-label="Related reading" className="border-t border-border pt-8">
              <h2 className="text-2xl text-primary">Continue exploring</h2>
              <ul className="mt-5 space-y-4 text-sm text-primary">
                <li>
                  <Link
                    to="/varalakshmi-vratham-gold-jewellery"
                    className="underline underline-offset-4"
                  >
                    Varalakshmi Vratham Gold Jewellery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/varalakshmi-vratham-gold-jewellery"
                    hash="temple-jewellery-faqs"
                    className="underline underline-offset-4"
                  >
                    Temple Jewellery FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="underline underline-offset-4">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </main>
      <footer className="bg-maroon-deep text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <p className="font-display text-2xl">Indriya</p>
          <p className="mt-3 text-xs text-ivory/80">
            Student assignment demo. Imagery is representational; no certifications, availability,
            prices, sourcing or guarantees are asserted.
          </p>
        </div>
      </footer>
    </div>
  );
}
