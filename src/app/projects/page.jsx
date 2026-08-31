import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'AI-to-SQL Analytics Platform',
    category: 'AI + Data',
    description:
      'Built a natural-language analytics workflow that translates user questions into SQL, retrieves relevant schema context, executes queries, and turns results into understandable visual insights.',
    highlights: [
      'Natural language to SQL generation',
      'RAG and embeddings for database context',
      'Query result visualization and analytics UX',
    ],
    tech: ['Next.js', 'Python', 'PostgreSQL', 'OpenAI', 'RAG', 'Embeddings'],
  },
  {
    name: 'SEC Filing Intelligence',
    category: 'AI + Document Processing',
    description:
      'Designed extraction workflows for complex SEC filings where table layouts, labels, and document structures vary across companies and reporting periods.',
    highlights: [
      'Structured extraction from financial filings',
      'Validation-oriented parsing pipeline',
      'Support for changing document layouts',
    ],
    tech: ['Python', 'FastAPI', 'LLMs', 'Parsing', 'Data Validation'],
  },
  {
    name: 'Real-Time Interview AI',
    category: 'Real-Time AI',
    description:
      'Built an interactive AI interview experience using real-time audio and conversational AI, with application logic around interview sessions and user interaction.',
    highlights: [
      'Real-time voice interaction',
      'WebRTC-based communication',
      'OpenAI Realtime integration',
    ],
    tech: ['React', 'WebRTC', 'OpenAI Realtime', 'JavaScript'],
  },
  {
    name: 'Ask PDF AI',
    category: 'AI + RAG',
    description:
      'A document question-answering application where users upload a PDF and ask contextual questions about its contents through an AI-powered interface.',
    highlights: [
      'PDF ingestion and contextual Q&A',
      'OpenAI-powered response generation',
      'Modern responsive UI',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'OpenAI', 'Vercel'],
    link: {
      href: 'https://www.linkedin.com/posts/pawandeore_weekendproject-nextjs-activity-7385200816581918721-uA8s',
      label: 'View demo post',
    },
  },
  {
    name: 'AI Podcast Generator',
    category: 'Generative AI',
    description:
      'Built an application that turns written transcripts into downloadable podcast audio by coordinating language-model processing with synthetic voice generation.',
    highlights: [
      'Transcript-to-audio generation',
      'Multi-service AI workflow',
      'Downloadable generated MP3 output',
    ],
    tech: ['Python', 'FastAPI', 'OpenAI', 'ElevenLabs', 'JavaScript'],
    link: {
      href: 'https://github.com/pavandeore/ai-podcast-generator-with-openai-and-elevenlabs',
      label: 'View source',
    },
  },
  {
    name: 'ProjectPro VS Code Extension',
    category: 'Developer Tools',
    description:
      'Developed a VS Code extension that helps developers find reusable code snippets and technical learning resources directly inside their editor.',
    highlights: [
      'Reusable code snippet discovery',
      'In-editor technical content search',
      'Published developer tooling',
    ],
    tech: ['VS Code API', 'JavaScript', 'Developer Tools'],
    link: {
      href: 'https://marketplace.visualstudio.com/items?itemName=ProjectPro.projectpro-helper',
      label: 'View extension',
    },
  },
]

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <p className="text-xs font-semibold uppercase tracking-wider text-teal-500">
        {project.category}
      </p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {project.name}
      </h2>
      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <ul className="mt-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.link && (
        <Link
          href={project.link.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex text-sm font-semibold text-teal-500 transition hover:text-teal-600"
        >
          {project.link.label} →
        </Link>
      )}
    </article>
  )
}

export const metadata = {
  title: 'Projects',
  description:
    'Selected AI, SaaS, full-stack, data, and developer-tool projects built by Pawan Deore.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Selected projects"
      intro="I prefer showing work that demonstrates product thinking, systems work, AI integration, and end-to-end engineering rather than listing every experiment I’ve ever built."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-zinc-900 px-6 py-10 sm:px-10 dark:bg-zinc-800">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Need something similar built?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
          I can help with AI features, SaaS products, full-stack development,
          backend systems, API integrations, and product MVPs.
        </p>
        <Link
          href="https://www.upwork.com/freelancers/~0155cd3c28670522c7?viewMode=1"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
        >
          Discuss your project on Upwork
        </Link>
      </div>
    </SimpleLayout>
  )
}
