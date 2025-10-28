import { useState } from 'react';
import { Rocket, Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar({ theme = 'dark', onToggleTheme = () => {} }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-md transition-colors duration-500 dark:border-white/10 dark:bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-indigo-500">
              <Rocket className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg">VibeLaunch</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-white/80">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#blogs" className="hover:text-slate-900 dark:hover:text-white transition-colors">Blogs</a>
            <a href="#resume" className="hover:text-slate-900 dark:hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-white/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
            </button>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-slate-700 dark:text-white/80">
              <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
              <a href="#blogs" className="hover:text-slate-900 dark:hover:text-white transition-colors">Blogs</a>
              <a href="#resume" className="hover:text-slate-900 dark:hover:text-white transition-colors">Resume</a>
              <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
              <button
                aria-label="Toggle theme"
                onClick={onToggleTheme}
                className="mt-2 inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-white/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
