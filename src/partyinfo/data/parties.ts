export type Party = {
  id: string;
  name: string;
  founded?: string;
  principles: string[];
  location: string;
  description: string;
  attendees?: number;
  image?: string;
};

export const principleInfo: Record<string, string> = {
  liberalism:
    "Emphasizes individual rights, civil liberties, and a free-market economy.",
  conservatism:
    "Prioritizes tradition, social stability, and limited government change.",
  socialism:
    "Focuses on social ownership, economic equality, and welfare provisions.",
  environmentalism:
    "Advocates for policies that protect the environment and sustainable practices.",
  social_democracy:
    "Supports regulated markets with strong social safety nets and public services.",
};

export const parties: Party[] = [
  {
    id: "1",
    name: "Labour for All",
    founded: "1932",
    principles: ["social_democracy", "environmentalism"],
    location: "Nationwide",
    description:
      "A party focused on strong public services, workers' rights, and sustainable development.",
    attendees: 320,
    image: "/globe.svg",
  },
  {
    id: "2",
    name: "Progressive Alliance",
    founded: "1998",
    principles: ["liberalism", "environmentalism"],
    location: "Capital Region",
    description:
      "Championing civil liberties, digital rights, and climate action with a forward-looking agenda.",
    attendees: 210,
    image: "/file.svg",
  },
  {
    id: "3",
    name: "Community Conservatives",
    founded: "1950",
    principles: ["conservatism"],
    location: "Southern District",
    description:
      "Values tradition, community institutions, and gradual reform to preserve stability.",
    attendees: 145,
    image: "/window.svg",
  },
];

