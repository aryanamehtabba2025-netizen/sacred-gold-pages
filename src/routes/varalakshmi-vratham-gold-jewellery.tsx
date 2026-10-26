import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BadgeCheck, CalendarDays, Gem, Instagram, Repeat } from "lucide-react";
import { templeJewelleryFaqs } from "@/lib/temple-jewellery-faqs";
import { bridalJewelleryFaqs } from "@/lib/bridal-jewellery-faqs";
import { varalakshmiVrathamFaqs } from "@/lib/varalakshmi-vratham-faqs";

import heroImg from "@/assets/hero-varalakshmi.jpg";
import necklaceImg from "@/assets/cat-lakshmi-necklace.jpg";
import banglesImg from "@/assets/cat-temple-bangles.jpg";
import earringsImg from "@/assets/cat-bridal-earrings.jpg";
import bridalSetImg from "@/assets/cat-bridal-sets.jpg";
import craftImg from "@/assets/craft-detail.jpg";
import logoAsset from "@/assets/indriya-logo.png.asset.json";
import storeImg from "@/assets/store-consultation.jpg";

const CANONICAL = "https://www.indriya.com/varalakshmi-vratham-gold-jewellery";
const TITLE = "Varalakshmi Vratham Gold Jewellery | Indriya";
const DESCRIPTION =
  "Discover Varalakshmi Vratham gold jewellery by Indriya, from Lakshmi necklaces and temple bangles to antique earrings for sacred celebrations.";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.indriya.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Temple Jewellery",
      item: "https://www.indriya.com/temple-jewellery",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Varalakshmi Vratham Gold Jewellery",
      item: CANONICAL,
    },
  ],
};

export const Route = createFileRoute("/varalakshmi-vratham-gold-jewellery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "article:published_time", content: "2026-10-26" },
      { property: "article:modified_time", content: "2026-10-26" },
      { property: "article:author", content: "Aryan Mehta" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: bridalJewelleryFaqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          author: { "@type": "Person", name: "Aryan Mehta" },
          publisher: { "@type": "Organization", name: "Indriya" },
          datePublished: "2026-10-26",
          dateModified: "2026-10-26",
          mainEntityOfPage: CANONICAL,
        }),
      },
    ],
  }),
  component: VaralakshmiPage,
});

const navLinks = [
  { label: "Jewellery", href: "https://www.indriya.com/jewellery" },
  { label: "Gold", href: "https://www.indriya.com/gold" },
  { label: "Temple Jewellery", href: "https://www.indriya.com/temple-jewellery" },
  { label: "Weddings", href: "https://www.indriya.com/wedding" },
  { label: "Stores", href: "https://www.indriya.com/jewellery-stores" },
];

const categories = [
  {
    title: "Antique Lakshmi Necklaces",
    image: necklaceImg,
    alt: "Antique gold necklace with a Lakshmi motif pendant resting on ivory silk",
    copy: "An antique gold necklace centred on the goddess, finished with kasu-inspired discs and a softly aged lustre made for pooja mornings.",
    cta: "View Necklaces",
    href: "https://www.indriya.com/jewellery/neckwear",
  },
  {
    title: "Temple Jewellery Bangles",
    image: banglesImg,
    alt: "Close-up of temple jewellery bangles with intricate Lakshmi-inspired detailing",
    copy: "Temple jewellery bangles carved with deities and beaded borders, designed to stack quietly or stand alone against silk.",
    cta: "View Bangles",
    href: "https://www.indriya.com/jewellery/bangles",
  },
  {
    title: "Antique Bridal Earrings",
    image: earringsImg,
    alt: "Antique bridal earrings styled with a South Indian silk saree",
    copy: "Antique bridal earrings in jhumka and chandbali silhouettes, weighted for comfort through long ceremonies.",
    cta: "View Earrings",
    href: "https://www.indriya.com/jewellery/earrings",
  },
  {
    title: "South Indian Bridal Jewellery Sets",
    image: bridalSetImg,
    alt: "Bride in an ivory silk saree wearing a complete set of South Indian bridal jewellery in antique gold",
    copy: "Complete south indian bridal jewellery sets — layered haaram, choker, belt and earrings — composed as one considered story.",
    cta: "View Bridal Sets",
    href: "https://www.indriya.com/wedding",
  },
];

