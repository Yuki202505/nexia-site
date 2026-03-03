export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <span className="font-[family-name:var(--font-inter)] text-xl font-bold tracking-tight">
              <span className="gradient-text">NEXIA</span>
            </span>
            <p className="mt-2 text-sm text-gray-500">
              テクノロジーで、事業を前に進める。
            </p>
          </div>
          <nav className="flex gap-6 text-sm text-gray-500">
            <a href="#services" className="transition-colors hover:text-gray-300">
              できること
            </a>
            <a href="#about" className="transition-colors hover:text-gray-300">
              会社概要
            </a>
            <a href="#contact" className="transition-colors hover:text-gray-300">
              お問い合わせ
            </a>
          </nav>
        </div>
        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} NEXIA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
