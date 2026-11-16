export default function SectionTitle({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
      <h2 className="flex items-baseline gap-4 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
        <span className="font-mono text-base font-normal text-lime">{index}</span>
        {title}
      </h2>
      {subtitle && <p className="max-w-sm font-serif text-xl text-muted italic">{subtitle}</p>}
    </div>
  );
}
