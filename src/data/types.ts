export interface MetaItem {
  label: string;
  value: string;
}

export interface ExternalLink {
  label: string;
  href: string;
}

export interface ScheduleEntry {
  date: string;
  venue: string;
}

export interface Schedule {
  label: string;
  entries: ScheduleEntry[];
}

export interface Work {
  id: string;
  title: string;
  kind: string;
  placeholder: string;
  src?: string;
  description: string[];
  meta?: MetaItem[];
  events?: string[];
  links?: ExternalLink[];
  schedule?: Schedule;
}

export interface GalleryImage {
  label: string;
  src?: string;
}

export interface Category {
  slug: string;
  number: string;
  title: string;
  summary: string;
  intro?: string[];
  coverAspect?: string;
  works: Work[];
  gallery?: { title: string; images: GalleryImage[] };
}
