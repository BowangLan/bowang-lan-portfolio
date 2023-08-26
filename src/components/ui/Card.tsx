import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";
import { formatDate } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-56 p-4 border md:p-6 hover:bg-blue-400/10 trans border-slate-400/50 hover:border-blue-500/80">
      {/* Title */}
      <div className="flex items-center flex-none mb-2 md:gap-2">
        <span className="text-xl font-medium truncate md:text-xl lg:text-2xl">
          {project.title}
        </span>
        {project.websiteUrl && (
          <a href={project.websiteUrl} target="_blank">
            <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-3 cursor-pointer" />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank">
            <FaGithub className="w-5 h-5 ml-3 cursor-pointer" />
          </a>
        )}
        <div className="flex-1"></div>
        <div className="flex items-center flex-none gap-1 text-sm text-slate-400">
          <span className="">{formatDate(project.dateRange.start)}</span>
          {project.dateRange.end && (
            <>
              <span>{"-"}</span>
              <span>{formatDate(project.dateRange.end)}</span>
            </>
          )}
          {project.dateRange.ongoing && (
            <>
              <span>{"-"}</span>
              <span>{"Present"}</span>
            </>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="mb-2 text-sm leading-6 line-clamp-2 text-slate-300">
        {project.description}
      </div>

      <div className="flex flex-1"></div>

      {/* Tags */}
      <div className="flex flex-wrap items-center flex-none gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className="inline-flex items-center px-3 py-1.5 mt-1 text-sm font-medium text-white rounded-full cursor-default bg-blue-500/20 hover:bg-blue-500/40 trans"
          >
            <div className="relative mr-1 lg:mr-1.5 -translate-x-0 fcenter">
              <Image
                src={"/icons/" + (tag.iconFileName || tag.slug + ".svg")}
                alt={tag.name}
                width={18 * (tag.iconScale || 1)}
                height={18 * (tag.iconScale || 1)}
              />
            </div>
            <div className="text-xs">{tag.name}</div>
          </span>
        ))}
      </div>
    </div>
  );
}
