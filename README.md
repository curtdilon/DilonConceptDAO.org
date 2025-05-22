# DilonConceptDAO Website

A Next.js website for the DilonConceptDAO virtual country implementation of the Dilon Concept.

## Overview

This website serves as the online presence for DilonConceptDAO, a virtual country implementation of the Dilon Concept that allows for testing resource-based economic principles in a controlled environment. The site provides information about the Dilon Concept, the virtual country implementation, governance structure, citizenship NFTs, and more.

## Features

- Responsive design with mobile and desktop support
- Yellow primary theme color (#FFFF00)
- Top navigation menu
- Informative pages about the Dilon Concept and DAO
- Blog section for updates and news
- FAQ section for common questions
- Contact form for inquiries
- Netlify analytics integration

## Tech Stack

- Next.js 13+ (React framework)
- TypeScript
- Tailwind CSS for styling
- Netlify for hosting and analytics

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/DilonConceptDAO_site.git
   cd DilonConceptDAO_site
   ```

2. Install dependencies:
   ```
   pnpm install
   ```
   or with npm:
   ```
   npm install
   ```

3. Start the development server:
   ```
   pnpm dev
   ```
   or with npm:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### Netlify Deployment

This site is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Set up your custom domain (dilonconceptdao.org)

### Netlify Analytics Configuration

The site includes Netlify Analytics integration. To enable it:

1. In the Netlify dashboard, enable Analytics for your site
2. Get your Netlify Analytics ID
3. Replace `YOUR-NETLIFY-ANALYTICS-ID` in `src/app/layout.tsx` with your actual ID

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - Reusable React components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and libraries
- `public/` - Static assets like images

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For questions or support, please contact info@dilonconceptdao.org
