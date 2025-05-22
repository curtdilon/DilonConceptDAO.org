import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DilonConceptDAO',
  description: 'A virtual country implementation of the Dilon Concept',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Netlify Analytics Script */}
        <Script id="netlify-analytics" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined' && window.location.hostname.includes('dilonconceptdao.org')) {
              (function(n,e,t,l,i,f,y){
                n.NetlifyAnalyticsObject=i;
                n[i]=n[i]||function(){(n[i].q=n[i].q||[]).push(arguments)};
                n[i].l=1*new Date();f=e.createElement(t);y=e.getElementsByTagName(t)[0];
                f.async=1;f.src=l;y.parentNode.insertBefore(f,y);
              })(window,document,'script','https://cdn.netlify.com/analytics/v1/netlify-analytics.js','na');
              na('init', 'YOUR-NETLIFY-ANALYTICS-ID'); // Replace with actual ID when deploying
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
