import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indriya Temple Jewellery | Student Concept" },
      {
        name: "description",
        content:
          "Explore an independent student concept on Varalakshmi Vratham and temple jewellery.",
      },
      { property: "og:title", content: "Indriya Temple Jewellery | Student Concept" },
      {
        property: "og:description",
        content: "Discover temple-inspired adornment and guidance for sacred celebrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/varalakshmi-vratham-gold-jewellery" });
  },
});
