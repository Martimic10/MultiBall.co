export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Featured", href: "/#featured" },
  { label: "Process", href: "/#process" },
  { label: "Machines", href: "/machines" },
  { label: "Contact", href: "/contact" },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Design",
    description:
      "Every cabinet starts as a hand-drawn sketch before it becomes a CAD file. We lock the theme, the ruleset, and the art direction before a single board is cut.",
  },
  {
    number: "02",
    title: "Fabricate",
    description:
      "Baltic birch cabinets, powder-coated hardware, and CNC-cut playfields. Built in our shop, not outsourced overseas.",
  },
  {
    number: "03",
    title: "Wire",
    description:
      "Every switch, coil, and LED hand-soldered and tested on the bench. No shortcuts, no cold joints, no comebacks.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "Crated, insured, and freight-shipped nationwide. White-glove delivery and setup available in the continental US.",
  },
];

export interface Machine {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  imageSrc: string;
}

export const machines: Machine[] = [
  {
    id: "starbreaker",
    name: "STARBREAKER",
    tagline: "Deep space, deeper multiball",
    description:
      "A cosmic horror ruleset with a 4-ball wizard mode and a hand-painted backglass. Our best-selling cabinet, three years running.",
    price: "$8,995",
    imageSrc: "/deep-space.jpeg",
  },
  {
    id: "gutterking",
    name: "GUTTER KING",
    tagline: "Bowling alley chaos, arcade scale",
    description:
      "A retro bowling-themed table with a mechanical pin-reset toy and dual flipper banks. Loud, fast, and merciless on the outlanes.",
    price: "$7,495",
    imageSrc: "/bowling-pinball.png",
  },
  {
    id: "voltdrifter",
    name: "VOLT DRIFTER",
    tagline: "Synthwave street racing",
    description:
      "Chase lighting, a custom shaker motor, and a drift-combo scoring system built around a spinning speedometer toy.",
    price: "$9,750",
    imageSrc: "/racing-game.png",
  },
  // NOTE: imageSrc values below are picsum.photos placeholders. Swap
  // these for real sourced photography (Unsplash, Pexels) or your own
  // product shots before shipping to production.
  {
    id: "ironvault",
    name: "IRON VAULT",
    tagline: "Crack the combo, catch the multiplier",
    description:
      "A heist-themed table with a spinning vault-reel toy and a progressive jackpot ramp. The multiplier stacks the longer you keep the crew inside.",
    price: "$8,250",
    imageSrc: "https://picsum.photos/seed/ironvault/800/800",
  },
  {
    id: "kaijurumble",
    name: "KAIJU RUMBLE",
    tagline: "City-stomping multiball mayhem",
    description:
      "Twin monster toys battle across a fold-out skyline playfield. Knock down all five buildings to start Rumble Multiball.",
    price: "$9,995",
    imageSrc: "https://picsum.photos/seed/kaijurumble/800/800",
  },
  {
    id: "tikistorm",
    name: "TIKI STORM",
    tagline: "Surf's up, storm's coming",
    description:
      "A tropical surf-rock table with a spinning tiki-mask target and a rain-lit backglass. Ride the Wave Mode for the highest-value combo shots.",
    price: "$7,850",
    imageSrc: "https://picsum.photos/seed/tikistorm/800/800",
  },
];

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 1987, label: "Founded" },
  { value: 412, suffix: "+", label: "Machines Built" },
  { value: 38, label: "States Shipped To" },
  { value: 100, suffix: "%", label: "Hand-Wired" },
];

export interface Testimonial {
  quote: string;
  attribution: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We ordered a Starbreaker for our arcade bar and it hasn't had a single service call in fourteen months. It plays like it was tuned yesterday, every day.",
    attribution: "— DAVE OKONKWO, OWNER, TILT ROOM ARCADE BAR",
  },
  {
    quote:
      "MULTIBALL CO. built us a Gutter King for the lobby and it's the loudest, most requested machine we own. The mechanical pin-reset toy alone is worth the price.",
    attribution: "— PRIYA SHAH, GENERAL MANAGER, STRIKE & SPARE LANES",
  },
  {
    quote:
      "I've collected pins for twenty years and this is the first custom build that felt like it came out of a real factory, not a garage. Wiring is immaculate.",
    attribution: "— MARCUS REID, PRIVATE COLLECTOR",
  },
];

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export const contactInfo: ContactInfo = {
  email: "build@multiball.co",
  phone: "(414) 555-0142",
  address: "4400 Flipper Ave, Milwaukee, WI 53202",
};

export interface ShopHours {
  day: string;
  hours: string;
}

export const shopHours: ShopHours[] = [
  { day: "Mon–Fri", hours: "9AM–5PM CST" },
  { day: "Saturday", hours: "By appointment" },
  { day: "Sunday", hours: "Closed" },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "youtube" | "facebook";
}

// NOTE: href values are placeholders. Swap in the real MULTIBALL CO.
// social profile URLs before shipping to production.
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "Facebook", href: "#", icon: "facebook" },
];
