import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="flex flex-row-reverse gap-5 md:flex-col md:gap-7">
      {aboutMe.imageUrl && (
        <div className="w-32 flex-shrink-0 sm:w-40 md:w-full">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-200 shadow-sm ring-1 ring-zinc-200 md:w-[76%] lg:w-[70%]">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>
      )}
      <div className="min-w-0 flex-1 md:w-full">
        <h1 className="mb-2 font-serif text-3xl font-light leading-tight text-zinc-950 sm:text-4xl md:text-3xl lg:text-4xl">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="mb-5 text-sm leading-relaxed text-zinc-500">
            {aboutMe.altName}
          </p>
        )}
        <p className="mb-6 border-l border-zinc-300 pl-4 font-sans text-xs font-medium uppercase leading-6 tracking-[0.16em] text-zinc-500">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">CV</span>
            </a>
          )}
        </div>
        <div className="space-y-2.5 text-sm">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex max-w-full items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-950"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={15} className="shrink-0" />
            <span className="truncate">{aboutMe.email}</span>
          </a>
          {aboutMe.googleScholarUrl && (
            <>
              <br />
              <a
                href={aboutMe.googleScholarUrl}
                className="inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={15} />
                Google Scholar
              </a>
            </>
          )}
          {aboutMe.twitterUsername && (
            <>
              <br />
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                className="inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={15} />@{aboutMe.twitterUsername}
              </a>
            </>
          )}
          {aboutMe.githubUsername && (
            <>
              <br />
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
                github.com/{aboutMe.githubUsername}
              </a>
            </>
          )}
          {aboutMe.linkedinUsername && (
            <>
              <br />
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={15} />
                linkedin.com/in/{aboutMe.linkedinUsername}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
