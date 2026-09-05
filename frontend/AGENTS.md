<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Qelmora Design System Guidelines (MANDATORY FOR ALL UI COMPONENT CREATION & EDITS)

- **Style Aesthetic**: Minimal, ultra-clean, flat design (inspired by Linear / Vercel).
- **NO Gradients**: Absolutely NO gradient backgrounds (`bg-gradient-*`), gradient text, or gradient borders.
- **NO Glassmorphism**: Avoid heavy blurs (`backdrop-blur`), noisy drop shadows, or glow effects.
- **Color Palette**: Solid dark slate surfaces (`bg-slate-950`, `bg-slate-900`, `bg-slate-800`) and high-contrast text (`text-slate-100` primary, `text-slate-400` secondary, `text-slate-500` muted).
- **Borders & Sizing**: Use subtle 1px borders (`border-slate-800`, `border-slate-700`). Always maintain constant border sizing (`border border-transparent` for non-active states) to prevent layout shifts.
- **Interactivity**: Subtle background fill shifts on hover/active (`hover:bg-slate-900`, `bg-slate-800 text-slate-100`).

