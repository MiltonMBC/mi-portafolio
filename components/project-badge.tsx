interface ProjectBadgeProps {
  type: string
  color: string
}

export const ProjectBadge = ({ type, color }: ProjectBadgeProps) => (
  <span
    className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
    style={{
      backgroundColor: `${color}20`,
      color: color,
      border: `1px solid ${color}40`,
    }}
  >
    {type}
  </span>
)
