# Dilon Concept DAO Website

This is the official website for the Dilon Concept DAO, built with Next.js and Tailwind CSS. It provides comprehensive information about the DAO, the Dilon Concept Foundation, and the integrated Gaming Environment.

## Project Structure

The project is a standard Next.js application with the following key directories:

-   `src/app/`: Contains the main pages of the website (e.g., `page.tsx` for homepage, `foundation/page.tsx`, `gaming/page.tsx`).
-   `src/components/`: Contains reusable React components like `Header.tsx` and `Footer.tsx`.
-   `public/`: Contains static assets like images (e.g., `images/dilon_concept_logo.png`).
-   `netlify.toml`: Configuration file for deploying to Netlify.

## Getting Started

### Prerequisites

-   Node.js (v18.x or later recommended)
-   npm or pnpm (pnpm is used by the Next.js template this was based on, but npm/yarn will also work if you adjust commands)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd dilonconceptdao_org_site
    ```

2.  **Install dependencies:**
    If using pnpm (recommended as per template):
    ```bash
    pnpm install
    ```
    Alternatively, if using npm:
    ```bash
    npm install
    ```
    Or yarn:
    ```bash
    yarn install
    ```

### Running the Development Server

To start the development server (usually on `http://localhost:3000`):

If using pnpm:
```bash
pnpm run dev
```
If using npm:
```bash
npm run dev
```
If using yarn:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build:

If using pnpm:
```bash
pnpm run build
```
If using npm:
```bash
npm run build
```
If using yarn:
```bash
yarn build
```
The build artifacts will be stored in the `.next` directory.

## Deployment to Netlify (via GitHub)

This project is configured for easy deployment to Netlify.

1.  **Push your code to a GitHub repository.**
2.  **Connect your GitHub repository to Netlify:**
    *   Log in to your Netlify account.
    *   Click on "Add new site" -> "Import an existing project".
    *   Connect to GitHub and authorize Netlify to access your repositories.
    *   Select the repository for this website.
3.  **Configure Build Settings (Netlify should auto-detect most from `netlify.toml`):**
    *   **Base directory:** (Leave blank if `netlify.toml` is in the root of your repo, or specify if the `dilonconceptdao_org_site` folder is not the root of your repo but `netlify.toml` is inside it. The current `netlify.toml` assumes it is in the parent directory of `dilonconceptdao_org_site` and `base` is set to `dilonconceptdao_org_site`.)
        *   *Correction based on current `netlify.toml`*: If `netlify.toml` is at the root of the `dilonconceptdao_website` directory (which contains `dilonconceptdao_org_site`), then the `base` directory in `netlify.toml` (`dilonconceptdao_org_site`) is correct. When connecting to Netlify, you point to the root of `dilonconceptdao_website`.
    *   **Build command:** `npm run build` (or `pnpm run build` / `yarn build` depending on your setup)
    *   **Publish directory:** `.next`
    *   The `@netlify/plugin-nextjs` should handle the rest automatically.
4.  **Deploy:** Click "Deploy site".

Netlify will build and deploy your site. You can set up custom domains and continuous deployment (auto-deploy on git push) in the Netlify dashboard.

## Key Technologies Used

-   Next.js (React Framework)
-   React
-   TypeScript
-   Tailwind CSS

## Content Sources

Content for the Foundation and Gaming sections was derived from previously generated documents:
-   `dilon_concept_foundation_design.md`
-   `research_synthesis_gaming_integration.md`

All other content was planned and drafted as part of the website development process.

