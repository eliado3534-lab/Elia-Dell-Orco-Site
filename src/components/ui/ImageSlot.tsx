import { useInView } from '@/hooks/useInView';

interface ImageSlotProps {
  src?: string;
  alt: string;
  placeholder: string;
  aspectClassName?: string;
  className?: string;
  grayscale?: boolean;
  fit?: 'cover' | 'natural';
}

export default function ImageSlot({
  src,
  alt,
  placeholder,
  aspectClassName = 'aspect-[4/5]',
  className = '',
  grayscale = true,
  fit = 'cover',
}: ImageSlotProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  const imgClassName = [
    fit === 'natural' ? 'h-auto w-full' : 'h-full w-full object-cover',
    grayscale ? (inView ? 'grayscale-0' : 'grayscale') : '',
    'transition-all duration-[1400ms] ease-out group-hover:scale-105',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden border border-line bg-charcoal ${aspectClassName} ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} loading="lazy" className={imgClassName} />
      ) : (
        <div className="hatch grid-lines flex h-full w-full items-center justify-center p-6 transition-colors duration-500 group-hover:bg-[#222]">
          <p className="max-w-[24ch] text-center font-mono text-[11px] uppercase leading-[1.6] tracking-widest2 text-ash transition-colors duration-500 group-hover:text-mist">
            {placeholder}
          </p>
        </div>
      )}
    </div>
  );
}
