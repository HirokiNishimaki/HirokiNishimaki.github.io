import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="border-l border-zinc-200 pl-5">
      <div className="flex items-center gap-3">
        {experience.companyLogoUrl && (
          <a
            href={experience.companyUrl || experience.companyLogoUrl}
            className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden opacity-90 transition-opacity hover:opacity-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={experience.companyLogoUrl}
              alt={`${experience.company} logo`}
              className="max-h-full max-w-full object-contain mix-blend-multiply"
            />
          </a>
        )}
        <div className="min-w-0">
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
      </div>

      <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
        {experience.date}
      </p>

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
