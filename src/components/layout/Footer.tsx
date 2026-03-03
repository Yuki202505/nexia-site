export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <span className="text-sm font-bold tracking-tight text-ink">
              NEXIA
            </span>
          </div>
          <nav className="flex gap-8">
            <a href="#services" className="text-[13px] text-ink-muted transition-colors hover:text-ink">
              Services
            </a>
            <a href="#about" className="text-[13px] text-ink-muted transition-colors hover:text-ink">
              About
            </a>
            <a href="#contact" className="text-[13px] text-ink-muted transition-colors hover:text-ink">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 text-center text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} NEXIA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
