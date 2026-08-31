import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Pawan Deore',
    default: 'Pawan Deore - Full-Stack AI & SaaS Engineer',
  },
  description:
    'Full-stack software engineer with 5+ years of experience building AI-powered products, SaaS applications, APIs, and modern web applications with React, Next.js, Python, FastAPI, Node.js, PostgreSQL, and OpenAI.',
  openGraph: {
    title: 'Pawan Deore - Full-Stack AI & SaaS Engineer',
    description:
      'Production-ready AI products, SaaS applications, APIs, and modern full-stack software.',
    type: 'website',
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
