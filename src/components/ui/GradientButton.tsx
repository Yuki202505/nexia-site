import { cn } from '@/lib/utils';

export function GradientButton({
  children,
  href,
  className,
  size = 'md',
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <a
      href={href}
      className={cn(
        'inline-block rounded-lg font-semibold text-white transition-all duration-300',
        'bg-gradient-to-r from-blue-600 to-purple-600',
        'hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25',
        'active:scale-[0.98]',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </a>
  );
}
