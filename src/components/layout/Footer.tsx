export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <span className="font-[family-name:var(--font-noto-serif-jp)] text-lg font-semibold tracking-wide text-ink">
              NEXIA
            </span>
            <p className="mt-2 text-sm text-ink-muted">
              テクノロジーで、事業を前に進める。
            </p>
          </div>
          <nav className="flex gap-8">
            <a
              href="#services"
              className="font-[family-name:var(--font-inter)] text-[13px] tracking-widest text-ink-muted transition-colors hover:text-ink"
            >
              Services
            </a>
            <a
              href="#about"
              className="font-[family-name:var(--font-inter)] text-[13px] tracking-widest text-ink-muted transition-colors hover:text-ink"
            >
              About
            </a>
            <a
              href="#contact"
              className="font-[family-name:var(--font-inter)] text-[13px] tracking-widest text-ink-muted transition-colors hover:text-ink"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} NEXIA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
