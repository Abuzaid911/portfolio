'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Brain,
  Braces,
  Code2,
  Database,
  Github,
  Layers,
  Sparkles,
  Users,
} from 'lucide-react';
import { z } from 'zod';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { type Project, type ProjectCategory } from '@/types';
import { Section } from '@/components/section';
import { Button } from '@/components/button';
import { Badge } from '@/components/badge';
import { ProjectCard } from '@/components/project-card';
import { Modal } from '@/components/modal';
import { InputField, TextareaField } from '@/components/input-field';
import { useToast } from '@/components/toast-provider';

const heroStack = [
  { label: 'Next.js', icon: Layers },
  { label: 'TypeScript', icon: Code2 },
  { label: 'Python', icon: Braces },
  { label: 'Supabase', icon: Database },
  { label: 'AI APIs', icon: Brain },
];

const filterOptions: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'AI', value: 'ai' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
];

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter at least 2 characters.'),
  email: z.string().email('That email looks off — mind double checking?'),
  message: z.string().min(10, 'Tell me a bit more so I can prep insights.'),
});

export default function Page() {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<'name' | 'email' | 'message', string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const { pushToast } = useToast();
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const handleSelectProject = (project: Project) => setSelectedProject(project);

  useEffect(() => {
    if (selectedProject) {
      setMediaIndex(0);
    }
  }, [selectedProject]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = contactForm;
    const parsed = contactSchema.safeParse(formValues);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });
      const payload = (await response.json()) as {
        ok: boolean;
        errors?: Record<string, string[]>;
        message?: string;
      };

      if (!response.ok || !payload.ok) {
        setErrors({
          name: payload.errors?.name?.[0],
          email: payload.errors?.email?.[0],
          message: payload.errors?.message?.[0],
        });
        pushToast({
          title: 'Message not sent.',
          description: payload.message ?? 'Mind reviewing the fields marked in red?',
          variant: 'info',
        });
        return;
      }

      setContactForm({ name: '', email: '', message: '' });
      pushToast({ title: 'Message sent!', description: 'Thanks for reaching out — I will reply within 1–2 days.', variant: 'success' });
    } catch (error) {
      console.error(error);
      pushToast({
        title: 'Something went wrong',
        description: 'Could you try again in a moment or email hello@ahmedali.dev?',
        variant: 'info',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const heroMotion = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  const media = selectedProject?.media[mediaIndex] ?? selectedProject?.media[0];

  return (
    <div className="relative">
      <Section id="hero" className="pt-24 pb-24 sm:pb-32">
        <div className="relative isolate overflow-hidden rounded-[48px] border border-border/40 bg-surface/80 px-6 py-16 shadow-card sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-radial-spot" aria-hidden />
          <motion.div {...heroMotion} transition={{ duration: 0.5, type: 'spring', stiffness: 220, damping: 28 }}>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h1 className="font-display text-4xl leading-tight text-text sm:text-5xl lg:text-6xl">
                    Ahmed Ali — Full-Stack Developer & AI Builder
                  </h1>
                  <p className="text-lg text-muted sm:text-xl">
                    I build AI-driven, user-centric products across web & mobile. From fast MVPs to scaled platforms, I bridge engineering, data, and product strategy to ship what matters.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button href="#projects">
                    View Projects
                    <ArrowDownRight className="ml-2 h-4 w-4" aria-hidden />
                  </Button>
                  <Button variant="secondary" href="#contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Button>
                  <Button
                    variant="ghost"
                    href="/cv/Ahmed_Ali_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                    <BadgeCheck className="ml-2 h-4 w-4" aria-hidden />
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  {heroStack.map(({ label, icon: Icon }) => (
                    <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-ink/40 px-3 py-1 text-xs uppercase tracking-wide text-muted">
                      <Icon className="h-4 w-4" aria-hidden />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative flex w-full max-w-sm flex-shrink-0 justify-center lg:max-w-md">
                <div className="relative aspect-square w-full max-w-xs">
                  <div className="absolute inset-0 rounded bg-accent/20 blur-3xl" aria-hidden />
                  <Image
                    src="/images/portrait.png"
                    alt="Portrait illustration of Ahmed Ali"
                    sizes="(min-width: 1024px) 320px, 220px"
                    fill
                    priority
                    className="rounded-full border border-border/50 object-cover border-black"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section
        id="projects"
        title="Featured Projects"
        description="High-impact launches blending AI, analytics, and pragmatic engineering to drive measurable results."
      >
        <div className="flex flex-col gap-10">
          <motion.div layout className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} onOpen={handleSelectProject} index={index} />
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="experience" title="Experience" description="Product-minded collaborations with founders and operators shipping fast, validated outcomes.">
        <div className="relative space-y-10">
          <div className="absolute left-[9px] top-3 bottom-3 hidden w-px bg-gradient-to-b from-accent/60 via-border/60 to-transparent md:block" aria-hidden />
          <ul className="space-y-10">
            {experience.map((item, index) => (
              <motion.li
                key={item.company}
                className="relative rounded-3xl border border-border/40 bg-surface/80 p-6 shadow-sm md:pl-12"
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-display text-xl text-text">{item.role}</h3>
                    <span className="text-sm uppercase tracking-wide text-muted">{item.company}</span>
                    <span className="text-xs text-muted">{item.start} – {item.end}</span>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="about" title="About" description="AI-driven builder focused on outcomes, not just features.">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-start">
          <div className="space-y-4 text-base text-muted">
            <p>
              I’m Ahmed Ali—Founder of <strong>Zlyzer</strong> and a full-stack developer who turns fuzzy ideas into shipped, scalable products.
              From scrappy MVPs to revenue-ready platforms, I blend engineering with AI and data strategy to validate value fast while laying solid foundations.
            </p>
            <p>
              My playbook combines automation, analytics, and thoughtful UX: ingest pipelines, model-driven services, and dashboards that surface the
              signals teams need to decide and ship with confidence. I measure success by business impact—latency down, adoption up, manual work out.
            </p>
            <p>
              <strong>Education:</strong> B.Sc. in <strong>Information Systems</strong>, Faculty of Computers and Artificial Intelligence, Cairo University.
            </p>
            <p>
              When I’m not shipping, I’m exploring agentic workflows, lightweight MLOps, and new product concepts that make complex systems feel simple.
            </p>
          </div>
        </div>
      </Section>


      <Section id="contact" title="Contact" description="Share a challenge, product idea, or opportunity — I will respond within 48 hours.">
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-border/40 bg-surface/80 p-6 shadow-sm"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            aria-live="polite"
          >
            <InputField
              label="Name"
              name="name"
              placeholder="Your name"
              value={contactForm.name}
              onChange={(event) => setContactForm((state) => ({ ...state, name: event.target.value }))}
              required
              error={errors.name}
              autoComplete="name"
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={contactForm.email}
              onChange={(event) => setContactForm((state) => ({ ...state, email: event.target.value }))}
              required
              error={errors.email}
              autoComplete="email"
            />
            <TextareaField
              label="How can I help?"
              name="message"
              placeholder="Tell me about the product, workflow, or experiment you want to explore."
              value={contactForm.message}
              onChange={(event) => setContactForm((state) => ({ ...state, message: event.target.value }))}
              required
              error={errors.message}
            />
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted">No spam — just a thoughtful reply.</span>
              <Button type="submit" loading={submitting} className="min-w-[140px]">
                Send Message
              </Button>
            </div>
          </motion.form>
          <div className="space-y-6 rounded-3xl border border-border/40 bg-ink/40 p-6 text-sm text-muted">
            <div>
              <h3 className="font-display text-lg text-text">Reach out directly</h3>
              <p className="mt-2">Prefer email? I am always reachable.</p>
              <a className="mt-2 inline-flex items-center gap-2 text-accent" href="mailto:ahmedmohammedabuzaidali@gmail.com">
                <ArrowRight className="h-4 w-4" aria-hidden />
                hello@ahmedali.dev
              </a>
            </div>
            <div>
              <h3 className="font-display text-lg text-text">Connect elsewhere</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a className="inline-flex items-center gap-2 text-accent" href="https://github.com/Abuzaid911" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" aria-hidden />
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="inline-flex items-center gap-2 text-accent" href="https://www.linkedin.com/in/ahmed-abuzaid-a65732185/" target="_blank" rel="noopener noreferrer">
                    <Users className="h-4 w-4" aria-hidden />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Modal
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ''}
      >
        {selectedProject ? (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="md:w-2/3">
                <div className="relative h-56 overflow-hidden rounded-2xl border border-border/40">
                  {media ? (
                    <Image
                      key={media.src}
                      src={media.src}
                      alt={media.alt}
                      fill
                      sizes="(min-width: 768px) 480px, 100vw"
                      className="object-cover"
                    />
                  ) : null}
                  {selectedProject.media.length > 1 ? (
                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                      <Button
                        type="button"
                        variant="secondary"
                        className="h-9 w-9 rounded-full p-0"
                        onClick={() => setMediaIndex((index) => Math.max(index - 1, 0))}
                        aria-label="Previous screenshot"
                        disabled={mediaIndex === 0}
                      >
                        <ArrowLeft className="h-4 w-4" aria-hidden />
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        className="h-9 w-9 rounded-full p-0"
                        onClick={() =>
                          setMediaIndex((index) =>
                            Math.min(index + 1, selectedProject.media.length - 1)
                          )
                        }
                        aria-label="Next screenshot"
                        disabled={mediaIndex === selectedProject.media.length - 1}
                      >
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Button>
                    </div>
                  ) : null}
                </div>
                {selectedProject.media.length > 1 ? (
                  <div className="mt-3 flex items-center justify-center gap-2">
                    {selectedProject.media.map((item, index) => (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() => setMediaIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full transition ${index === mediaIndex ? 'bg-accent' : 'bg-border/60'
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="space-y-4 md:w-1/3">
                <h4 className="font-display text-lg text-text">Stack</h4>
                <ul className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <li key={item}>
                      <Badge variant="outline">{item}</Badge>
                    </li>
                  ))}
                </ul>
                <div>
                  <h4 className="font-display text-lg text-text">Impact</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    {selectedProject.metrics.map((metric) => (
                      <li key={metric.label}>{metric.label}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-display text-lg text-text">Responsibilities</h4>
                <ul className="space-y-2 text-sm text-muted">
                  {selectedProject.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-display text-lg text-text">Challenges</h4>
                <ul className="space-y-2 text-sm text-muted">
                  {selectedProject.challenges.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-display text-lg text-text">Outcomes</h4>
                <ul className="space-y-2 text-sm text-muted">
                  {selectedProject.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
