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
  // Note that links work in the description
  description:
    "I am a master's student at <a href='https://www.keio.ac.jp' target='_blank' rel='noopener noreferrer'>Keio University</a>, advised by Prof. Komei Sugiura at the <a href='https://www.smilab.org/' target='_blank' rel='noopenernoreferrer'>SMI Lab</a>. My research focuses on multimodal AI for robotics, including language-guided localization, retrieval, and trajectory generation in real-world environments.",
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
