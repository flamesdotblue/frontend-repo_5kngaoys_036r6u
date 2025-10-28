import { Rocket, Shield, Star, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'UX/UI & Motion',
    desc: 'Interfaces with delightful micro-interactions and clear information architecture.',
  },
  {
    icon: Star,
    title: 'Data Storytelling',
    desc: 'Turning analytics into narratives with crisp visuals and meaningful insights.',
  },
  {
    icon: Shield,
    title: 'Quality & Accessibility',
    desc: 'WCAG-conscious, performant, and responsive by default across devices.',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    desc: 'From concept to interactive prototype with modern tools and workflows.',
  },
];

export default function Features() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 -z-[0] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(60%_50%_at_50%_0%,rgba(139,92,246,0.22),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Selected Capabilities</h2>
          <p className="mt-3 text-slate-600 dark:text-white/70">
            A snapshot of what I bring to product teams: craft, curiosity, and systems thinking.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-indigo-500 text-white shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
