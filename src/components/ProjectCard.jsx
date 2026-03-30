function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-3 text-slate-600">{project.description}</p>
      <p className="mt-3 text-sm text-slate-600">
        <span className="font-semibold text-slate-800">เทคโนโลยี:</span>{" "}
        {project.tech.join(", ")}
      </p>
      <div className="mt-5 flex items-center gap-4 text-sm font-semibold">
        <a
          className="text-sky-700 transition hover:text-sky-800"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          โค้ดบน GitHub
        </a>
        <a
          className="text-emerald-700 transition hover:text-emerald-800"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          ผลงาน
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
