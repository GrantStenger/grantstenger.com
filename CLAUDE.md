# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Next.js 16, showcasing writing, books, essays, and quotes. The site uses the App Router architecture and is deployed on Vercel.

## Development Commands

```bash
# Install dependencies
yarn install

# Run development server (http://localhost:3000)
yarn dev

# Build for production (must use webpack, not turbopack)
yarn build --webpack

# Start production server
yarn start

# Run linter
yarn lint

# Auto-fix linting issues
yarn lint:fix
```

## Architecture

### Content System

The site uses a **data-driven architecture** where all content (articles, books, essays, quotes) is stored as TypeScript arrays in `data/*.ts` files:

- `data/articles.ts` - Personal articles with full content stored inline
- `data/books.ts` - Book recommendations with external links
- `data/essays.ts` - Essay recommendations with external links
- `data/quotes.ts` - Quote collection

**Article Content Types:**
- Articles can have `contentType: 'markdown'` (default) or `contentType: 'latex'`
- Articles can be inline content (stored in `content` field) or external PDFs (`pdfUrl` field)
- PDF articles are listed but route to external PDFs, not rendered pages

### Routing Structure

Uses Next.js App Router:
- `/` - Home page (app/page.tsx)
- `/about` - About page
- `/writing` - Writing index (uses ContentPage component)
- `/writing/[slug]` - Individual articles (app/writing/[slug]/page.tsx)
  - Only generates static pages for non-PDF articles
  - PDF articles redirect to external URLs
- `/books` - Books index
- `/essays` - Essays index
- `/quotes` - Quotes page

### Component Architecture

**Page Components:**
- `ContentPage` - Generic list view with search (books, essays, writing index)
- `ArticlePage` - Individual article renderer with TOC, progress bar, and markdown/LaTeX support
- `Header` - Navigation with custom search modal
- `Footer` - Site footer

**Key Features:**
- Search functionality in Header (modal-based) and ContentPage (inline)
- Table of contents auto-generated from markdown headings (h1-h3)
- Reading progress bar for long articles
- KaTeX integration for math rendering (both inline and block equations)
- Responsive design with mobile-first approach

### Webpack Configuration

**Critical:** The build MUST use webpack (not turbopack) because:
- Custom webpack rule for `.tex` files using `raw-loader`
- TypeScript declaration in `types/tex.d.ts` allows importing `.tex` files as strings
- Build command: `yarn build --webpack` (enforced in package.json)

### Styling

- **Framework:** Tailwind CSS 4.x
- **Theme:** Dark theme (black background, white text)
- **Custom Font:** ABC Diatype loaded as local font in app/layout.tsx
- **UI Components:** Custom components in `components/ui/` built with Radix UI primitives

### Math Rendering

Uses KaTeX with React Markdown plugins:
- `remark-math` - Parse math syntax in markdown
- `rehype-katex` - Render math with KaTeX
- Inline math: `$...$`
- Block math: `$$...$$`
- KaTeX CSS imported in layout.tsx and ArticlePage

## Key Technical Constraints

1. **TypeScript Version:** Pinned to 4.5.5 for compatibility
2. **Image Optimization:** Remote patterns configured for hackmd.io in next.config.mjs
3. **Analytics:** Vercel Analytics integrated in layout.tsx
4. **Static Generation:** Articles without pdfUrl are statically generated at build time

## Content Management

When adding new content:
- Articles: Add to `data/articles.ts` with title, description, slug, author, and content
- Books/Essays: Add to respective data files with title, author, year/description, and link
- Quotes: Add to `data/quotes.ts` with title (quote text) and author

## Common Patterns

**Filtered Content:**
```typescript
const filteredItems = items.filter(item =>
  item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  (item.author || '').toLowerCase().includes(searchQuery.toLowerCase())
)
```

**Routing Logic:**
- External links (`item.link`) - Open in new tab
- PDF articles (`item.pdfUrl`) - Direct link to PDF
- Internal articles (`item.slug`) - Navigate to `/writing/${slug}`
