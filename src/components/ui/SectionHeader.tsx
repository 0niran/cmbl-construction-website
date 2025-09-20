interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  maxWidth?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  maxWidth = "max-w-3xl"
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full mb-6">
        <span className="font-semibold text-sm uppercase tracking-wider">{badge}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      <p className={`section-subtitle ${maxWidth} mx-auto`}>
        {subtitle}
      </p>
    </div>
  );
}