interface SectionHeadingProps {
  index: string;
  label: string;
  id?: string;
  tone?: 'dark' | 'light';
}

export default function SectionHeading({ index, label, id, tone = 'dark' }: SectionHeadingProps) {
  const border = tone === 'dark' ? 'border-line' : 'border-mist';
  const text = tone === 'dark' ? 'text-ash' : 'text-charcoal';

  return (
    <div id={id} className={`flex items-center gap-4 border-b ${border} pb-4 font-mono text-xs uppercase tracking-widest2 ${text}`}>
      <span>[{index}]</span>
      <span className="text-base">//</span>
      <span>{label}</span>
    </div>
  );
}
