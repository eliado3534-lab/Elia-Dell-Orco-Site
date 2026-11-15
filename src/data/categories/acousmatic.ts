import type { Category } from '@/data/types';

export const acousmatic: Category = {
  slug: 'acousmatic',
  number: '01',
  title: 'ACOUSMATIC COMPOSITIONS',
  summary: '5.1 surround, Ambisonics & electroacoustic soundscapes',
  coverAspect: 'aspect-square',
  works: [
    {
      id: 'tv',
      title: 'TV',
      kind: 'Acousmatic piece',
      placeholder: '[PHOTO: Macro green insect wing texture]',
      src: '/images/TV_Cover.png',
      description: [
        'TV is an exploration of buzzing sounds, both natural, emanating from insects, and artificial, originating from electronic devices. Through sound, the piece follows an insect desperately seeking escape from its own buzzing, creating a narrative around confinement, identity, and the pursuit of freedom. The juxtaposition of natural and artificial sounds invites reflection on the relationship between organisms and technology, as well as the inherent struggles of existence.',
      ],
      meta: [{ label: 'Original mix', value: '5.1 surround' }],
      events: [
        'ECCM Sound Plasma in Tallinn',
        'Acousmonium in Raadio Tallinn',
      ],
      links: [{ label: 'LISTEN ↗', href: 'https://eliadellorco.bandcamp.com/track/tv' }],
    },
    {
      id: 'palloncino',
      title: 'Palloncino',
      kind: 'Acousmatic piece',
      placeholder: '[PHOTO: Hands reaching toward glowing purple/yellow plasma light]',
      src: '/images/Palloncino_Cover.png',
      description: [
        'Palloncino is an intersection of Sound Poetry and sonic experimentation. Created in collaboration with Italian artist and photographer Giorgia Cappetti, who wrote and performed the poem featured in the piece, Palloncino is crafted entirely from recorded sounds of balloons. Through extensive manipulation, the work transforms the familiar object into a sonic source and a conceptual space.',
        'When performing the piece in ambisonic format, I reimagined the balloon as an immersive environment, envisioning the ambisonic dome as if the audience were situated inside the balloon, surrounded by its resonances and textures.',
      ],
      meta: [{ label: 'Original mix', value: 'Ambisonics format' }],
      events: [
        'Lydbølge Festival 2025 with Natasha Barrett in Oslo',
        'Spatial Sound Days in Tallinn',
      ],
      links: [{ label: 'LISTEN ↗', href: 'https://eliadellorco.bandcamp.com/track/palloncino' }],
    },
    {
      id: 'radici',
      title: 'Radici',
      kind: 'Acousmatic piece',
      placeholder: '[PHOTO: Wooden kinetic sculpture against blue sky]',
      src: '/images/Radici_Cover.jpg',
      description: [
        "Soundscape composition conceived for the exhibition Radici by Adamo Dell'Orco. The work stems from the desire to create a sonic environment that engages in dialogue with Adamo's sculptures, accompanying and surrounding them within an imaginative dimension.",
        'The soundscape unfolds as a fantastical, shifting, and ambiguous environment, where concrete and abstract sounds intertwine fluidly. While maintaining a contemplative quality, it also carries a playful and entertaining character, inviting the listener to move freely through the space and discover and reinterpret the sounds as a living part of the exhibited works.',
      ],
      meta: [{ label: 'Original mix', value: 'Stereo' }],
      events: ['Radici exhibition in Alatri', 'Tartu Jaani Kirik in Tartu'],
      links: [{ label: 'LISTEN ↗', href: 'https://eliadellorco.bandcamp.com/track/radici' }],
    },
    {
      id: 'perosperiprosperi',
      title: 'peròsperi\u200Bprosperi',
      kind: 'Acousmatic piece',
      placeholder: '[PHOTO: Surreal metallic jester illustration on red background]',
      src: '/images/Perosperiprosperi_Cover.jpg',
      description: [
        'peròsperiprosperi is a big circus of grotesque and playful sounds born from a work imagined for live performance with CANETAMBURO, live performance trio composed of Elia Dell\'Orco, Eugenio Cecchini, and Gabriele Teti. From a spinning carousel, windows open onto a \'festa\' of animal orchestras, confetti fireworks, gliding balloons, and looping kiddie trains.',
      ],
      meta: [
        {
          label: 'Credits',
          value:
            "• Elia Dell'Orco (Guitar & electronics)\n• Gabriele Teti (Toys & electronics)\n• Eugenio Cecchini (Voice,\u00A0electronics\u00A0&\u00A0found\u00A0objects)",
        },
      ],
      events: ['Premio delle Arti in Sassari, Italy'],
      links: [{ label: 'LISTEN ↗', href: 'https://canetamburo.bandcamp.com/track/per-speriprosperi' }],
    },
  ],
};
