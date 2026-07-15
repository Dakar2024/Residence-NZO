# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet

Site vitrine immobilier « Résidence NZO » (villa au 81 Wattel Road, Golf Park, Meyerton, Afrique du Sud — disponible au 1er septembre 2026). Implémenté à partir du prototype approuvé `../site-web-visite-virtuelle-maison/project/Residence NZO.dc.html` (référence visuelle en cas de doute sur le design). Base : starter https://github.com/lumeida-tech/react-app-starter.

## Commandes

Gestionnaire : **bun** (pas npm — les scripts appellent `bun --bun` et `server.ts` utilise `Bun.serve`). Sous WSL, bun est dans `~/.bun/bin` (ajouté au PATH via `.bashrc`).

```bash
bun install          # dépendances
bun run dev          # dev server http://localhost:3000 (+ devtools port 42071)
bun run build        # build production (client + SSR)
bun run test         # vitest
```

**Workflow i18n (obligatoire après tout changement de texte visible)** :
```bash
bun run extract      # extrait les chaînes vers src/locales/{fr,en}/messages.po
# remplir les msgstr vides dans src/locales/en/messages.po
bun run compile      # compile les catalogues (messages.ts)
```

## Points d'attention environnement

- Le projet est sur `/mnt/c` (WSL2) : inotify ne fonctionne pas → `vite.config.ts` active `watch.usePolling`. Ne pas le retirer.
- Un seul dev server à la fois : le port devtools 42071 est fixe ; « Failed to start server. Is port 42071 in use? » = un autre `bun run dev` tourne déjà.
- `src/routeTree.gen.ts` est généré par le plugin TanStack Router — ne jamais l'éditer.

## Architecture

Stack : TanStack Start (React 19, SSR) + Vite 7 + Tailwind v4 + Lingui (i18n) + Motion (animations).

### Routing & i18n (le point le plus structurant)

- Routes fichiers dans `src/app/` (config `routesDirectory: "app"`), toutes préfixées par la langue : `/$lang/` (landing), `/$lang/privacy`.
- `src/middlewares/i18n.ts` : middleware serveur qui redirige (307) toute URL sans préfixe de langue vers la locale préférée — cookie `locale` s'il existe, sinon `DEFAULT_LOCALE` (**`en`**, défini dans `src/lib/i18n-utils.ts`).
- Le choix de langue est persisté 1 an via le cookie `locale` (server function `src/shared/actions/cookies.ts`), écrit quand l'utilisateur clique FR/EN dans la nav.
- Lingui : locale source **fr** (le français est écrit inline dans les composants via `<Trans>` / `t\`\``), l'anglais vit dans `src/locales/en/messages.po`. Les libellés définis hors composants (ex. noms de pièces dans `data.ts`) utilisent le macro `msg` et sont résolus par `i18n._(label)`.
- Liens internes entre pages : `LocalizedLink` (`src/shared/components/`) qui préfixe automatiquement la locale. Les ancres de sections (`#visite`, `#galerie`…) ne fonctionnent que sur la landing — c'est pourquoi `privacy.tsx` a son propre header/footer minimal au lieu de réutiliser `SiteNav`/`SiteFooter`.

### Code du site : `src/features/residence/`

- **`data.ts` — source de vérité unique** : chemins des images (`IMAGES`), ordre de la visite guidée (`TOUR_STEPS`, ordre validé par la cliente : façade → salon → cuisine → chambres → sdb principale → golf en dernier), carrousel salon (`LIVING_SLIDES`), ordre galerie (`GALLERY_IMAGES`), téléphone/WhatsApp/Google Maps. Toute donnée métier se change ici, pas dans les composants.
- **`components/`** : un fichier par groupe de sections (`nav`, `hero`, `about`, `tour`, `rooms`, `highlights`, `gallery`, `contact` — ce dernier contient aussi `CtaBanner` et `SiteFooter`). La page est assemblée dans `src/app/$lang/index.tsx`.
- **`hooks/use-swipe.ts`** : détection de swipe horizontal (seuil 48 px, geste clairement horizontal pour ne pas bloquer le scroll vertical). Utilisé par les deux carrousels (visite guidée et salon) — à réutiliser pour tout nouveau carrousel.
- **`components/reveal.tsx`** : wrapper d'apparition au scroll (Motion `whileInView`), respecte `prefers-reduced-motion`. Conséquence : dans une capture headless pleine page, les sections hors viewport paraissent vides — émuler `reducedMotion: 'reduce'` pour les screenshots.

### Design tokens

Déclarés dans le `@theme` de `src/styles.css` (issus du prototype approuvé — ne pas en dévier) : `gold #c9a26b`, `navy #1b2a41`, `ink #14181f`, `cream #faf9f7`, `sand`, `mute`, etc. + `font-display` (Cormorant Garamond) / `font-body` (Jost), auto-hébergées via imports `@fontsource` dans `__root.tsx`. Le site a un thème unique fixe (pas de dark mode) ; le `ThemeProvider` next-themes du starter est inoffensif car toutes les couleurs sont explicites.

### Décisions notables

- **Formulaire de contact = WhatsApp, sans backend** : à la soumission, ouvre `wa.me/<numéro>?text=<message pré-rempli localisé>`. Pas d'envoi serveur.
- **Google Maps sans clé API** : iframe `google.com/maps?q=…&output=embed` (adresse dans `data.ts`). Si une clé est ajoutée un jour, basculer sur la Maps Embed API au même endroit.
- **Champs de formulaire ≥ 16px** (`text-base`) : en dessous, iOS Safari zoome au focus.
- Le numéro de téléphone ne s'affiche jamais en clair (choix cliente) : uniquement via boutons `tel:`/`wa.me`.
- Images dans `public/images/` avec noms sémantiques ; photos sources dans `../Toff/`.

### Restes du starter (inutilisés mais présents)

`src/shared/{requests,hooks,stores}`, proxy `/api/todos` dans `vite.config.ts`, intégrations Stripe/react-hook-form dans `package.json`. Sans effet sur le site ; supprimables si besoin de nettoyage. (Les composants `Navbar`/`LanguageSwitcher`/`ThemeSwitcher` du starter ont déjà été supprimés : la Navbar référençait les routes de démo supprimées et cassait le typecheck.)
