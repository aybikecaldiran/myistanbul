// export interface Activity {
//   id: number;
//   name: string;
//   sub_title?: string;
//   description?: string;
//   short_description?: string;
//   location?: string;
//   image?: string;
//   price?: number;
//   discounted_price?: number;
//   rating?: number;
//   opening_hours?: string;
//   duration?: string;
//   category_id?: number;
//   is_free_with_pass?: boolean;
//   is_discounted_with_pass?: boolean;
//   requires_reservation?: boolean;
//   has_instant_access?: boolean;
//   has_skip_the_line?: boolean;
//   properties?: number[];
//   tags?: string[];
//   gettingthere?: string;
//   remark?: string;
//   learn_more?: string;
//   extra_info?: string;
//   meta_title?: string;
//   meta_description?: string;
//   order_index?: number;
//   is_purchasable?: boolean;
//   show_pass_price?: boolean;
//   is_exclusive?: boolean;
//   click_count?: number;
//   is_saleable?: boolean;
// }

export interface Category {
  categoryId: number;
  categoryOrder: number;
  categoryName: string;
  attractions: any[] | null;
}

export interface ActivityType {
  id: number;
  name: string;
  type: string;
  sort: number;
  p_attraction_properties: AttractionProperty[];
}

export interface AttractionProperty {
  id: number;
  attraction_id: number;
  property_id: number;
  attraction: any | null;
  property: any | null;
}


