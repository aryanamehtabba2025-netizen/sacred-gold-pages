<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Content architecture

- Keep each assignment FAQ set in its own browser-safe data module, shared by the landing page and its matching FAQPage JSON-LD, so visible text and structured data remain identical.
- The educational guide is a separate crawlable TanStack content route with leaf metadata and internal links; reuse existing design tokens and imagery to preserve the site's visual identity.