const trustCards = [
  {
    icon: BadgeCheck,
    title: "BIS Hallmarked Gold",
    copy: "Every piece is described with its gold purity and hallmark details.",
  },
  {
    icon: Gem,
    title: "Transparent Pricing",
    copy: "Metal rate, making and applicable charges shown clearly before you buy.",
  },
  {
    icon: Repeat,
    title: "Lifetime Exchange",
    copy: "Exchange your jewellery as tastes and occasions change, per policy terms.",
  },
];

const exploreLinks = [
  { label: "Temple Jewellery Collection", href: "https://www.indriya.com/temple-jewellery" },
  { label: "Gold Necklaces", href: "https://www.indriya.com/jewellery/neckwear" },
  { label: "Gold Bangles", href: "https://www.indriya.com/jewellery/bangles" },
  { label: "Store Locator", href: "https://www.indriya.com/jewellery-stores" },
];

function VaralakshmiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="/" aria-label="Indriya home" className="shrink-0">
            <img
              src={logoAsset.url}
              alt="Indriya Aditya Birla Jewellery logo"
              width={841}
              height={650}
              className="h-12 w-auto lg:h-14"
            />
          </a>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground underline-offset-8 transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            asChild
            variant="outline"
            className="border-accent/60 bg-transparent text-primary hover:bg-secondary"
          >
            <a href="https://www.indriya.com/jewellery-stores">Find a Store</a>
          </Button>
        </div>
        <nav aria-label="Primary mobile" className="lg:hidden">
          <ul className="flex gap-6 overflow-x-auto border-t border-border/60 px-5 py-3">
            {navLinks.map((l) => (
              <li key={l.label} className="shrink-0">
                <a
                  href={l.href}
                  className="text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-maroon-deep">
          <img
            src={heroImg}
            alt="Woman wearing Varalakshmi Vratham gold jewellery with an antique Lakshmi necklace"
            width={1408}
            height={1760}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[60%_center] opacity-80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.25_0.075_20/0.94),oklch(0.25_0.075_20/0.62)_55%,oklch(0.25_0.075_20/0.25))]"
          />
          <div className="relative mx-auto flex min-h-[86svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 lg:min-h-[78vh] lg:px-8 lg:pb-20">
            <p className="eyebrow text-gold-soft">Varalakshmi Vratham 2026</p>
            <h1 className="mt-4 max-w-xl text-[2.6rem] leading-[1.06] text-ivory sm:text-5xl lg:text-6xl">
              Varalakshmi Vratham Gold Jewellery
            </h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-ivory/70">
              <CalendarDays aria-hidden="true" className="h-4 w-4 text-gold-soft" />
              By Aryan Mehta · Published <time dateTime="2026-10-26">26 October 2026</time>
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ivory/85 lg:text-lg">
              Celebrate the sacred season with temple-inspired gold jewellery that honours devotion,
              heritage, and the Lakshmi in your life.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gold text-maroon-deep hover:bg-gold-soft">
                <a href="#collection">Explore the Collection</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ivory/50 bg-transparent text-ivory hover:bg-ivory/10 hover:text-ivory"
              >
                <a href="https://www.indriya.com/jewellery-stores">Find a Store Near You</a>
              </Button>
            </div>
            <a
              href="https://www.indriya.com/temple-jewellery"
              className="mt-6 inline-block w-fit border-b border-gold-soft/60 pb-0.5 text-sm text-gold-soft transition-colors hover:text-ivory"
            >
              View Temple Jewellery Designs
            </a>
          </div>
        </section>

        {/* Intro copy */}
        <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
          <div aria-hidden="true" className="mx-auto h-px w-24 rule-gold" />
          <p className="mt-10 text-lg leading-relaxed text-foreground lg:text-xl">
            In many South Indian homes, the search for Varalakshmi Vratham gold jewellery begins
            long before the kalasham is dressed. A necklace is taken out of its pouch, a bangle is
            tried against a new silk saree, and a daughter is told which piece was worn by her
            grandmother on the same morning. Gold becomes part of the ritual itself — quiet,
            deliberate, and full of memory.
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Gold has long been chosen for sacred celebrations because it carries more than beauty.
            It is an expression of faith, a symbol of prosperity welcomed into the home, and a
            record of a family's artistry and taste. Temple jewellery, in particular, draws its
            vocabulary from sculpture and shrine architecture — deities framed by arches, lotus
            petals opening around a stone, borders beaded like a gopuram edge. Worn on Vratham day,
            these pieces feel less like accessories and more like offerings.
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            At Indriya, our festive edit is built around that intent. There are pieces designed to
            be the single statement of the morning, and lighter designs meant to be layered with
            what you already own. Some are made for a first purchase after a wedding; others are
            chosen with a daughter in mind, years ahead of the occasion she will wear them for.
            Whichever you choose, the aim is the same — jewellery that holds its grace through the
            aarti, the visits, and every year it is brought out again.
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            This guide is written from our styling team's first-hand experience helping families
            choose jewellery for Vratham mornings, weddings, and festive visits — what to wear, how
            to layer it, and how to care for each piece so it lasts for the next generation.
          </p>
        </section>

        {/* Collection */}
        <section
          id="collection"
          className="bg-secondary/60 py-16 lg:py-24"
          aria-labelledby="collection-heading"
        >
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <p className="eyebrow">The Festive Edit</p>
            <h2 id="collection-heading" className="mt-3 max-w-xl text-3xl text-primary lg:text-4xl">
              Jewellery for Every Sacred Celebration
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:gap-10">
              {categories.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  className="group flex flex-col overflow-hidden border border-border bg-card shadow-[var(--shadow-editorial)] transition-colors hover:bg-card/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <img
                    src={c.image}
                    alt={c.alt}
                    width={900}
                    height={1100}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <article className="flex flex-1 flex-col p-6 lg:p-8">
                    <h3 className="text-2xl text-primary">{c.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {c.copy}
                    </p>
                    <span className="mt-6 w-fit border-b border-accent pb-1 text-xs uppercase tracking-[0.18em] text-primary transition-colors group-hover:border-primary">
                      {c.cta}
                    </span>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section
          className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24"
          aria-labelledby="craft-heading"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <img
              src={craftImg}
              alt="Macro view of temple jewellery designs showing lotus and peacock motifs in antique gold"
              width={1200}
              height={1400}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[6/7] w-full object-cover"
            />
            <div>
              <p className="eyebrow">Craftsmanship</p>
              <h2 id="craft-heading" className="mt-3 text-3xl text-primary lg:text-4xl">
                Heritage in Every Detail
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Our temple jewellery designs borrow from the grammar of South Indian shrines. A
                seated Lakshmi is framed by an arch; lotus petals fan outward in layers; a peacock
                turns its neck along the curve of a pendant. Kasu-inspired discs are strung so they
                move and catch light as you do, and antique finishes are worked to look gently
                lived-in rather than newly polished.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                In necklace temple jewellery especially, the detail sits close to the eye — beaded
                rims, granulated texture, and nakkashi-style surface work as a design inspiration
                behind the ornamentation. The result is jewellery meant to be looked at slowly, and
                worn for decades.
              </p>
              <a
                href="https://www.indriya.com/temple-jewellery"
                className="mt-8 inline-block border-b border-accent pb-1 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:border-primary"
              >
                Explore Temple Jewellery
              </a>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section
          className="border-y border-border bg-card py-16 lg:py-20"
          aria-labelledby="trust-heading"
        >
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <h2 id="trust-heading" className="text-center text-3xl text-primary lg:text-4xl">
              Crafted for a Legacy of Trust
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {trustCards.map((t) => (
                <div key={t.title} className="text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/50 bg-secondary">
                    <t.icon aria-hidden="true" className="h-6 w-6 text-accent" strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-5 text-xl text-primary">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
              Editable placeholder: these three assurances are to be reviewed and confirmed by the
              Indriya brand team against live policy before publishing.
            </p>
          </div>
        </section>

        {/* Store CTA */}
        <section className="relative isolate overflow-hidden">
          <img
            src={storeImg}
            alt="Jewellery consultant showing antique gold necklaces to a customer in an Indriya boutique"
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.075_20/0.92),oklch(0.25_0.075_20/0.55))]"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="max-w-lg">
              <h2 className="text-3xl text-ivory lg:text-4xl">
                Find Your Varalakshmi Vratham Jewellery
              </h2>
              <p className="mt-4 leading-relaxed text-ivory/85">
                Discover the details, craftsmanship, and fit of your chosen pieces in person.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-gold text-maroon-deep hover:bg-gold-soft"
              >
                <a href="https://www.indriya.com/jewellery-stores">Find a Store Near You</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Explore more */}
        <section
          className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20"
          aria-labelledby="explore-heading"
        >
          <h2 id="explore-heading" className="text-3xl text-primary lg:text-4xl">
            Explore More
          </h2>
          <ul className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {exploreLinks.map((l) => (
              <li key={l.label} className="bg-card">
                <a
                  href={l.href}
                  className="flex items-center justify-between px-6 py-5 text-sm text-primary transition-colors hover:bg-secondary"
                >
                  {l.label}
                  <span aria-hidden="true" className="text-accent">
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Bridal FAQ */}
        <section
          id="bridal-jewellery-faqs"
          className="py-16 lg:py-24"
          aria-labelledby="bridal-faq-heading"
        >
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <p className="eyebrow">Bridal Questions</p>
            <h2 id="bridal-faq-heading" className="mt-3 text-3xl text-primary lg:text-4xl">
              Bridal Jewellery FAQs
            </h2>
            <div className="mt-8 divide-y divide-border">
              {bridalJewelleryFaqs.map(({ q, a }) => (
                <article key={q} className="py-6">
                  <h3 className="text-xl text-primary">{q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="temple-jewellery-faqs"
          className="bg-secondary/60 py-16 lg:py-24"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <p className="eyebrow">Questions</p>
            <h2 id="faq-heading" className="mt-3 text-3xl text-primary lg:text-4xl">
              Temple Jewellery FAQs
            </h2>
            <div className="mt-8 divide-y divide-border">
              {templeJewelleryFaqs.map(({ q, a }) => (
                <article key={q} className="py-6">
                  <h3 className="text-xl text-primary">{q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
                </article>
              ))}
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-8 border-accent/60 bg-transparent text-primary hover:bg-secondary"
            >
              <Link to="/temple-jewellery-guide">Read the Temple Jewellery Guide</Link>
            </Button>
            <h3 className="mt-12 text-2xl text-primary">Varalakshmi Vratham Jewellery FAQs</h3>
            <Accordion type="single" collapsible className="mt-8">
              {varalakshmiVrathamFaqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-display text-lg text-primary hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-maroon-deep text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <img
            src={logoAsset.url}
            alt="Indriya Aditya Birla Jewellery logo"
            width={841}
            height={650}
            loading="lazy"
            className="h-16 w-auto brightness-0 invert"
          />
          <a
            href="https://www.instagram.com/indriyajewels/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-gold-soft/50 px-5 py-2.5 text-sm text-ivory transition-all hover:border-gold-soft hover:bg-gold-soft/10 hover:text-gold-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-soft"
          >
            <Instagram aria-hidden="true" className="h-5 w-5" />
            Follow us on Instagram
          </a>
          <nav aria-label="Footer" className="mt-8">
            <ul className="grid gap-4 text-sm sm:grid-cols-3 lg:grid-cols-4">
              {[
                { label: "Jewellery", href: "https://www.indriya.com/jewellery" },
                { label: "Gold", href: "https://www.indriya.com/gold" },
                { label: "Temple Jewellery", href: "https://www.indriya.com/temple-jewellery" },
                { label: "Weddings", href: "https://www.indriya.com/wedding" },
                { label: "Store Locator", href: "https://www.indriya.com/jewellery-stores" },
                { label: "Contact", href: "/contact" },
                { label: "Policies", href: "https://www.indriya.com/terms-and-conditions" },
              ].map((l) => (
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
            &copy; {new Date().getFullYear()} Indriya. Imagery is representational. Student
            assignment demo; no product availability or guarantees are asserted.
          </p>
        </div>
      </footer>
    </div>
  );
}