//Activity - data-1.json
// export const activities: Activity[] = [
//   {
//     id: 227,
//     name: "Hagia Sophia",
//     sub_title: "Hagia Sophia Skip-the-Ticket-Line Entry with Audio Guide with Istanbul Tourist Pass®",
//     description: "Hagia Sophia is one of the most visited attractions in Istanbul! It will amaze you with its magnificent architecture, history, and ambiance. You will feel the Christian and Islamic history laid side-by-side while discovering Hagia Sophia!",
//     short_description: "Byzantine masterpiece and UNESCO World Heritage Site",
//     location: "Sultanahmet",
//     image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400",
//     price: 0,
//     rating: 4.9,
//     opening_hours: "09:00 - 19:00",
//     duration: "1-2 hours",
//     category_id: 2,
//     is_free_with_pass: true,
//     is_discounted_with_pass: false,
//     requires_reservation: false,
//     has_instant_access: true,
//     has_skip_the_line: true,
//     properties: [24, 22, 13, 21],
//     tags: ["mosque", "museum", "unesco", "byzantine", "ottoman"],
//     order_index: 10010,
//     is_purchasable: true,
//     show_pass_price: false,
//     is_exclusive: true,
//     click_count: 58976,
//     is_saleable: false
//   },
//   {
//     id: 196,
//     name: "Blue Mosque",
//     sub_title: "Sultan Ahmed Mosque Audio Guide Tour",
//     description: "The Blue Mosque, officially known as Sultan Ahmed Mosque, is one of Istanbul's most iconic landmarks with its six minarets and stunning blue Iznik tiles.",
//     short_description: "Iconic mosque with six minarets and beautiful blue tiles",
//     location: "Sultanahmet",
//     image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400",
//     price: 0,
//     rating: 4.8,
//     opening_hours: "09:00 - 18:00",
//     duration: "45 minutes",
//     category_id: 2,
//     is_free_with_pass: true,
//     requires_reservation: false,
//     has_instant_access: true,
//     properties: [24],
//     tags: ["mosque", "architecture", "ottoman", "sultanahmet"],
//     order_index: 10020,
//     is_purchasable: true,
//     is_exclusive: false
//   },
//   {
//     id: 17,
//     name: "Topkapi Palace",
//     sub_title: "Topkapi Palace Museum Skip-the-Line Entry",
//     description: "Former residence of Ottoman sultans, showcasing imperial collections, treasury, and stunning views of the Bosphorus.",
//     short_description: "Ottoman sultans' palace with imperial treasures",
//     location: "Sultanahmet",
//     image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
//     price: 100,
//     discounted_price: 0,
//     rating: 4.7,
//     opening_hours: "09:00 - 18:30",
//     duration: "2-3 hours",
//     category_id: 3,
//     is_free_with_pass: true,
//     requires_reservation: false,
//     has_instant_access: true,
//     properties: [24, 13],
//     tags: ["palace", "museum", "ottoman", "treasury"],
//     order_index: 10030,
//     is_purchasable: true,
//     is_exclusive: false
//   },
//   {
//     id: 190,
//     name: "Galata Tower",
//     sub_title: "Galata Tower Entry with Panoramic City Views",
//     description: "Climb the medieval Galata Tower for breathtaking 360-degree views of Istanbul's historic peninsula and the Bosphorus.",
//     short_description: "Medieval tower with panoramic Istanbul views",
//     location: "Galata",
//     image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=400",
//     price: 80,
//     discounted_price: 40,
//     rating: 4.6,
//     opening_hours: "08:30 - 22:00",
//     duration: "1 hour",
//     category_id: 15,
//     is_free_with_pass: false,
//     is_discounted_with_pass: true,
//     requires_reservation: false,
//     has_instant_access: true,
//     properties: [22],
//     tags: ["tower", "views", "medieval", "galata"],
//     order_index: 10040,
//     is_purchasable: true,
//     is_exclusive: false
//   },
//   {
//     id: 240,
//     name: "Basilica Cistern",
//     sub_title: "Underground Cistern Skip-the-Line Entry",
//     description: "Explore the mysterious underground cistern with its forest of columns and ancient Medusa head sculptures.",
//     short_description: "Ancient underground cistern with mystical atmosphere",
//     location: "Sultanahmet",
//     image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
//     price: 60,
//     discounted_price: 0,
//     rating: 4.5,
//     opening_hours: "09:00 - 19:00",
//     duration: "45 minutes",
//     category_id: 13,
//     is_free_with_pass: true,
//     requires_reservation: false,
//     has_instant_access: true,
//     properties: [24, 21],
//     tags: ["cistern", "underground", "byzantine", "medusa"],
//     order_index: 10050,
//     is_purchasable: true,
//     is_exclusive: false
//   },
//   {
//     id: 250,
//     name: "Bosphorus Cruise",
//     sub_title: "Classic Bosphorus Boat Tour with Audio Guide",
//     description: "Enjoy a scenic cruise along the Bosphorus strait, seeing both European and Asian sides of Istanbul from the water.",
//     short_description: "Scenic boat tour along the Bosphorus strait",
//     location: "Eminönü",
//     image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=400",
//     price: 50,
//     discounted_price: 25,
//     rating: 4.4,
//     opening_hours: "10:00 - 18:00",
//     duration: "1.5 hours",
//     category_id: 11,
//     is_free_with_pass: false,
//     is_discounted_with_pass: true,
//     requires_reservation: true,
//     has_instant_access: false,
//     properties: [22],
//     tags: ["cruise", "bosphorus", "boat", "scenic"],
//     order_index: 10060,
//     is_purchasable: true,
//     is_exclusive: false
//   },
//   {
//     id: 251,
//     name: "Grand Bazaar",
//     sub_title: "Guided Tour of Historic Grand Bazaar",
//     description: "Discover one of the world's oldest and largest covered markets with over 4,000 shops selling traditional Turkish goods.",
//     short_description: "Historic covered market with thousands of shops",
//     location: "Beyazıt",
//     image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
//     price: 30,
//     discounted_price: 0,
//     rating: 4.3,
//     opening_hours: "09:00 - 19:00",
//     duration: "1 hour",
//     category_id: 6,
//     is_free_with_pass: true,
//     requires_reservation: false,
//     has_instant_access: true,
//     properties: [24],
//     tags: ["bazaar", "shopping", "historic", "traditional"],
//     order_index: 10070,
//     is_purchasable: true,
//     is_exclusive: false
//   },
//   {
//     id: 189,
//     name: "Dolmabahce Palace",
//     sub_title: "Ottoman Palace Entry with Audio Guide",
//     description: "Visit the 19th-century palace that served as the administrative center of the Ottoman Empire with its opulent rooms and crystal staircase.",
//     short_description: "Opulent 19th-century Ottoman palace",
//     location: "Beşiktaş",
//     image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400",
//     price: 90,
//     discounted_price: 0,
//     rating: 4.6,
//     opening_hours: "09:00 - 16:00",
//     duration: "1.5 hours",
//     category_id: 3,
//     is_free_with_pass: true,
//     requires_reservation: true,
//     has_instant_access: false,
//     properties: [24, 13],
//     tags: ["palace", "ottoman", "luxury", "architecture"],
//     order_index: 10080,
//     is_purchasable: true,
//     is_exclusive: false
//   },
//   {
//     id: 137,
//     name: "Istanbul Archaeological Museums",
//     sub_title: "Archaeological Museums Complex Entry",
//     description: "Explore three museums showcasing artifacts from ancient civilizations including the famous Alexander Sarcophagus.",
//     short_description: "Ancient artifacts and archaeological treasures",
//     location: "Sultanahmet",
//     image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
//     price: 60,
//     discounted_price: 0,
//     rating: 4.2,
//     opening_hours: "09:00 - 18:30",
//     duration: "2 hours",
//     category_id: 3,
//     is_free_with_pass: true,
//     requires_reservation: false,
//     has_instant_access: true,
//     properties: [24],
//     tags: ["museum", "archaeology", "ancient", "sarcophagus"],
//     order_index: 10090,
//     is_purchasable: true,
//     is_exclusive: false
//   }
// ]

export interface Activity {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  reviews: string;
  tags: string[];
  features: string[];
  badge?: { text: string; type: string };
  priceType?: 'free' | 'discounted';
  price?: number;
  status?: string;
}


