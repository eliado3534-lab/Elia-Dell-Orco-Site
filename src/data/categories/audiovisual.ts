import type { Category } from '@/data/types';

export const audiovisual: Category = {
  slug: 'audiovisual',
  number: '02',
  title: 'AUDIOVISUAL COMPOSITIONS',
  summary: 'Intermedial works & spatial installations',
  works: [
    {
      id: 'autentico-invisibile',
      title: 'Autentico, Invisibile',
      kind: 'Audiovisual composition',
      placeholder: '[PHOTO: Black and white light rays long-exposure]',
      src: '/images/AutentiInvisibile_Cover.jpg',
      description: [
        'Autentico, Invisibile explores a sense of disorientation, where once-familiar places blur and the feeling of belonging fades. It is a search for identity through memory and space.',
        'This 9-minute audiovisual composition is built entirely from long-exposure photographs taken in the author’s hometown in Italy. The video weaves these stills into fluid visual sequences, echoing the fading boundaries between presence and absence. The soundscape is composed primarily of processed guitar sounds and field recordings captured between Alatri (Italy) and Tallinn.',
      ],
      events: [
        'COMMUTE Festival #7 in Tallinn',
        'Still Creatures Festival in Narni',
        'Festa Della Musica in Rome',
        'Sounding Images Screening Sounds in Lecce',
        'Audiovisual Sunday in Tallinn',
      ],
      links: [{ label: 'WATCH ↗', href: 'https://www.youtube.com/watch?v=_MvD8E0KiV8' }],
    },
    {
      id: 'human',
      title: 'HUMAN.',
      kind: 'Audiovisual composition',
      placeholder: '[PHOTO: CRT scanline thermal silhouette of hands and face]',
      src: '/images/Human_Cover.png',
      description: [
        'This work represents a vision of life where a hypothetical biological evolution of man is mixed with technology. This has expanded human capabilities by generating a hybrid technology-organism.',
        'The audio materials instead try to evoke the duality biology-technology, contrasting sounds of digital/synthetic origin with sounds of acoustic origin. The video materials all come from the documentary Man: The Incredible Machine produced by National Geographic Society.',
      ],
      events: ['ARTESCIENZA 2023 in Rome', 'COMMUTE Festival #6 in Tallinn'],
      links: [{ label: 'WATCH ↗', href: 'https://www.youtube.com/watch?v=kK6iz2YVI0g' }],
    },
    {
      id: 'anima-et-corpo',
      title: 'Anima et Corpo',
      kind: 'Audiovisual composition',
      placeholder: '[PHOTO: Abstract textured visual stills grid]',
      src: '/images/AnimaetCorpo_cover.jpg',
      description: [
        "Crea//KLab, a collective formed by Elia Dell'Orco, Eugenio Cecchini, Gabriele Teti, Fabio Fornaro, and Federico Acosta Rios, created this work on the occasion of the restoration of Filippo Balbi's famous painting Testa Anatomica.",
        'The project took the form of an audiovisual installation inside the ancient Certosa of Trisulti, combining three large vertical screens with a 5.1 audio system to create an immersive environment inspired by themes emerging from Balbi\'s work: simultaneity, plurality, harmony, diversity, uniqueness, cohesion, strength, society, horror, flesh, bodies, voices, stillness, movement, choreography, and dance.',
      ],
      events: [
        'MA/IN Festival in Lecce',
        '61° Festival Nuova Consonanza 2024 in Rome',
        'ARTESCIENZA 2024 in Rome',
        "Il corpo e l'Idea in Collepardo",
      ],
      links: [{ label: 'WATCH ↗', href: 'https://youtu.be/eDA14CvxUu0?si=u7KMB5MsYdvcvFH_' }],
    },
    {
      id: 'radici-presentation',
      title: 'Radici — Exhibition Video Presentation',
      kind: 'Documentary / Video Presentation',
      placeholder: "[PHOTO: Sculptor Adamo Dell'Orco working in studio]",
      src: '/images/RadiciVideo_Cover.png',
      description: [
        "Radici, named after the soundscape composition presented at the exhibition, is a short presentation video offering an essential insight into the work of Adamo Dell'Orco, sculptor and restorer. It documents his creative process, showing how wood, fragments, and reclaimed materials are transformed into forms that bring together memory and critical reflection.",
        'His sculptures, born from roots and discarded materials, become hybrid subjects that reflect the relationship between what fascinates and what invites us to question. The video follows a direct and documentary approach, presenting his work and artistic process through images and music rather than functioning as an audiovisual composition.',
      ],
      events: ['Radici exhibition in Alatri'],
      links: [{ label: 'WATCH ↗', href: 'https://www.youtube.com/watch?v=V-VEUgqBZhQ' }],
    },
    {
      id: 'talking-sounds',
      title: 'Talking Sounds',
      kind: 'Audiovisual installation',
      placeholder: '[PHOTO: Floor projection installation in dark gallery space]',
      src: '/images/TalkingSounds_cover.jpg',
      description: [
        "Installation created for the 105th anniversary of the Estonian Academy of Music and Theatre (EMTA) and showcased as part of the MÜRIAADfest. Developed in collaboration with Gabriele Teti and Eugenio Cecchini, the project transforms the space through a full-floor projection built from manipulated images of EMTA’s internal walls, paired with a 4.1 spatial soundscape composed from ambisonic recordings captured throughout the academy.",
      ],
      events: ['MÜRIAAD fest in Tallinn'],
    },
    {
      id: 'adamo',
      title: 'Adamo',
      kind: 'Audiovisual composition',
      placeholder: '[PHOTO: Close-up of sculpted wooden figure]',
      src: '/images/Adamo_Cover.jpg',
      description: [
        "Audiovisual composition showcasing a selection of sculptures by the esteemed artist Adamo Dell'Orco, winner of the prestigious Leone D'Oro award for Best Italian Sculptor in 2022. His sculptures often derive from poor and natural materials such as olive roots and scrap metal pieces, the sound tries to highlight and contrast the materiality of his works and their dynamism.",
      ],
      events: ['Exhibition in Church of the Scolopi in Alatri, Italy'],
      links: [{ label: 'WATCH ↗', href: 'https://www.youtube.com/watch?v=5GhbqTLitsA' }],
    },
    {
      id: 'eparm-concert',
      title: 'Eparm Concert',
      kind: 'Concert visuals',
      placeholder: '[PHOTO: Deep cyan/blue fluid water visual texture]',
      src: '/images/Eparm_cover.png',
      description: [
        "Series of visuals specifically for Alisson Kruusmaa's Three Songs on Emily Dickinson's Poems. The video projection was developed using photographs of water, chosen for their symbolic and emotional resonance with the music and poetry. These images were then interpolated using AI-based techniques to create smooth transitions.",
      ],
      events: ['Eparm concert in Tallinn'],
    },
  ],
};
