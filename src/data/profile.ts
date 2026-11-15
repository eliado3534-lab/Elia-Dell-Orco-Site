export const profile = {
  name: "ELIA DELL'ORCO",
  roles: ['MULTIMEDIA ARTIST', 'COMPOSER', 'PHOTOGRAPHER'],
  statement:
    'Sound becomes a visceral and tangible experience. Delving into the boundary between the perceptible and the invisible, shaping raw and tactile sonic matter that unveils fragments of truth.',
  heroImage: {
    src: '/images/Elia_Profile_pic.jpg',
    placeholder: '[IMAGE: Portrait of Elia playing electric guitar with dramatic red/dark stage lighting]',
  },
  born: { date: '30/10/2002', place: 'Frosinone, Italy' },
  bio: [
    "Elia Dell'Orco is a sound and intermedia artist mainly interested in the world of audiovisual and acousmatic composition and live performance. His musical exploration develops through deep introspection, where sound becomes a visceral and tangible experience. His aesthetic delves into the boundary between the perceptible and the invisible, shaping raw and tactile sonic matter that unveils fragments of truth. Each composition is an act of revelation, an attempt to make the most authentic essence of things audible.",
  ],
  bioImage: {
    src: '/images/Elia_Image2.jpg',
    placeholder: '[IMAGE: Black and white outdoor portrait of Elia]',
  },
  education: [
    {
      period: '2024–Present',
      school: 'Estonian Academy of Music and Theatre',
      place: 'Tallinn, Estonia',
      detail: "Full-time Master's Student in Audiovisual Composition",
    },
    {
      period: '2021–2024',
      school: 'Conservatorio Licinio Refice',
      place: 'Frosinone, Italy',
      detail: 'Bachelor in Electronic Music',
    },
  ],
  contact: {
    email: 'eliado353@gmail.com',
    emailHref: 'mailto:eliado353@gmail.com',
    instagram: '@efedra__',
    instagramHref: 'https://www.instagram.com/efedra__/',
  },
} as const;