export const activities: Activity[] = [
  {
    id: '1',
    title: 'Hagia Sophia Guided Tour',
    category: 'Historical',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAugOd33JtRNWSki1ZrLQa1jwVmG8vJW4Z2u1gwRJcbgGO47BLasZr7cfBVNAfEg2N5iQYR_GNJX4j4_2c8ryAJdRaHBizzeUJWv6y3W4sMksPQzeg3YcX3dfqblpIUm0gWQUxrNh3kCDFkkNhO7kL9s939WXhtPfyOlxMieGA0ikKKThkOzp0_SKAL6iiQ7uGYDFvo0vHWNDnJZ8ZZV27lhccTTAEit3GA2LOY5EOrqsxS9z0LmRvwR5cY00YVrs8T7BaSkTh95j8',
    rating: 4.9,
    reviews: '12k',
    tags: [],
    features: [],
    status: "OPEN NOW",
    badge: { text: 'Best Seller', type: 'primary' }
  },
  {
    id: '2',
    title: 'Bosphorus Dinner Cruise',
    category: 'Cruise',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLUR7yl6PJz0AyLV5fonqsr5yngDQ1pPRKN74W6UbukOesZqdEmNqprh4z1vw-EzOP6wR5K7YeIMiZdMxDqC6AV51k20rCrF8HHPdU7xY_SytxnQ-nq_Gp5ykv_TwTPM8PNqOCxnVSJOBQ15rtmK1W5prrdhwxAMQcwtXSjD_hLhQ7-o5u-G7RtjnySF82nNzYSeSAEwMh5VfZR8ZLR_TV1QjtCVdq6N4DldVPUEV-Ae35yLVXkdUSO2pYjehVaiNdD1E_Dr50CQE',
    rating: 4.8,
    reviews: '8.5k',
    tags: [],
    features: [],
    status: "BUSY",

  },
  {
    id: '3',
    title: 'Cappadocia Day Trip',
    category: 'Tour',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6QdSx0qp-Hrzcp5iSwtYFE3jvt9gqXmKhAPWCnjJTkt58wW7ID-TYnGKZoOgmA-HrONsYfxshhTOOl8siiBhVd-kj3NZ1uRD_5BVejKXuCtSrj41uq16g4oV_FN1Ct1OeQHDR78Ch5l3wD9xxGRGOZY3_FpaLrnijRfr-PThOB9vURM-n8nrNyrM_iv3VDDpV0Ssr9oT_4Y2D-Cdqn47RUi8QoOQ7MZ7HiE5PtccMYIN_awMgUnRpcKoVwutMie40x0L04viTOPc',
    rating: 5.0,
    reviews: '420',
    tags: [],
    features: [],
    status: "TONIGHT",
    badge: { text: 'New', type: 'secondary' }
  }
];

export const list_activities: Activity[] = [
  {
    id: '4',
    title: 'Topkapi Palace Museum Guided Tour with Harem Including Entry Tickets',
    category: 'Historical',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj7ATy9kp4OHAfVZgHiFgjn2tGcfEljUUJGA8FtAd8OPl05NAcqfl_vcv8sN0eFcWfTJvjbs3va66q6iuQ4efFBSBdBmqKMW9FdpsYlXYp2m19uoESdecPmjPHhgWBBWQTRgcXpgQuIZKmFn3e6n4_mhOb1a4DYpUn7WBpGajv6doV7_DyWGWDAggK9quXTwwA3o88cMnhH-1tVyGdECl8JCquWpbUL15TpNzuX5Nl7fXOtPSTIQ7Yo1tIwgb0jjRh-VjvHJvONUo',
    rating: 4.7,
    reviews: '12k',
    tags: ['Historical', 'Museum'],
    features: ['Fast Track', 'Audio Guide', 'Mobile Ticket', 'Flexible'],
    priceType: 'free'
  },
  {
    id: '5',
    title: 'Galata Tower Hosted Entry with Audio Guide',
    category: 'Historical',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTqDvuyk41VL6DiYzTFJAHPpi1r1RW5BVblJiXxyLxXWaXl7AmmSGUPSrmK6hJLkj1_6ZdIGZuP4sCJg5Q4gPydmA3W8yCrwLdW9Abm2dVNG450hOGlQgVf-rQOMYUOVzcoimZGij57MoRKkGrX0dsJSL_Qa1OTAPAlHFq-PYwApXe51t6ACqc0RDvL_8kEKK2sRw96TYlFLPNiZaWSV9DjoBZCj7HMUjOLcrTsYA-lJE9GYTQYmqjAIUq4xTsa0znjgddZJDRTl8',
    rating: 4.6,
    reviews: '8k',
    tags: ['Landmark', 'View'],
    features: ['Entry Ticket', 'Best View', 'Audio Guide', 'Elevator'],
    priceType: 'free'
  },
  {
    id: '6',
    title: 'Whirling Dervishes Show at Abud Efendi Mansion Entry Ticket',
    category: 'Cultural',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKDKknAqDnlWeDpWpHgQDMsHaJv-t5u7RQ4-xJch2-_DCSIGWL7pkuma_YflwsMg6TvsCfYM_JSKMaLpYgHmLZ9TRzzmSysq0WgQKBbzqGSgJspouyXsu5chld6w4aX3oUqxaFBdqXJpf3uixn1S7-lQAniQEz4WhD91WJIk-J8qT2gI0lpsDlt21Ul90VQrznMAXwq3_Ojp84TphrmvAXv6UqWXTRM_0fBVGFKvQX0qe9Y4_lTkKTysggJb0_EMwH8S69u3KBCjo',
    rating: 4.9,
    reviews: '2.1k',
    tags: ['Cultural', 'Show'],
    features: ['Reserved Seating', 'Live Show', 'Historic Venue', 'Traditional Performance'],
    priceType: 'discounted'
  }
];

