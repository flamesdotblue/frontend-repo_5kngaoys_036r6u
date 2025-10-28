export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 py-10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-sm text-slate-600 dark:text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} VibeLaunch — Futuristic Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#blogs" className="hover:text-slate-900 dark:hover:text-white">Blogs</a>
            <a href="#resume" className="hover:text-slate-900 dark:hover:text-white">Resume</a>
            <a href="mailto:hello@example.com" className="hover:text-slate-900 dark:hover:text-white">Email</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
