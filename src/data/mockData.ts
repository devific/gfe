import { CaseStudy, Service, MediaItem } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    slug: 'adidas-superstar-campaign',
    title: 'Adidas Superstar 50th Anniversary',
    client: 'Adidas India',
    category: 'Brand Campaign',
    description: 'A nationwide celebrity-led campaign celebrating 50 years of the iconic Superstar.',
    thumbnail: 'https://picsum.photos/seed/adidas/800/600',
    heroImage: 'https://picsum.photos/seed/adidas-hero/1920/1080',
    objective: 'To reinforce the cultural legacy of the Superstar sneaker among Gen Z and Millennials.',
    strategy: 'Leveraging top-tier Bollywood talent and street culture influencers to create a multi-city narrative.',
    execution: 'A series of high-octane digital films, outdoor takeovers, and a flagship launch event in Mumbai.',
    results: 'Reached over 50M+ impressions across social platforms and 25% increase in store footfalls.',
    gallery: [
      'https://picsum.photos/seed/a1/800/600',
      'https://picsum.photos/seed/a2/800/600',
      'https://picsum.photos/seed/a3/800/600'
    ]
  },
  {
    id: '2',
    slug: 'ranveer-singh-jbl',
    title: 'Ranveer Singh x JBL Global',
    client: 'Harman International',
    category: 'Celebrity Management',
    description: 'Strategic talent coordination for the global "Live it Real" campaign.',
    thumbnail: 'https://picsum.photos/seed/jbl/800/600',
    heroImage: 'https://picsum.photos/seed/jbl-hero/1920/1080',
    objective: 'To align JBL with high-energy, youth-centric icons for their global audio range.',
    strategy: 'Positioning Ranveer Singh as the face of the brand to tap into his massive energetic persona.',
    execution: 'End-to-end management of the contract, shoot coordination, and PR rollout.',
    results: 'JBL became the #1 recalled audio brand in India during the campaign period.',
    gallery: [
      'https://picsum.photos/seed/j1/800/600',
      'https://picsum.photos/seed/j2/800/600'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Celebrity Management',
    description: 'Connecting brands with the biggest stars in the industry for authentic partnerships.',
    icon: 'Star'
  },
  {
    id: '2',
    title: 'Brand Collaborations',
    description: 'Strategic alliances that drive cultural relevance and commercial success.',
    icon: 'Handshake'
  },
  {
    id: '3',
    title: 'Event Execution',
    description: 'From red carpets to massive live concerts, we bring visions to life.',
    icon: 'Mic2'
  },
  {
    id: '4',
    title: 'Campaign Strategy',
    description: 'Data-driven insights combined with creative storytelling for maximum impact.',
    icon: 'Target'
  },
  {
    id: '5',
    title: 'Talent Coordination',
    description: 'Seamless logistics and professional handling of top-tier talent worldwide.',
    icon: 'Users'
  }
];

export const MEDIA_GALLERY: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://picsum.photos/seed/m1/1200/800',
    category: 'Celebrity',
    title: 'Red Carpet Gala'
  },
  {
    id: '2',
    type: 'image',
    url: 'https://picsum.photos/seed/m2/800/1200',
    category: 'Campaign',
    title: 'Urban Streetwear Shoot'
  },
  {
    id: '3',
    type: 'video',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://picsum.photos/seed/v1/800/600',
    category: 'Event',
    title: 'Live Concert Highlights'
  },
  {
    id: '4',
    type: 'image',
    url: 'https://picsum.photos/seed/m3/1200/1200',
    category: 'Brand',
    title: 'Luxury Watch Launch'
  }
];