// Categories - data-2.json
export const categories: Category[] = [
  {
    categoryId: 3,
    categoryOrder: 2,
    categoryName: "Museums",
    attractions: null
  },
  {
    categoryId: 2,
    categoryOrder: 3,
    categoryName: "Mosques & Places of Worship",
    attractions: null
  },
  {
    categoryId: 13,
    categoryOrder: 4,
    categoryName: "Historical Landmarks",
    attractions: null
  },
  {
    categoryId: 15,
    categoryOrder: 4,
    categoryName: "Towers & Observation Decks",
    attractions: null
  },
  {
    categoryId: 8,
    categoryOrder: 7,
    categoryName: "Airport Transfers & Transportation",
    attractions: null
  },
  {
    categoryId: 11,
    categoryOrder: 7,
    categoryName: "Sightseeing & Bosphorus Cruise",
    attractions: null
  },
  {
    categoryId: 19,
    categoryOrder: 7,
    categoryName: "Special Offers",
    attractions: null
  },
  {
    categoryId: 12,
    categoryOrder: 8,
    categoryName: "Shows & Entertainment",
    attractions: null
  },
  {
    categoryId: 14,
    categoryOrder: 10,
    categoryName: "Aquariums & Zoos",
    attractions: null
  },
  {
    categoryId: 6,
    categoryOrder: 11,
    categoryName: "Experiences",
    attractions: null
  },
  {
    categoryId: 20,
    categoryOrder: 11,
    categoryName: "Family Friendly",
    attractions: null
  },
  {
    categoryId: 18,
    categoryOrder: 12,
    categoryName: "Outside the City",
    attractions: null
  },
  {
    categoryId: 17,
    categoryOrder: 13,
    categoryName: "Outdoor Activities",
    attractions: null
  },
  {
    categoryId: 10,
    categoryOrder: 20,
    categoryName: "Services & Benefits",
    attractions: null
  }
];

