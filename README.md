# Aforro Sales Dashboard

A production-grade Sales Analytics Dashboard built with **Next.js 15**, **TypeScript**, and **TailwindCSS** — created as a frontend engineering assignment for Aforro.

---

## Preview

The dashboard features a pixel-accurate recreation of the provided Figma design:
- 📊 **Stats Row** — 4 KPI cards (Total Sales, Orders, Products Sold, New Customers)
- 📈 **Visitor Insights** — multi-line area chart with loyal/new/unique customer trends
- 💰 **Total Revenue** — grouped bar chart (online vs offline sales by day)
- 😊 **Customer Satisfaction** — dual area chart with month-over-month comparison
- 🎯 **Target vs Reality** — grouped bar chart showing goal attainment
- 🏆 **Top Products** — ranked list with animated progress bars
- 🗺️ **Sales Mapping** — SVG world map with regional sales indicators
- 📦 **Volume vs Service Level** — grouped bar chart

---

## Project Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone or download the project
cd aforro-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` — it auto-redirects to `/dashboard`.

### Build for Production

```bash
npm run build
npm start
```

---

## Features Implemented

### Part 1 — UI Implementation
- ✅ Faithful Figma design recreation
- ✅ Responsive layout (Desktop / Tablet / Mobile)
- ✅ Collapsible mobile sidebar with Framer Motion drawer
- ✅ Top navbar with search, language dropdown, notification panel, profile
- ✅ 4 gradient stat cards with trend indicators
- ✅ 6 chart widgets using Recharts (Area, Bar)
- ✅ Top Products ranked table with animated progress bars
- ✅ SVG world map for Sales Mapping by Country
- ✅ Loading skeleton states across all components
- ✅ Micro-animations and hover effects (Framer Motion)

### Part 2 — API Integration & Data Table
- ✅ Fetches data from `https://jsonplaceholder.typicode.com/users`
- ✅ TanStack Table v8 for performant rendering
- ✅ **Search** — by name or email (debounced 280ms)
- ✅ **Sort** — by name A→Z / Z→A (with toggle)
- ✅ **Filter** — by city via dropdown
- ✅ Loading state — skeleton rows while fetching
- ✅ Error state — with retry button
- ✅ Empty state — illustrated message when no results

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15 | Framework (App Router) |
| TypeScript | 5 | Type safety |
| TailwindCSS | 3 | Styling |
| TanStack Table | 8 | Data table |
| Recharts | 2 | Charts |
| Framer Motion | 11 | Animations |
| Lucide React | latest | Icons |

---

## Architecture

```
/app
  /dashboard/page.tsx    ← Dashboard with all charts
  /users/page.tsx        ← Users data table
  layout.tsx             ← Root shell (Sidebar + Navbar)
  globals.css            ← Design tokens, utilities

/components
  /layout
    Sidebar.tsx          ← Collapsible nav, mobile drawer
    TopNavbar.tsx        ← Search, notifications, profile
  /dashboard
    StatsCards.tsx       ← KPI row
    *Chart.tsx           ← Individual chart widgets
    TopProductsTable.tsx ← Products ranked list
    SalesMappingCard.tsx ← SVG world map
  /users
    UsersTable.tsx       ← TanStack Table integration
    UserFilters.tsx      ← Search + Sort + Filter controls
  /ui
    StatCard.tsx         ← Reusable stat card atom
    ChartCard.tsx        ← Reusable chart wrapper
    LoadingSkeleton.tsx  ← Skeleton loaders

/lib
  api.ts                 ← Fetch wrappers for JSONPlaceholder
  mock-data.ts           ← Chart seed data
  utils.ts               ← cn(), formatters, debounce

/types
  user.ts                ← User API types
  dashboard.ts           ← Widget data types

/hooks
  useUsers.ts            ← Fetch + loading/error state
  useDebounce.ts         ← Generic debounce hook
```

---

## Design Decisions & Assumptions

1. **Figma Color Palette** — Extracted exact hex values from the screenshot:
   - Primary purple: `#6C5CE7`
   - Pink accent: `#FF7675`
   - Teal accent: `#00CEC9`
   - Yellow accent: `#FDCB6E`
   - Purple light: `#A29BFE`

2. **Charts via Recharts** — Chose Recharts over Chart.js for its React-native component model and better TypeScript support.

3. **World Map** — Implemented as an inline SVG (no external map library dependency) to keep the bundle lightweight.

4. **Debounced Search** — 280ms debounce prevents excessive re-renders while maintaining responsiveness.

5. **TanStack Table** — Used for column-level sorting (separate from the custom A-Z toggle) to provide both UI and programmatic sort paths.

6. **Mock Data** — Chart data is seeded from `lib/mock-data.ts` to match the Figma values. In production this would be replaced by real API endpoints.

7. **Next.js fetch caching** — Users API has `revalidate: 300` (5 min cache) to avoid redundant refetches.

---

## Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```
