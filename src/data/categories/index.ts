import { acousmatic } from '@/data/categories/acousmatic';
import { audiovisual } from '@/data/categories/audiovisual';
import { live } from '@/data/categories/live';
import { photography } from '@/data/categories/photography';
import type { Category } from '@/data/types';

export const categories: Category[] = [acousmatic, audiovisual, live, photography];

export function getCategoryBySlug(slug: string | undefined): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
