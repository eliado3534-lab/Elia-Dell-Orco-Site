interface ExternalLinkButtonProps {
  href: string;
  label: string;
}

export default function ExternalLinkButton({ href, label }: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 border border-paper px-5 py-3 font-mono text-xs uppercase tracking-widest2 text-paper transition-colors duration-300 hover:bg-paper hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
    >
      {label}
    </a>
  );
}
