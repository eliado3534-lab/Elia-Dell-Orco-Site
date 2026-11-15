import type { Category } from '@/data/types';

export const photography: Category = {
  slug: 'photography',
  number: '04',
  title: 'PHOTOGRAPHY',
  summary: 'Digital, 35mm film, street & documentary exhibitions',
  intro: [
    'Since 2022, the photographic work has spanned different areas across both digital and film. The main focus includes street photography, personal documentary, portraiture, and digital photography experimentation. This diverse approach allows for the exploration of different visual languages and adaptability to various photographic contexts.',
  ],
  works: [
    {
      id: 'lemma',
      title: 'Lemma',
      kind: 'Photo exhibition',
      placeholder: '[PHOTO: Hanging photographic prints at Lemma exhibition]',
      src: '/images/Lemma.jpg',
      description: [
        "This exhibition presents an introspective journey through photography. Half of the photographs were taken in Italy, the artist's place of origin, and the other half in Tallinn, the city of relocation where a new sense of home is being built. The title Lemma is taken from the artist's maternal surname, becoming a symbol that ties together family heritage and a deeper search for identity and belonging.",
      ],
    },
    {
      id: 'visioni-periferiche',
      title: 'Visioni Periferiche',
      kind: 'Photo exhibition',
      placeholder: '[PHOTO: Warm amber/fire analog print hanging with wooden clothespin]',
      src: '/images/VisioniPeriferiche.JPG',
      description: [
        'Featured in Visioni Periferiche, a collective exhibition investigating the concept of the periphery through multiple artistic lenses. Gathering the works of 12 artists, the project examined physical and cultural margins, quiet territories, and shifting ways of perceiving space and everyday reality.',
      ],
    },
  ],
  gallery: {
    title: 'Additional Works',
    images: [
      { label: 'Rural portrait with chicken in Italy', src: '/images/Photography1.jpg' },
      { label: 'Snowfall illuminated at night by a tree', src: '/images/Photography2.jpg' },
      { label: 'Bonfire sparks in the dark', src: '/images/Photography3.jpg' },
      { label: 'B&W close-up portrait of an elderly man', src: '/images/Photography4.jpg' },
      { label: 'B&W high-contrast stone staircase silhouette', src: '/images/Photography5.jpg' },
      { label: 'Wide-angle editorial portrait in industrial setting', src: '/images/Photography6.jpg' },
      { label: 'Photography 07', src: '/images/Photography7.jpg' },
      { label: 'Photography 08', src: '/images/Photography8.jpg' },
      { label: 'Photography 09', src: '/images/Photography9.jpg' },
      { label: 'Photography 10', src: '/images/Photography10.jpg' },
    ],
  },
};
