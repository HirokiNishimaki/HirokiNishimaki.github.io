export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  companyLogoUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Nov 2026 - Present",
    title: "Autonomous Driving Engineer",
    company: "newmo",
    companyUrl: "https://newmo.me/",
    companyLogoUrl: "/newmo.svg",
  },
  {
    date: "Oct 2026 - Nov 2026",
    title: "Machine Learning Engineering Intern",
    company: "Recruit",
    // description:
    //   "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "Peter Wang",
    companyUrl: "https://recruit-holdings.com/",
    companyLogoUrl: "/recruit.svg",
  },
  {
    date: "Sep 2026 - Present",
    title: "Research Intern",
    company: "CyberAgent",
    // description:
    //   "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "Peter Wang",
    companyUrl: "https://www.cyberagent.co.jp/",
    companyLogoUrl: "/cyberagent.png",
  },
  {
    date: "Jun 2026 - Sep 2026",
    title: "Research Intern",
    company: "Honda R&D",
    // description:
    //   "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "Peter Wang",
    companyUrl: "https://www.honda.co.jp/",
    companyLogoUrl: "/honda.png",
  },
  {
    date: "Oct 2025 - Sep 2026",
    title: "Machine Learning Engineering Intern",
    company: "CaseMatch",
    // description:
    //   "Worked on improving robustness of large language models to distribution shifts",
    // manager: "Elise Brown",
    companyUrl: "https://biz.casematch.jp/",
    companyLogoUrl: "/casematch.png",
  },
  {
    date: "Oct 2023 - Mar 2026",
    title: "Software Engineering Intern",
    company: "INNOOV",
    // description:
    //   "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "Peter Wang",
    companyUrl: "https://www.innoov.io/",
    companyLogoUrl: "/innoov.png",
  },
];
