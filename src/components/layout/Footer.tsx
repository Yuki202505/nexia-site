export function Footer() {
  return (
    <footer className="border-t border-border bg-dark px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <span className="text-sm font-bold tracking-tight text-white">
              NEXIA
            </span>
            <p className="mt-1 text-xs text-ink-muted">
              AI × Technology Partner
            </p>
          </div>
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} NEXIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
