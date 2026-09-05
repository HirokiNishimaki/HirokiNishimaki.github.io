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
    date: "Sep 2026 - Present",
    title: "Research Intern",
    company: "CyberAgent",
    // description:
    //   "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "Peter Wang",
    companyUrl: "https://www.cyberagent.co.jp/",
    companyLogoUrl: "https://www.cyberagent.co.jp/special/rebranding/assets/img/img_logo_ca.png",
  },
  {
    date: "Jun 2026 - Sep 2026",
    title: "Research Intern",
    company: "Honda R&D",
    // description:
    //   "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "Peter Wang",
    companyUrl: "https://www.honda.co.jp/",
    companyLogoUrl: "https://www.honda.co.jp/auto/common/images/common/ogp.png",
  },
  {
    date: "Oct 2025 - Present",
    title: "Machine Learning Engineering Intern",
    company: "CaseMatch",
    // description:
    //   "Worked on improving robustness of large language models to distribution shifts",
    // manager: "Elise Brown",
    companyUrl: "https://biz.casematch.jp/",
    companyLogoUrl: "https://storage.googleapis.com/studio-design-asset-files/projects/BmqM17grqX/s-1188x390_v-fs_webp_27e19efb-6db5-475a-9490-97c97d1c7dda_small.webp",
  },
  {
    date: "Oct 2023 - Mar 2026",
    title: "Software Engineering Intern",
    company: "INNOOV",
    // description:
    //   "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "Peter Wang",
    companyUrl: "https://www.innoov.io/",
    companyLogoUrl: "https://www.innoov.io/hs-fs/hubfs/INNOOV%20bot.png?width=1644&height=608&name=INNOOV%20bot.png",
  },
];
