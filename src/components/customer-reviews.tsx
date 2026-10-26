import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { customerReviews, REVIEW_ROTATION_MS } from "@/lib/customer-reviews";

export function CustomerReviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const review = customerReviews[index];

  useEffect(() => {
    if (paused || interacting) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % customerReviews.length);
    }, REVIEW_ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [paused, interacting, index]);

  const move = (direction: number) => {
    setIndex((current) => (current + direction + customerReviews.length) % customerReviews.length);
  };

  if (!review) return null;

  return (
    <section
      aria-labelledby="reviews-heading"
      className="border-y border-border bg-card py-16 lg:py-20"
    >
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <p className="eyebrow text-center">In their own words</p>
        <h2 id="reviews-heading" className="mt-3 text-center text-3xl text-primary lg:text-4xl">
          What Reviewers Say
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Google reviews · Transcribed from supplied screenshots
        </p>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
          className="mt-10"
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onFocusCapture={() => setInteracting(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
          }}
        >
          <div
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${customerReviews.length}`}
            aria-live={paused || interacting ? "polite" : "off"}
            className="grid min-h-[440px] content-start justify-items-center text-center sm:min-h-[310px]"
          >
            <Quote aria-hidden="true" className="h-8 w-8 text-accent" strokeWidth={1.2} />
            <div className="mt-5 flex gap-1" role="img" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, star) => (
                <Star
                  key={star}
                  aria-hidden="true"
                  className={star < review.rating ? "h-4 w-4 fill-accent text-accent" : "h-4 w-4 text-muted-foreground"}
                />
              ))}
            </div>
            <blockquote className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground sm:text-xl">
              <p>“{review.text}”</p>
            </blockquote>
            <p className="mt-6 font-medium text-primary">{review.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{review.date} · As shown in screenshot</p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 border-t border-border pt-6">
            <Button variant="outline" size="icon" aria-label="Previous review" title="Previous review" onClick={() => move(-1)}>
              <ArrowLeft aria-hidden="true" />
            </Button>
            <span className="w-12 text-center text-sm tabular-nums text-muted-foreground">
              {index + 1} / {customerReviews.length}
            </span>
            <Button variant="outline" size="icon" aria-label="Next review" title="Next review" onClick={() => move(1)}>
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button variant="outline" size="icon" aria-label={paused ? "Resume review rotation" : "Pause review rotation"} title={paused ? "Resume review rotation" : "Pause review rotation"} onClick={() => setPaused((current) => !current)}>
              {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}