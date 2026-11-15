import { categories } from '@/data/categories';

export interface NavLink {
  label: string;
  to: string;
}

export interface WorksNavLink extends NavLink {
  number: string;
}

export const worksLinks: WorksNavLink[] = categories.map((category) => ({
  number: category.number,
  label: category.title,
  to: `/works/${category.slug}`,
}));

export const sectionLinks: NavLink[] = [
  { label: 'BIOGRAPHY', to: '/#biography' },
  { label: 'EDUCATION', to: '/#education' },
  { label: 'GET IN TOUCH', to: '/#contact' },
];
