# Frisà Bistrò — Sito web

Sito React + Vite per [Frisà Bistrò](https://www.frisabistro.com), ristorante pugliese a Milano Isola con musica jazz live.

## Stack

- React 19 + TypeScript
- Vite 8 + Tailwind CSS v4
- React Router (multi-pagina)
- react-helmet-async (SEO)
- react-helmet-async + sitemap/JSON-LD per SEO

## Sviluppo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Prenotazioni (Formspree)

Copia `.env.example` in `.env` e imposta `VITE_FORM_ENDPOINT` con il tuo endpoint Formspree o Web3Forms.

Senza endpoint configurato, il form simula l'invio in locale.

## Immagini

Per riscaricare le immagini dal sito Wix:

```bash
bash scripts/download-images.sh
```

## Deploy su Vercel

Il progetto include `vercel.json` con:
- **Framework:** Vite
- **Output:** `dist`
- **Rewrites SPA** per `/menu`, `/eventi`, ecc.
- Redirect da `/reservations` → `/prenota`

In Vercel Dashboard → Project Settings → Build & Development:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Poi fai **Redeploy** (o push su `main`).
