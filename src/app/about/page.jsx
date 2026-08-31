import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

const upworkUrl =
  'https://www.upwork.com/freelancers/~0155cd3c28670522c7?viewMode=1'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target="_blank"
        rel="noreferrer"
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata = {
  title: 'About',
  description:
    'About Pawan Deore — full-stack software engineer focused on AI products, SaaS applications, APIs, and modern web development.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              width={320}
              height={320}
              alt="Pawan Deore"
              className="aspect-square rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              priority
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-500">
            About me
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I build software from product idea to production.
          </h1>

          <div className="mt-6 space-y-7 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <p>
              I’m Pawan, a full-stack software engineer with 5+ years of
              professional experience across frontend, backend, and AI-powered
              products. My strongest work sits at the intersection of product
              engineering, modern web development, and applied AI.
            </p>
            <p>
              I work with React, Next.js, TypeScript, Node.js, Python, FastAPI,
              PostgreSQL, OpenAI APIs, RAG, embeddings, and the surrounding
              infrastructure needed to ship reliable software.
            </p>
            <p>
              Alongside professional product work, I’ve built 250+ technical
              projects and experiments to explore new technologies, test ideas,
              and understand how systems behave beyond the happy path.
            </p>
            <p>
              I care about clean architecture, pragmatic decisions, clear
              communication, and shipping useful software instead of
              over-engineering for its own sake.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              What I’m best at
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'AI-powered SaaS products',
                'React & Next.js applications',
                'Python / FastAPI backends',
                'Node.js APIs & integrations',
                'RAG & document intelligence',
                'PostgreSQL data applications',
                'MVP product engineering',
                'Existing product improvements',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-100 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-700/40 dark:text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Outside of code
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              I enjoy travelling, experimenting with new technology, building
              side projects, and occasionally spending far too much time on
              Clash of Clans.
            </p>
          </div>
        </div>

        <div className="lg:pl-20">
          <Button
            href={upworkUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            Hire me on Upwork
          </Button>

          <ul
            role="list"
            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
          >
            <SocialLink
              href="https://github.com/pavandeore"
              icon={GitHubIcon}
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/pawandeore/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
