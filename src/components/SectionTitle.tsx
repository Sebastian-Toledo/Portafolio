export default function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 border-b border-line pb-6">
      <h2 className="flex items-baseline gap-4 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
        <span className="font-mono text-base font-normal text-lime">{index}</span>
        {title}
      </h2>
    </div>
  );
}