// Activity_Type - data-3.json
export const activityTypes: ActivityType[] = [
  {
    "id": 24,
    "name": "FREE with Pass",
    "type": "detail-property",
    "sort": 1,
    "p_attraction_properties": [
      {
        "id": 20529,
        "attraction_id": 196,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 20692,
        "attraction_id": 224,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 20850,
        "attraction_id": 17,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21212,
        "attraction_id": 190,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21454,
        "attraction_id": 240,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21464,
        "attraction_id": 250,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21544,
        "attraction_id": 251,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21761,
        "attraction_id": 189,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21788,
        "attraction_id": 137,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21793,
        "attraction_id": 22,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21812,
        "attraction_id": 157,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21820,
        "attraction_id": 12,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21869,
        "attraction_id": 260,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21879,
        "attraction_id": 261,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21884,
        "attraction_id": 263,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21926,
        "attraction_id": 259,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21953,
        "attraction_id": 235,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 21977,
        "attraction_id": 143,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22008,
        "attraction_id": 191,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22219,
        "attraction_id": 19,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22224,
        "attraction_id": 7,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22259,
        "attraction_id": 279,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22285,
        "attraction_id": 181,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22295,
        "attraction_id": 245,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22345,
        "attraction_id": 76,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22351,
        "attraction_id": 225,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22393,
        "attraction_id": 173,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22415,
        "attraction_id": 153,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22443,
        "attraction_id": 221,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22519,
        "attraction_id": 28,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22553,
        "attraction_id": 209,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22565,
        "attraction_id": 211,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22597,
        "attraction_id": 136,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22600,
        "attraction_id": 135,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22606,
        "attraction_id": 35,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22610,
        "attraction_id": 49,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22644,
        "attraction_id": 78,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22649,
        "attraction_id": 161,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22654,
        "attraction_id": 146,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22659,
        "attraction_id": 162,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22665,
        "attraction_id": 148,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22894,
        "attraction_id": 164,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22954,
        "attraction_id": 258,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22958,
        "attraction_id": 237,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22970,
        "attraction_id": 267,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22977,
        "attraction_id": 283,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22985,
        "attraction_id": 270,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 22995,
        "attraction_id": 33,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 23016,
        "attraction_id": 244,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 23059,
        "attraction_id": 231,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 23660,
        "attraction_id": 262,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 23921,
        "attraction_id": 286,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 23940,
        "attraction_id": 6,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 23947,
        "attraction_id": 236,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24019,
        "attraction_id": 45,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24342,
        "attraction_id": 210,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24414,
        "attraction_id": 288,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24416,
        "attraction_id": 201,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24422,
        "attraction_id": 265,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24785,
        "attraction_id": 23,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24870,
        "attraction_id": 147,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24917,
        "attraction_id": 163,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24924,
        "attraction_id": 256,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24942,
        "attraction_id": 255,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24962,
        "attraction_id": 133,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 24970,
        "attraction_id": 192,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 25164,
        "attraction_id": 165,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 25558,
        "attraction_id": 107,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 25861,
        "attraction_id": 25,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26004,
        "attraction_id": 166,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26099,
        "attraction_id": 198,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26110,
        "attraction_id": 216,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26192,
        "attraction_id": 20,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26249,
        "attraction_id": 249,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26270,
        "attraction_id": 215,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26301,
        "attraction_id": 287,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26319,
        "attraction_id": 39,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26326,
        "attraction_id": 197,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26381,
        "attraction_id": 269,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26396,
        "attraction_id": 1,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26472,
        "attraction_id": 156,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26515,
        "attraction_id": 289,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26527,
        "attraction_id": 4,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26535,
        "attraction_id": 175,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26563,
        "attraction_id": 257,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26590,
        "attraction_id": 248,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26732,
        "attraction_id": 10,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26775,
        "attraction_id": 277,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26784,
        "attraction_id": 292,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26815,
        "attraction_id": 280,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26824,
        "attraction_id": 253,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26849,
        "attraction_id": 226,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26868,
        "attraction_id": 16,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26880,
        "attraction_id": 285,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26886,
        "attraction_id": 284,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26906,
        "attraction_id": 5,
        "property_id": 24,
        "attraction": null,
        "property": null
      },
      {
        "id": 26935,
        "attraction_id": 2,
        "property_id": 24,
        "attraction": null,
        "property": null
      }
    ]
  },
  {
    "id": 25,
    "name": "Discounted with Pass",
    "type": "detail-property",
    "sort": 2,
    "p_attraction_properties": [
      {
        "id": 21429,
        "attraction_id": 239,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 21502,
        "attraction_id": 234,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 21608,
        "attraction_id": 233,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22050,
        "attraction_id": 158,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22060,
        "attraction_id": 195,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22102,
        "attraction_id": 102,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22108,
        "attraction_id": 227,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22124,
        "attraction_id": 159,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22133,
        "attraction_id": 188,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22143,
        "attraction_id": 212,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22148,
        "attraction_id": 213,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22229,
        "attraction_id": 8,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22311,
        "attraction_id": 223,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22422,
        "attraction_id": 9,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22449,
        "attraction_id": 206,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 22457,
        "attraction_id": 199,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 23042,
        "attraction_id": 247,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 24013,
        "attraction_id": 193,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 24427,
        "attraction_id": 168,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 24756,
        "attraction_id": 281,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 25229,
        "attraction_id": 176,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 25302,
        "attraction_id": 217,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 25685,
        "attraction_id": 238,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 25739,
        "attraction_id": 11,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 26284,
        "attraction_id": 222,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 26305,
        "attraction_id": 252,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 26595,
        "attraction_id": 291,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 26646,
        "attraction_id": 278,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 26717,
        "attraction_id": 272,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 26724,
        "attraction_id": 293,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 26773,
        "attraction_id": 294,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 26791,
        "attraction_id": 295,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 26811,
        "attraction_id": 296,
        "property_id": 25,
        "attraction": null,
        "property": null
      },
      {
        "id": 26924,
        "attraction_id": 282,
        "property_id": 25,
        "attraction": null,
        "property": null
      }
    ]
  },
  {
    "id": 22,
    "name": "Available Everyday",
    "type": "detail-property",
    "sort": 3,
    "p_attraction_properties": [
      {
        "id": 20527,
        "attraction_id": 196,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 20691,
        "attraction_id": 224,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 20849,
        "attraction_id": 17,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 21210,
        "attraction_id": 190,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 21428,
        "attraction_id": 239,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 21819,
        "attraction_id": 12,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 21867,
        "attraction_id": 260,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 21877,
        "attraction_id": 261,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 21882,
        "attraction_id": 263,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 21951,
        "attraction_id": 235,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 21975,
        "attraction_id": 143,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22006,
        "attraction_id": 191,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22101,
        "attraction_id": 102,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22107,
        "attraction_id": 227,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22123,
        "attraction_id": 159,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22132,
        "attraction_id": 188,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22217,
        "attraction_id": 19,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22223,
        "attraction_id": 7,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22258,
        "attraction_id": 279,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22283,
        "attraction_id": 181,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22344,
        "attraction_id": 76,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22350,
        "attraction_id": 225,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22391,
        "attraction_id": 173,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22414,
        "attraction_id": 153,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22421,
        "attraction_id": 9,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22456,
        "attraction_id": 199,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22518,
        "attraction_id": 28,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22552,
        "attraction_id": 209,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22564,
        "attraction_id": 211,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22604,
        "attraction_id": 35,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22609,
        "attraction_id": 49,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22643,
        "attraction_id": 78,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22648,
        "attraction_id": 161,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22653,
        "attraction_id": 146,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22658,
        "attraction_id": 162,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22663,
        "attraction_id": 148,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22893,
        "attraction_id": 164,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22952,
        "attraction_id": 258,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22957,
        "attraction_id": 237,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22975,
        "attraction_id": 283,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 22984,
        "attraction_id": 270,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 23041,
        "attraction_id": 247,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 23658,
        "attraction_id": 262,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 23920,
        "attraction_id": 286,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24012,
        "attraction_id": 193,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24018,
        "attraction_id": 45,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24341,
        "attraction_id": 210,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24413,
        "attraction_id": 288,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24755,
        "attraction_id": 281,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24784,
        "attraction_id": 23,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24869,
        "attraction_id": 147,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24882,
        "attraction_id": 154,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24916,
        "attraction_id": 163,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24922,
        "attraction_id": 256,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24940,
        "attraction_id": 255,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 24961,
        "attraction_id": 133,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 25163,
        "attraction_id": 165,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 25228,
        "attraction_id": 176,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 25301,
        "attraction_id": 217,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 25557,
        "attraction_id": 107,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 25684,
        "attraction_id": 238,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 25738,
        "attraction_id": 11,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 25859,
        "attraction_id": 25,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26002,
        "attraction_id": 166,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26097,
        "attraction_id": 198,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26109,
        "attraction_id": 216,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26269,
        "attraction_id": 215,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26304,
        "attraction_id": 252,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26317,
        "attraction_id": 39,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26324,
        "attraction_id": 197,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26471,
        "attraction_id": 156,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26514,
        "attraction_id": 289,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26533,
        "attraction_id": 175,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26588,
        "attraction_id": 248,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26723,
        "attraction_id": 293,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26731,
        "attraction_id": 10,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26772,
        "attraction_id": 294,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26789,
        "attraction_id": 295,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26810,
        "attraction_id": 296,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26813,
        "attraction_id": 280,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26878,
        "attraction_id": 285,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26884,
        "attraction_id": 284,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26904,
        "attraction_id": 5,
        "property_id": 22,
        "attraction": null,
        "property": null
      },
      {
        "id": 26923,
        "attraction_id": 282,
        "property_id": 22,
        "attraction": null,
        "property": null
      }
    ]
  },
  {
    "id": 14,
    "name": "Instant Access",
    "type": "detail-property",
    "sort": 4,
    "p_attraction_properties": [
      {
        "id": 21465,
        "attraction_id": 250,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 21545,
        "attraction_id": 251,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 21813,
        "attraction_id": 157,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 21927,
        "attraction_id": 259,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 22051,
        "attraction_id": 158,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 22109,
        "attraction_id": 227,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 22607,
        "attraction_id": 35,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 22971,
        "attraction_id": 267,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 23017,
        "attraction_id": 244,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 23941,
        "attraction_id": 6,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 23948,
        "attraction_id": 236,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 24423,
        "attraction_id": 265,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 25862,
        "attraction_id": 25,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26005,
        "attraction_id": 166,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26112,
        "attraction_id": 216,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26306,
        "attraction_id": 252,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26320,
        "attraction_id": 39,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26327,
        "attraction_id": 197,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26382,
        "attraction_id": 269,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26473,
        "attraction_id": 156,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26776,
        "attraction_id": 277,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26881,
        "attraction_id": 285,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26887,
        "attraction_id": 284,
        "property_id": 14,
        "attraction": null,
        "property": null
      },
      {
        "id": 26907,
        "attraction_id": 5,
        "property_id": 14,
        "attraction": null,
        "property": null
      }
    ]
  },
  {
    "id": 18,
    "name": "Skip-the-Ticket-Line Entry",
    "type": "detail-property",
    "sort": 5,
    "p_attraction_properties": [
      {
        "id": 21467,
        "attraction_id": 250,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 21547,
        "attraction_id": 251,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 21790,
        "attraction_id": 137,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 21929,
        "attraction_id": 259,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 22297,
        "attraction_id": 245,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 22602,
        "attraction_id": 135,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 22973,
        "attraction_id": 267,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 23019,
        "attraction_id": 244,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 23943,
        "attraction_id": 6,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 23950,
        "attraction_id": 236,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 24425,
        "attraction_id": 265,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 25864,
        "attraction_id": 25,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 26195,
        "attraction_id": 20,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 26308,
        "attraction_id": 252,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 26322,
        "attraction_id": 39,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 26329,
        "attraction_id": 197,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 26778,
        "attraction_id": 277,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 26883,
        "attraction_id": 285,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 26889,
        "attraction_id": 284,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 26909,
        "attraction_id": 5,
        "property_id": 18,
        "attraction": null,
        "property": null
      },
      {
        "id": 26938,
        "attraction_id": 2,
        "property_id": 18,
        "attraction": null,
        "property": null
      }
    ]
  },
  {
    "id": 11,
    "name": "Guided Tour / Hosted Entry",
    "type": "detail-property",
    "sort": 6,
    "p_attraction_properties": [
      {
        "id": 22061,
        "attraction_id": 195,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 22103,
        "attraction_id": 102,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 22144,
        "attraction_id": 212,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 22149,
        "attraction_id": 213,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 22225,
        "attraction_id": 7,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 22611,
        "attraction_id": 49,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 24918,
        "attraction_id": 163,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 25230,
        "attraction_id": 176,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26111,
        "attraction_id": 216,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26193,
        "attraction_id": 20,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26250,
        "attraction_id": 249,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26285,
        "attraction_id": 222,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26528,
        "attraction_id": 4,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26536,
        "attraction_id": 175,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26564,
        "attraction_id": 257,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26591,
        "attraction_id": 248,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26858,
        "attraction_id": 134,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26869,
        "attraction_id": 16,
        "property_id": 11,
        "attraction": null,
        "property": null
      },
      {
        "id": 26936,
        "attraction_id": 2,
        "property_id": 11,
        "attraction": null,
        "property": null
      }
    ]
  },
  {
    "id": 19,
    "name": "Walk-In Access",
    "type": "detail-property",
    "sort": 7,
    "p_attraction_properties": [
      {
        "id": 20694,
        "attraction_id": 224,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 20852,
        "attraction_id": 17,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 21431,
        "attraction_id": 239,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 21822,
        "attraction_id": 12,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22053,
        "attraction_id": 158,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22063,
        "attraction_id": 195,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22105,
        "attraction_id": 102,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22126,
        "attraction_id": 159,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22135,
        "attraction_id": 188,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22146,
        "attraction_id": 212,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22151,
        "attraction_id": 213,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22227,
        "attraction_id": 7,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22231,
        "attraction_id": 8,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22261,
        "attraction_id": 279,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22313,
        "attraction_id": 223,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22347,
        "attraction_id": 76,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22353,
        "attraction_id": 225,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22521,
        "attraction_id": 28,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22555,
        "attraction_id": 209,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22567,
        "attraction_id": 211,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22613,
        "attraction_id": 49,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22646,
        "attraction_id": 78,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22651,
        "attraction_id": 161,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22656,
        "attraction_id": 146,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22661,
        "attraction_id": 162,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22896,
        "attraction_id": 164,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22960,
        "attraction_id": 237,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 22987,
        "attraction_id": 270,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 23044,
        "attraction_id": 247,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 23061,
        "attraction_id": 231,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 24015,
        "attraction_id": 193,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 24021,
        "attraction_id": 45,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 24344,
        "attraction_id": 210,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 24418,
        "attraction_id": 201,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 24787,
        "attraction_id": 23,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 24872,
        "attraction_id": 147,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 24920,
        "attraction_id": 163,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 24926,
        "attraction_id": 256,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 24944,
        "attraction_id": 255,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 24964,
        "attraction_id": 133,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 25166,
        "attraction_id": 165,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 25232,
        "attraction_id": 176,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 25304,
        "attraction_id": 217,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 25560,
        "attraction_id": 107,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 25687,
        "attraction_id": 238,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26007,
        "attraction_id": 166,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26101,
        "attraction_id": 198,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26114,
        "attraction_id": 216,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26252,
        "attraction_id": 249,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26272,
        "attraction_id": 215,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26287,
        "attraction_id": 222,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26303,
        "attraction_id": 287,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26398,
        "attraction_id": 1,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26474,
        "attraction_id": 156,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26516,
        "attraction_id": 289,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26530,
        "attraction_id": 4,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26593,
        "attraction_id": 248,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26785,
        "attraction_id": 292,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26817,
        "attraction_id": 280,
        "property_id": 19,
        "attraction": null,
        "property": null
      },
      {
        "id": 26826,
        "attraction_id": 253,
        "property_id": 19,
        "attraction": null,
        "property": null
      }
    ]
  },
  {
    id: 13,
    name: "Explore at Your Own Pace",
    type: "detail-property",
    sort: 8,
    p_attraction_properties: [
      {
        "id": 20528,
        "attraction_id": 196,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21211,
        "attraction_id": 190,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21453,
        "attraction_id": 240,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21463,
        "attraction_id": 250,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21543,
        "attraction_id": 251,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21760,
        "attraction_id": 189,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21792,
        "attraction_id": 22,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21811,
        "attraction_id": 157,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21868,
        "attraction_id": 260,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21878,
        "attraction_id": 261,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21883,
        "attraction_id": 263,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21925,
        "attraction_id": 259,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21952,
        "attraction_id": 235,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 21976,
        "attraction_id": 143,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 22007,
        "attraction_id": 191,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 22218,
        "attraction_id": 19,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 22284,
        "attraction_id": 181,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 22294,
        "attraction_id": 245,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 22392,
        "attraction_id": 173,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 22605,
        "attraction_id": 35,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 22664,
        "attraction_id": 148,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 22953,
        "attraction_id": 258,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 22969,
        "attraction_id": 267,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 22976,
        "attraction_id": 283,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 23015,
        "attraction_id": 244,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 23659,
        "attraction_id": 262,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 23939,
        "attraction_id": 6,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 23946,
        "attraction_id": 236,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 24421,
        "attraction_id": 265,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 24923,
        "attraction_id": 256,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 24941,
        "attraction_id": 255,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 25860,
        "attraction_id": 25,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26003,
        "attraction_id": 166,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26098,
        "attraction_id": 198,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26318,
        "attraction_id": 39,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26325,
        "attraction_id": 197,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26380,
        "attraction_id": 269,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26534,
        "attraction_id": 175,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26589,
        "attraction_id": 248,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26814,
        "attraction_id": 280,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26857,
        "attraction_id": 134,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26867,
        "attraction_id": 16,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26879,
        "attraction_id": 285,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26885,
        "attraction_id": 284,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26905,
        "attraction_id": 5,
        "property_id": 13,
        "attraction": null,
        "property": null
      },
      {
        "id": 26934,
        "attraction_id": 2,
        "property_id": 13,
        "attraction": null,
        "property": null
      }
    ]
  },
  {
    id: 21,
    name: "No Reservation Needed",
    type: "detail-property",
    sort: 9,
    p_attraction_properties: [
      {
        id: 20530,
        attraction_id: 196,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 20693,
        attraction_id: 224,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 20851,
        attraction_id: 17,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 21213,
        attraction_id: 190,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 21455,
        attraction_id: 240,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 21762,
        attraction_id: 189,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 21794,
        attraction_id: 22,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 21870,
        attraction_id: 260,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 21880,
        attraction_id: 261,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 21885,
        attraction_id: 263,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 21954,
        attraction_id: 235,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 21978,
        attraction_id: 143,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22009,
        attraction_id: 191,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22220,
        attraction_id: 19,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22286,
        attraction_id: 181,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22346,
        attraction_id: 76,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22352,
        attraction_id: 225,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22520,
        attraction_id: 28,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22554,
        attraction_id: 209,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22566,
        attraction_id: 211,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22645,
        attraction_id: 78,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22650,
        attraction_id: 161,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22655,
        attraction_id: 146,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22660,
        attraction_id: 162,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22666,
        attraction_id: 148,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22895,
        attraction_id: 164,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22955,
        attraction_id: 258,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22959,
        attraction_id: 237,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22978,
        attraction_id: 283,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 22986,
        attraction_id: 270,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 24020,
        attraction_id: 45,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 24343,
        attraction_id: 210,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 24786,
        attraction_id: 23,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 24871,
        attraction_id: 147,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 24925,
        attraction_id: 256,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 24943,
        attraction_id: 255,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 25165,
        attraction_id: 165,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 25559,
        attraction_id: 107,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 25686,
        attraction_id: 238,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 26006,
        attraction_id: 166,
        property_id: 21,
        attraction: null,
        property: null
      },
      {
        id: 26271,
        attraction_id: 215,
        property_id: 21,
        attraction: null,
        property: null
      }
    ]
  },
  {
    id: 20,
    name: "Reservation Recommended",
    type: "detail-property",
    "sort": 10,
    "p_attraction_properties": [
      {
        "id": 21430,
        "attraction_id": 239,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 21466,
        "attraction_id": 250,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 21503,
        "attraction_id": 234,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 21546,
        "attraction_id": 251,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 21609,
        "attraction_id": 233,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 21789,
        "attraction_id": 137,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 21821,
        "attraction_id": 12,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 21928,
        "attraction_id": 259,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22052,
        "attraction_id": 158,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22062,
        "attraction_id": 195,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22104,
        "attraction_id": 102,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22110,
        "attraction_id": 227,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22125,
        "attraction_id": 159,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22134,
        "attraction_id": 188,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22145,
        "attraction_id": 212,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22150,
        "attraction_id": 213,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22226,
        "attraction_id": 7,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22230,
        "attraction_id": 8,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22260,
        "attraction_id": 279,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22296,
        "attraction_id": 245,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22312,
        "attraction_id": 9,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22423,
        "attraction_id": 221,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22450,
        "attraction_id": 206,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22458,
        "attraction_id": 199,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22598,
        "attraction_id": 136,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22601,
        "attraction_id": 135,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22612,
        "attraction_id": 49,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 22972,
        "attraction_id": 267,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 23018,
        "attraction_id": 244,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 23043,
        "attraction_id": 247,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 23060,
        "attraction_id": 231,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 23661,
        "attraction_id": 262,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 23922,
        "attraction_id": 286,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 23942,
        "attraction_id": 6,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 23949,
        "attraction_id": 236,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 24014,
        "attraction_id": 193,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 24415,
        "attraction_id": 288,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 24417,
        "attraction_id": 201,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 24424,
        "attraction_id": 265,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 24428,
        "attraction_id": 168,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 24757,
        "attraction_id": 281,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 24883,
        "attraction_id": 154,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 24919,
        "attraction_id": 163,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 24963,
        "attraction_id": 133,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 24971,
        "attraction_id": 192,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 25231,
        "attraction_id": 176,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 25303,
        "attraction_id": 217,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 25740,
        "attraction_id": 11,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 25863,
        "attraction_id": 25,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26100,
        "attraction_id": 198,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26113,
        "attraction_id": 216,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26194,
        "attraction_id": 20,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26251,
        "attraction_id": 249,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26286,
        "attraction_id": 222,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26302,
        "attraction_id": 287,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26307,
        "attraction_id": 252,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26321,
        "attraction_id": 39,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26328,
        "attraction_id": 197,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26383,
        "attraction_id": 269,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26397,
        "attraction_id": 1,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26529,
        "attraction_id": 4,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26537,
        "attraction_id": 175,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26565,
        "attraction_id": 257,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26592,
        "attraction_id": 248,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26596,
        "attraction_id": 291,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26718,
        "attraction_id": 272,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26725,
        "attraction_id": 293,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26733,
        "attraction_id": 10,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26774,
        "attraction_id": 294,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26777,
        "attraction_id": 277,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26790,
        "attraction_id": 295,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26812,
        "attraction_id": 296,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26816,
        "attraction_id": 280,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26825,
        "attraction_id": 253,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26850,
        "attraction_id": 226,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26859,
        "attraction_id": 134,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26870,
        "attraction_id": 16,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26882,
        "attraction_id": 285,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26888,
        "attraction_id": 284,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26908,
        "attraction_id": 5,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26925,
        "attraction_id": 282,
        "property_id": 20,
        "attraction": null,
        "property": null
      },
      {
        "id": 26937,
        "attraction_id": 2,
        "property_id": 20,
        "attraction": null,
        "property": null
      }
    ]
  }
]

// User Pass
export const userPassData = {
  passId: "ITP1234567890",
  passType: "3 Days",
  participants: "2 Adult, 1 Child",
  startDate: "2026-01-06",
  isActive: true,
}
