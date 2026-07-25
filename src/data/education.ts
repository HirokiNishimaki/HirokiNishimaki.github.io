export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  institutionLogoUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2026—Present",
    institution: "Keio University",
    degree: "M.S. in Computer Science",
    institutionLogoUrl: "https://imagedelivery.net/B3aR18lLMvcGgAp8NIV2xQ/a0122ae0-44cd-49e6-a4d4-e756191e4300/public",
    // advisor: "Prof. Komei Sugiura",
  },
  {
    year: "2022—2026",
    institution: "Keio University",
    degree: "B.S. in Computer Science",
    institutionLogoUrl: "https://imagedelivery.net/B3aR18lLMvcGgAp8NIV2xQ/a0122ae0-44cd-49e6-a4d4-e756191e4300/public",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
