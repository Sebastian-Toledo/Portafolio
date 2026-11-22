export default function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="surface mb-8 rounded-3xl px-6 py-5">
      <h2 className="flex items-baseline gap-4 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
        <span className="font-mono text-base font-normal text-lime">{index}</span>
        {title}
      </h2>
    </div>
  );
}
