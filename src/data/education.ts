export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2026—Present",
    institution: "Keio University",
    degree: "M.S. in Computer Science",
    // advisor: "Prof. Komei Sugiura",
  },
  {
    year: "2022—2026",
    institution: "Keio University",
    degree: "B.S. in Computer Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
