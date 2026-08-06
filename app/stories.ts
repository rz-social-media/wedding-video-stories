export type WeddingVideo = {
  id: string;
  title: string;
  duration: string;
  thumbnailTime: number;
  coverImage?: string;
};

export type WeddingStory = {
  slug: string;
  names: string;
  location: string;
  heroImage: string;
  videos: WeddingVideo[];
};

export const stories: WeddingStory[] = [
  {
    slug: "jasmin-daniel",
    names: "Jasmin & Daniel",
    location: "Italy",
    heroImage: "/images/jasmin-daniel-hero.jpg",
    videos: [
      {
        id: "87DnRdS4efJH541k1eIoqx012sy3Lnz900s402UHNaRUew",
        title: "Teaser — 4K",
        duration: "00:27",
        thumbnailTime: 2.4,
        coverImage: "/images/jasmin-teaser-cover.jpg",
      },
      {
        id: "U4dV8gv00k100tBpVS9KrAfxAOPuBd5XskwlHHcdSChak",
        title: "Short Film — 4K",
        duration: "07:00",
        thumbnailTime: 17.5,
        coverImage: "/images/jasmin-short-film-cover.jpg",
      },
    ],
  },
  {
    slug: "ofir-michael",
    names: "Ofir & Michael",
    location: "Château de Prunay",
    heroImage: "/images/ofir-michael-hero.jpg",
    videos: [
      {
        id: "oEZSS00EsoWVjt5xyh9hKNb02qEaOWln2QmDY62YXT02hE",
        title: "Teaser — 4K",
        duration: "00:36",
        thumbnailTime: 18.1,
        coverImage: "/images/ofir-michael-teaser-cover.jpg",
      },
      {
        id: "UuwA01gx02TgoQ7HCBilsuRikAvgNASld5UNgJzZg9wto",
        title: "Photoshoot — 4K",
        duration: "00:30",
        thumbnailTime: 10,
        coverImage: "/images/ofir-michael-photoshoot-cover.jpg",
      },
      {
        id: "Jt00z7vatTcyvIwg7HtJFhOqRkqns00t016NJ7gMQe7qJE",
        title: "Décor — 4K",
        duration: "00:24",
        thumbnailTime: 14.4,
        coverImage: "/images/ofir-michael-decor-cover.jpg",
      },
    ],
  },
  {
    slug: "priscillia-cory",
    names: "Priscillia & Cory",
    location: "Wedding Story",
    heroImage: "/images/priscillia-cory-hero.jpg",
    videos: [
      {
        id: "ZGJUTPgXDripAlzu1ItIR02CKwxfex8PUsQBfNlb1Wx8",
        title: "Teaser — 4K",
        duration: "00:19",
        thumbnailTime: 6.5,
        coverImage: "/images/priscillia-cover-dinner.jpg",
      },
      {
        id: "AbIOE7Q5ycETYuXLO5K01yUfLK1xcmYwTRLJQDFp6n3o",
        title: "Teaser II — 4K",
        duration: "00:14",
        thumbnailTime: 10,
        coverImage: "/images/priscillia-cover-ceremony.jpg",
      },
    ],
  },
];

export const storyBySlug = (slug: string) =>
  stories.find((story) => story.slug === slug);
