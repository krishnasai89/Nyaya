# ⚖️ Nyāya Philosophy Knowledge Engine (`v2026.6.20`)

An enterprise-grade, high-fidelity dynamic Next.js application built to index, parse, and visually deconstruct the classical text parameters of Sage Akṣapāda Gautama's **Nyāya Sūtras**.

This platform bridges ancient Sanskrit analytical realism with modern frontend system architecture. It models the core logical taxonomies, input checking channels, and error-neutralization lifecycles as a deterministic software pipeline.

---

## 🗺️ System Topology & Workspace Mapping

The repository leverages the Next.js App Router layout engine, mapping dynamic routing paths cleanly to nested database objects:

```text
src/
├── app/
│   ├── globals.css         # Custom thin webkit scrollbar overrides & dark canvas base
│   ├── layout.js          # Root document context. Injects global Preloader, Cursor, Navbar, and Footer
│   ├── page.js            # Platform entry point orchestration layer (Loads Spatial grid modules)
│   └── chapters/
│       └── [chapterId]/
│           ├── page.jsx    # Chapter Viewport: Filters verses array into serialized Āhnikas
│           └── verses/
│               └── [verseId]/
│                   └── page.jsx  # Leaf node: Decodes a single sūtra's dialectical metadata parameters
├── components/
│   ├── Navbar.jsx         # Status bar tracking live metrics (4 Pramāṇas / 16 Padārthas) across viewports
│   ├── Footer.jsx         # Structural closure panel showing compilation logs and licensing tracks
│   ├── Preloader.jsx      # Boot routine executing Sūtra 1.1.2 reverse error-neutralization algorithms
│   ├── NyayaCursor.jsx    # High-performance atomic Manas (Aṇu) cursor follower using GSAP
│   └── spatial/
│       ├── ChaptersPage.jsx       # Dynamic routing entry gateways for individual chapters
│       ├── NyayaAiIntegration.jsx # Advanced verification middleware hooks
│       ├── NyayaHero.jsx          # Parallax engine with responsive text-based pipeline graphic
│       ├── NyayaModernFuture.jsx  # Analytical realism mapping dashboards
│       ├── PramanasModule.jsx     # Sensor port layout grid checking sensori-deductive bounds
│       ├── SyllogismSequence.jsx  # 5-step formal proof compiler visual tracking bars
│       └── UpgradeMap.jsx         # Metaphysical asset mapping blocks
├── data/
│   └── nyayaDb.json       # Complete 5-tier compiled data substrate containing all 528 sūtras
└── lib/
    └── utils.js           # Shared utility layer managing dynamic layout style unions
```

## ⚙️ Core Metaphysical Architecture Specs

The front-end user experience is tightly bound to explicit definitions from the Nyāya text substrate:

### 1. The Single-Threaded Router (Manas)

- **Philosophical Constant:** Per Sūtra 3.2.57, the mind tool (Manas) is an indivisible atomic point particle (Aṇu). It hops at high speeds between sensors because humans can only process a single serialized frame of focused consciousness per clock cycle.

### 2. The Reverse Error-Neutralization Boot Sequence

- **Philosophical Constant:** Per Sūtra 1.1.2, suffering is an un-optimized chain reaction. Erasing the root delusion node sequentially breaks downstream defects, terminating the lifecycle generation loops.

- **Code Implementation (Preloader.jsx):** The startup screen runs an automated loop that counts from 0% to 100%, flashing confirmation flags as it clears out MITHYĀ_JÑĀNA (False Knowledge), DOṢA (Defects), PRAVṚTTI (Activity), JANMA (Birth), and DUḤKHA (Pain) before unmounting the splash layer.

## 🚀 Local Installation & Deployment Runtime

Follow this precise execution sequence to spin up the local development environment or build production assets.

**Prerequisite Dependencies**
Verify your terminal machine has Node.js (>= 18.17.0) initialized.

### 1. Clone the Code Repository Base

```Bash
git clone [https://github.com/yourusername/nyaya-philosophy-engine.git](https://github.com/yourusername/nyaya-philosophy-engine.git)
cd nyaya
```

### 2. Hydrate Project Packages

Install the required development core libraries, layout components, and animation drivers:

```Bash
npm install
```

### 3. Initialize Missing UI Elements

If your environment triggers path compilation errors regarding shadcn primitives, re-verify and add the component files from the registry:

```Bash
npx shadcn@latest add badge
npx shadcn@latest add card
```

### 4. Run the Development Server Engine

Launch the project using Next.js Next-gen Turbopack compiler architecture:

```Bash
npm run dev
```

Open your browser network viewport to http://localhost:3000 to stream the live interface logs.

### 5. Compile the Production Build Matrix

To optimize file sizing, compile code vectors into high-performance static server assets:

```Bash
npm run build
npm start
```
