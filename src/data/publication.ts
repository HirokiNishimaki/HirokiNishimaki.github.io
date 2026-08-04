export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  slidesUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  presentationId?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "Under Review at IEEE RA-L",
    title: "UrbanLoc: Language-Guided User Localization via Location-Aware Multimodal Retrieval",
    authors: "Hiroki Nishimaki, Kei Katsumata, Jun Piao, Naoki Hosomi, Kentaro Yamada, and Komei Sugiura",
    // paperUrl: "https://arxiv.org/abs/2409.15476",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "A two-stage language-guided localization method that retrieves and reranks geotagged street-view images to estimate user locations in urban environments.",
    imageUrl:"/ral26.png",
    // projectUrl: "https://3c52a6f9.urbanloc.pages.dev/",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2026",
    conference: "MIRU",
    title: "Street-View Image Retrieval for Natural Language-Guided User Localization in Urban Environments",
    authors: "Hiroki Nishimaki, Kei Katsumata, Jun Piao, Naoki Hosomi, Kentaro Yamada, and Komei Sugiura",
    tldr: "Street-view image retrieval for language-guided user localization, using area-level summaries and object-coverage reranking to resolve ambiguous urban descriptions.",
    imageUrl: "/miru26.png",
    presentationId: "IS3-114",
  },
  {
    year: "2025",
    conference: "RSJ",
    title: "多言語シーンテキストを考慮した深層状態空間モデルに基づく実世界検索エンジン",
    authors: "西牧宙輝, 八島大地, 戸倉健登, 杉浦孔明",
    tldr: "A multimodal retrieval method for everyday-object search that integrates multilingual scene text and visual cues using deep state space models.",
    paperUrl: "https://smilab.org/pdf/2025/2025-09-18T14:11:48+09:00_Hiroki_Nishimaki.pdf",
    imageUrl: "/rsj25.png",
    presentationId: "IM3-04",
    slidesUrl: "https://speakerdeck.com/keio_smilab/rsj25-multilingual-scene-text-aware-multimodal-retrieval-for-everyday-objects-based-on-deep-state-space-models",
  },
];
