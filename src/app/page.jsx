import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import logoProjectpro from '@/images/logos/projectpro-small-logo.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

const upworkUrl =
  'https://www.upwork.com/freelancers/~0155cd3c28670522c7?viewMode=1'

const linkedInUrl = 'https://www.linkedin.com/in/pawandeore/'
const resumeUrl =
  'https://drive.google.com/file/d/1oC0-1hjXlbjb9r563nU47EpqmgRPf9wk/view?usp=sharing'

const featuredProjects = [
  {
    name: 'AI-to-SQL Analytics Platform',
    description:
      'Natural-language analytics that turns user questions into SQL, retrieves the right database context, and presents query results as useful visual insights.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'OpenAI', 'RAG'],
  },
  {
    name: 'SEC Filing Intelligence',
    description:
      'Document intelligence and structured extraction for complex SEC filings with changing layouts, large financial tables, and validation requirements.',
    tech: ['Python', 'FastAPI', 'LLMs', 'Data Extraction'],
  },
  {
    name: 'Real-Time Interview AI',
    description:
      'A real-time AI interviewing product combining live audio, conversational AI, and application workflows for an interactive interview experience.',
    tech: ['React', 'WebRTC', 'OpenAI Realtime'],
  },
]

const services = [
  {
    title: 'AI Product Development',
    description:
      'LLM applications, RAG systems, document intelligence, AI workflows, and OpenAI integrations built around real product requirements.',
  },
  {
    title: 'Full-Stack SaaS Development',
    description:
      'Production web products using React, Next.js, Node.js, Python, FastAPI, PostgreSQL, authentication, billing, and third-party APIs.',
  },
  {
    title: 'MVP & Product Engineering',
    description:
      'From idea or Figma to a working MVP with pragmatic architecture, clean implementation, deployment, and room to scale.',
  },
  {
    title: 'Backend & API Development',
    description:
      'REST APIs, database design, integrations, background workflows, automation, and backend services for new or existing applications.',
  },
]

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      className="group -m-1 p-1"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-400" />
    </Link>
  )
}

function Role({ company, title, dates, logo, initials }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
        {logo ? (
          <Image src={logo} alt="" className="h-full w-full object-cover" unoptimized />
        ) : (
          <span className="text-xs font-bold tracking-wide text-teal-600 dark:text-teal-400">
            {initials}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-auto">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {company}
          </p>
          <p className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
            {dates}
          </p>
        </div>
        <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
          {title}
        </p>
      </div>
    </li>
  )
}

function Experience() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Professional experience</span>
      </h2>

      <ol className="mt-6 space-y-5">
        <Role
          company="HAI"
          title="Product & AI Engineering"
          dates="Jan 2026 — Present"
          initials="HAI"
        />
        <Role
          company="ProjectPro"
          title="Senior Frontend Engineer"
          dates="2021 — Dec 2025"
          logo={logoProjectpro}
        />
      </ol>

      <Button
        href={resumeUrl}
        target="_blank"
        rel="noreferrer"
        variant="secondary"
        className="mt-6 w-full"
      >
        View resume
      </Button>
    </div>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-teal-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  )
}

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 2)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-teal-500">
            Full-Stack + AI Product Engineer
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
            I build production-ready AI and SaaS products.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I’m Pawan, a software engineer with 5+ years of experience building
            modern web applications, APIs, AI-powered products, dashboards, and
            automation systems — from product idea to production.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={upworkUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5"
            >
              Hire me on Upwork
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              className="px-5 py-2.5"
            >
              View selected work
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-6">
            <SocialLink
              href="https://github.com/pavandeore"
              aria-label="GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={linkedInUrl}
              aria-label="LinkedIn"
              icon={LinkedInIcon}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-y border-zinc-100 py-5 text-sm text-zinc-600 dark:border-zinc-700/40 dark:text-zinc-400">
            <span>
              <strong className="text-zinc-900 dark:text-zinc-100">5+ years</strong>{' '}
              professional experience
            </span>
            <span>
              <strong className="text-zinc-900 dark:text-zinc-100">250+</strong>{' '}
              projects & experiments
            </span>
            <span>
              <strong className="text-zinc-900 dark:text-zinc-100">AI + SaaS</strong>{' '}
              end-to-end development
            </span>
          </div>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <SectionHeading
          eyebrow="Selected work"
          title="Complex products, not tutorial clones."
          description="A few examples of the kind of engineering work I enjoy: AI systems, data-heavy products, real-time experiences, and full-stack SaaS."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl border border-zinc-100 p-6 transition hover:border-teal-500/30 dark:border-zinc-700/40"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href="/projects"
                className="mt-6 inline-flex text-sm font-semibold text-teal-500 transition hover:text-teal-600 dark:hover:text-teal-400"
              >
                View project details →
              </Link>
            </div>
          ))}
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your product."
          description="I work best with founders and product teams that need someone who can think beyond a single ticket and own the technical path from idea to production."
        />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="border-l-2 border-teal-500 pl-5">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <SectionHeading
          eyebrow="Core stack"
          title="Modern full-stack engineering."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Python',
            'FastAPI',
            'Node.js',
            'PostgreSQL',
            'OpenAI',
            'RAG',
            'Embeddings',
            'Docker',
            'REST APIs',
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </Container>

      <Container className="mt-24 md:mt-32">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div>
            <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-teal-500">
              Technical writing
            </p>
            <div className="flex flex-col gap-12">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
          </div>
          <div className="lg:pl-16 xl:pl-24">
            <Experience />
          </div>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <div className="rounded-3xl bg-zinc-900 px-6 py-12 sm:px-10 dark:bg-zinc-800">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
            Have a product to build?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Let’s turn the requirement into working software.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            Whether you’re launching an MVP, adding AI to an existing product,
            or need an experienced engineer to own a feature end-to-end, send
            me the project details on Upwork.
          </p>
          <Link
            href={upworkUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
          >
            Start a project on Upwork
          </Link>
        </div>
      </Container>
    </>
  )
}
