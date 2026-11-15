import type { Schedule } from '@/data/types';

interface ScheduleDisclosureProps {
  schedule: Schedule;
}

export default function ScheduleDisclosure({ schedule }: ScheduleDisclosureProps) {
  return (
    <details className="group border border-line">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-mono text-xs uppercase tracking-widest2 text-paper transition-colors hover:bg-charcoal [&::-webkit-details-marker]:hidden">
        <span>
          {schedule.label} <span className="text-ash">({schedule.entries.length})</span>
        </span>
        <span className="text-lg transition-transform duration-300 group-open:rotate-45">+</span>
      </summary>
      <ul className="divide-y divide-line border-t border-line">
        {schedule.entries.map((entry) => (
          <li
            key={`${entry.date}-${entry.venue}`}
            className="grid gap-1 px-5 py-4 font-mono text-xs leading-[1.5] sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <span className="text-paper">{entry.date}</span>
            <span className="text-mist">• {entry.venue}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}
