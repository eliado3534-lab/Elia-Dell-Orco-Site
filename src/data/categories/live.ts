import type { Category } from '@/data/types';

export const live: Category = {
  slug: 'live-performances',
  number: '03',
  title: 'LIVE PERFORMANCES',
  summary: 'Improvisation, Live Electronics & CANETAMBURO',
  works: [
    {
      id: 'canetamburo',
      title: 'CANETAMBURO',
      kind: 'Live performance trio',
      placeholder: '[PHOTO: CANETAMBURO trio performing live on stage]',
      src: '/images/CanetamburoImage.jpg',
      description: [
        'Canetamburo is an Italian trio exploring electroacoustic improvisation, live performance, and sound art. Composed of Elia Dell\'Orco, Eugenio Cecchini, and Gabriele Teti, the group developed an independent artistic trajectory rooted in acousmatic and electroacoustic music. Favoring real-time, collective creation, their work blends improvisation, gesture, and attentive listening. Their sound bridges contemporary music, internet culture, and hybrids of academic and non-academic practices.',
        'This practice focuses on the exploration and transformation of guitar sound, experimenting with both the physical source and digital processing. To expand the sonic possibilities of the instrument, a DIY contact microphone is placed on the body and headstock of the guitar, capturing a wide range of resonances and unconventional textures. The resulting audio is then processed in real time using a custom-built Max/MSP patch, enabling timbral manipulation and multichannel output.',
      ],
      links: [
        { label: 'Trio Website ↗', href: 'https://readymag.website/u3415883749/canetamburo/?utm_source=ig&utm_medium=social&utm_content=link_i' },
        { label: 'Last Performance — WATCH ↗', href: 'https://www.youtube.com/watch?v=f2WEgwfl7t0/' },
      ],
      schedule: {
        label: 'Past shows',
        entries: [
          { date: '17 April 2026', venue: 'Tallinn, EAMT Blackbox (Commute #8 Festival)' },
          { date: '13 November 2025', venue: 'Sassari, Conservatorio di Musica "Luigi Canepa" (Premio delle Arti)' },
          { date: '31 October 2025', venue: 'Tallinn, Paavli Kultuurivabrik' },
          { date: '26 October 2025', venue: 'Tallinn, Afekt Festival' },
          { date: '18 October 2025', venue: 'Riga, Vagonu Hall' },
          { date: '05 September 2025', venue: 'Tallinn, Cabaret Volta, Üle Heli Festival' },
          { date: '15 June 2025', venue: 'Rome, Scalo San Lorenzo' },
          { date: '14 April 2025', venue: 'Tallinn, ECCM' },
          { date: '14 March 2025', venue: 'Tallinn, Elektron.Art Kunstisaal' },
          { date: '24 November 2024', venue: 'Tallinn, ERR' },
          { date: '14 November 2024', venue: 'Tallinn, ECCM (Sound Plasma)' },
        ],
      },
    },
    {
      id: 'ambisonics',
      title: 'Ambisonics',
      kind: 'Live performance experience',
      placeholder: '[PHOTO: Ambisonic dome speaker array in performance space]',
      src: '/images/Ambisonics.jpg',
      description: [
        'Recent work includes extensive experience in Ambisonic performance, spanning both pre-spatialized acousmatic compositions and live spatialization. Within the acousmatic repertoire, existing compositions have been adapted to immersive Ambisonic environments, treating spatiality as an integral dimension of the listening experience.',
        'In live performance—particularly with the trio CANETAMBURO—a dedicated Max/MSP patch was developed for real-time sound processing and spatialization, enabling the performers to manipulate and distribute sound dynamically within the Ambisonic field.',
      ],
      schedule: {
        label: 'Selected performances',
        entries: [
          { date: '17 April 2026', venue: 'Tallinn, EAMT Blackbox, Commute #8 Festival' },
          { date: '18 October 2025', venue: 'Riga, Vagonu Hall, DDA Ambisonics Weekend' },
          { date: '11 April 2025', venue: 'Oslo, Lydbølge Festival 2025' },
          { date: '14 March 2025', venue: 'Tallinn, Elektron.Art Kunstisaal, Spatial Sound Days' },
        ],
      },
    },
    {
      id: 'acousmonium',
      title: 'Acousmonium',
      kind: 'Live performance experience',
      placeholder: '[PHOTO: Multi-speaker Acousmonium stage setup at Raadio Tallinn]',
      src: '/images/Acousmonium.jpg',
      description: [
        'Across two separate occasions, real-time spatializations of the compositions TV and Radici were presented in real-time spatializations at Raadio Tallinn (ERR) on a multi-speaker acousmonium featuring loudspeakers crafted by artist Aivar Tõnso, offering an immersive listening experience.',
      ],
      meta: [{ label: 'Date', value: 'November 2024 — Tallinn, Raadio Tallinn (ERR)\nNovember 2025 — Tallinn, Raadio Tallinn (ERR)' }],
    },
    {
      id: 'live-spatialization',
      title: 'Live Spatialization',
      kind: 'Live performance experience',
      placeholder: '[PHOTO: Hands controlling TouchOSC on iPad next to laptop DAW]',
      src: '/images/LiveSpatialization.jpg',
      description: [
        'On November 14th, 2024, a real-time 4.1 spatialization of the piece TV was performed at the Estonian Centre of Contemporary Music (ECCM) during the Sound Plasma festival. The performance utilized Reaper for spatial audio processing alongside a tablet running TouchOSC as a custom controller, enabling dynamic manipulation of sound in space.',
      ],
      meta: [{ label: 'Date', value: '14 November 2024 — Tallinn, ECCM' }],
    },
  ],
};
