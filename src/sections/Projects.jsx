import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "Dashboard",
    description:
      "แดชบอร์การเก็บข้อมูล ",
    tech: ["Frontend: HTML, CSS, JavaScript, Bootstrap/Tailwind Backend PHP, Node.js Database MySQL, MongoDB"],
    github: "https://github.com/JirasakPPTP/Dashboard-management",
    demo: "https://dashboard-management-ochre.vercel.app",
  },
  {
    title: "Furniture-ecommerce",
    description:
      "หน้าร้านออนไลน์แบบ Responsive รองรับการกรองสินค้า จัดการตะกร้า และขั้นตอนชำระเงิน",
    tech: [" Frontend: HTML, CSS, JavaScript, Bootstrap/Tailwind Backend PHP, Node.js Database MySQL, MongoDB"],
    github: "https://github.com/JirasakPPTP/Furniture_ecommerce.git",
    demo: "https://furniture-ecommerce-frontend-theta.vercel.app/",
  },
  {
    title: "Realitime_chat",
    description:
      "แอปเกี่ยวกับการพูดคุยเเละสามารถติดต่อกันได้",
    tech: ["Frontend: HTML, CSS, JavaScript, Bootstrap/Tailwind Backend PHP, Node.js Database MySQL, MongoDB"],
    github: "https://github.com/JirasakPPTP/Realitime_chat",
    demo: "https://realitime-chat.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-14" aria-labelledby="projects-heading">
      <SectionTitle
        title="ผลงาน"
        subtitle="ตัวอย่างผลงานล่าสุด พร้อมลิงก์ซอร์สโค้ดและเดโมสำหรับทดลองใช้งาน"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
