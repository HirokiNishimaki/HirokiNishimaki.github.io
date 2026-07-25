import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";

export default function Home() {
  const sectionHeadingClass =
    "font-sans text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500 mb-8";
  const educationGroups = educationData.reduce<
    {
      institution: string;
      institutionLogoUrl?: string;
      entries: typeof educationData;
    }[]
  >((groups, education) => {
    const group = groups.find(
      (item) =>
        item.institution === education.institution &&
        item.institutionLogoUrl === education.institutionLogoUrl,
    );

    if (group) {
      group.entries.push(education);
    } else {
      groups.push({
        institution: education.institution,
        institutionLogoUrl: education.institutionLogoUrl,
        entries: [education],
      });
    }

    return groups;
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-zinc-900">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10 lg:gap-16">
          <aside className="md:col-span-4 lg:col-span-4">
            <div className="md:sticky md:top-12">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </aside>

          <main className="md:col-span-8 lg:col-span-7 lg:col-start-6">
            {aboutMe.description && (
              <section className="mb-16 border-b border-zinc-200 pb-12">
                <p
                  className="max-w-2xl font-serif text-[1.05rem] leading-8 text-zinc-700 [&_a]:text-zinc-950 [&_a]:underline [&_a]:decoration-zinc-300 [&_a]:underline-offset-4 [&_a:hover]:decoration-zinc-900"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            <div className="space-y-20">
              {sectionOrder.map((sectionName) => {
                switch (sectionName) {
                  case Section.News:
                    return (
                      newsData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className={sectionHeadingClass}>News</h2>
                          <div className="space-y-10">
                            {newsData.map((news, index) => (
                              <div key={index}>
                                <NewsEntry news={news} />
                              </div>
                            ))}
                          </div>
                        </section>
                      )
                    );
                  case Section.Education:
                    return (
                      educationData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className={sectionHeadingClass}>Education</h2>
                          <div className="space-y-8">
                            {educationGroups.map((group) => (
                              <div
                                key={`${group.institution}-${group.institutionLogoUrl || ""}`}
                                className="border-l border-zinc-200 pl-5"
                              >
                                <div className="flex items-center gap-3">
                                  {group.institutionLogoUrl && (
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden opacity-85">
                                      <img
                                        src={group.institutionLogoUrl}
                                        alt={`${group.institution} logo`}
                                        className="max-h-full max-w-full object-contain mix-blend-multiply"
                                      />
                                    </div>
                                  )}
                                  <h3 className="font-serif text-xl leading-snug text-zinc-950">
                                    {group.institution}
                                  </h3>
                                </div>
                                <div className="mt-5 space-y-4">
                                  {group.entries.map((education) => (
                                    <div
                                      key={`${education.year}-${education.degree}`}
                                      className="grid grid-cols-1 gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
                                    >
                                      <div>
                                        <p className="text-sm text-zinc-700">
                                          {education.degree}
                                        </p>
                                        {education.advisor && (
                                          <p className="mt-2 text-sm italic text-zinc-500">
                                            Advisor: {education.advisor}
                                          </p>
                                        )}
                                        {education.thesis && (
                                          <p className="mt-2 text-sm italic text-zinc-500">
                                            Thesis:{" "}
                                            {education.thesisUrl ? (
                                              <a
                                                href={education.thesisUrl}
                                                className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-zinc-800"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                {education.thesis}
                                              </a>
                                            ) : (
                                              education.thesis
                                            )}
                                          </p>
                                        )}
                                      </div>
                                      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500 sm:text-right">
                                        {education.year}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      )
                    );
                  case Section.Publication:
                    return (
                      publicationData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className={sectionHeadingClass}>Publications</h2>
                          <div className="space-y-8">
                            {publicationData.map((publication, index) => (
                              <div key={index}>
                                <PublicationEntry publication={publication} />
                                {index < publicationData.length - 1 && (
                                  <div className="my-8 h-px bg-zinc-200" />
                                )}
                              </div>
                            ))}
                          </div>
                        </section>
                      )
                    );
                  case Section.Experience:
                    return (
                      experienceData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className={sectionHeadingClass}>Experience</h2>
                          <div className="space-y-10">
                            {experienceData.map((experience, index) => (
                              <ExperienceEntry
                                key={index}
                                experience={experience}
                              />
                            ))}
                          </div>
                        </section>
                      )
                    );
                  case Section.Portfolio:
                    return (
                      portfolioData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className={sectionHeadingClass}>Portfolio</h2>
                          <div className="space-y-10">
                            {portfolioData.map((portfolio, index) => (
                              <PortfolioEntry
                                key={index}
                                portfolio={portfolio}
                              />
                            ))}
                          </div>
                        </section>
                      )
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
