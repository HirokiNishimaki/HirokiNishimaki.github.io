export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Hiroki Nishimaki",
  altName: "西牧 宙輝",
  title: "Master's student (M1)",
  institution: "Keio University",
  description: "",
  // Note that links work in the description
  // description:
  //   "I'm a final-year <a href='https://www.stanford.edu'>PhD candidate</a> working at the intersection of causal inference and machine learning. My research focuses on developing robust, interpretable systems that can reason about cause and effect in complex environments.",
  email: "n.hiroki1108@keio.jp",
  imageUrl: "/profile.jpg",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "HirokiNishimaki",
  linkedinUsername: "hiroki-nishimaki-aa27a638b",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://www.keio.ac.jp",
  // altName: "",
  // secretDescription: "I like dogs.",
};
