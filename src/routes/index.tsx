import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indriya | Sacred Celebrations & Temple Jewellery" },
      { name: "description", content: "Explore Indriya’s Varalakshmi Vratham jewellery page and educational temple jewellery guide." },
      { property: "og:title", content: "Indriya | Sacred Celebrations & Temple Jewellery" },
      { property: "og:description", content: "Discover temple-inspired adornment and guidance for sacred celebrations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/varalakshmi-vratham-gold-jewellery" });
  },
});
