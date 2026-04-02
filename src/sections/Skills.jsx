import SectionTitle from "../components/SectionTitle";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "REST APIs",
];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-14" aria-labelledby="skills-heading">
      <SectionTitle
        title="ทักษะ"
        subtitle="สามารถทำงานร่วมกับผู้อื่นและสื่อสารในการพัฒนาโปรเจกต์ได้มีความรับผิดชอบต่อหน้าที่และส่งงานตามเวลาทำงานภายใต้ภาวะความกดดันได้"
      />
      <div
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        role="list"
        aria-labelledby="skills-heading"
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-center text-sm font-semibold text-slate-700"
            role="listitem"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
