function SectionTitle({ title, subtitle }) {
  return (
    <header className="mb-6">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>
      ) : null}
    </header>
  );
}

export default SectionTitle;