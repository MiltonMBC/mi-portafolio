import Link from "next/link"
import { ProjectBadge } from "./project-badge"
import { ExternalLinkIcon, ArrowRightIcon } from "./icons"

interface ProjectCardProps {
  title: string
  description: string
  type: string
  typeColor: string
  link: string
  status?: string
}

export const ProjectCard = ({ title, description, type, typeColor, link, status }: ProjectCardProps) => (
  <article className="project-card rounded-xl p-8 h-full group">
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          <div className="animate-float">
            <ExternalLinkIcon />
          </div>
        </div>

        <div className="mb-4">
          <ProjectBadge type={type} color={typeColor} />
          {status && <span className="ml-2 status-badge px-2 py-1 text-xs rounded-full">{status}</span>}
        </div>

        <p className="text-white/90 leading-relaxed flex-1">{description}</p>

        <div className="mt-6 flex items-center text-accent text-sm font-medium">
          <span className="enhanced-link">View Project</span>
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  </article>
)
