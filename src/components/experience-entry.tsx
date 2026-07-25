import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="group relative border-l border-zinc-200 pl-5">
      <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-300 ring-4 ring-[#f7f7f4] transition-colors group-hover:bg-zinc-900" />
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0 flex-1">
          <p className="mb-2 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
            {experience.date}
          </p>
          <h3 className="font-serif text-lg leading-snug text-zinc-950">
            {experience.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-zinc-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </p>
        </div>

        {experience.companyLogoUrl && (
          <a
            href={experience.companyUrl || experience.companyLogoUrl}
            className="flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-zinc-200 transition-transform duration-300 group-hover:-translate-y-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={experience.companyLogoUrl}
              alt={`${experience.company} logo`}
              className="max-h-full max-w-full object-contain"
            />
          </a>
        )}
      </div>

      {(experience.advisor || experience.manager || experience.description) && (
        <div className="mt-4 space-y-2">
          {experience.advisor && (
            <p className="text-sm italic leading-relaxed text-zinc-600">
              Advisor: {experience.advisor}
            </p>
          )}
          {experience.manager && (
            <p className="text-sm italic leading-relaxed text-zinc-600">
              Manager: {experience.manager}
            </p>
          )}
          {experience.description && (
            <p className="text-sm leading-relaxed text-zinc-600">
              {experience.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
