import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Profile from "../assets/66703889.jpg"
function About() {
  const [profileSrc, setProfileSrc] = useState("/profile.jpg");

  const highlights = [
    "พัฒนาเว็บแอปด้วย React และ JavaScript เป็นหลัก",
    "ออกแบบโครงสร้างคอมโพเนนต์ให้ขยายระบบต่อได้ง่าย",
    "ปรับปรุง UI/UX และประสิทธิภาพหน้าเว็บให้โหลดไวขึ้น",
  ];

  const workInfo = [
    { label: "ตำแหน่ง", value: "Frontend Developer" },
    { label: "ประสบการณ์", value: "กำลังศึกษาฝึกงาน" },
    { label: "รูปแบบงาน", value: "Web Application / Landing Page" },
  ];

  return (
    <section id="about" className="scroll-mt-28 py-14" aria-labelledby="about-heading">
      <SectionTitle
        title="เกี่ยวกับฉัน"
        subtitle="ข้อมูลส่วนตัวด้านการทำงานและแนวทางการพัฒนาเว็บ"
      />
      <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[220px,1fr] sm:p-7">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <img
            src={Profile}
            alt="รูปโปรไฟล์"
            className="h-40 w-40 rounded-2xl border border-slate-200 bg-slate-100 object-cover shadow-sm"
            onError={() => setProfileSrc("/profile-avatar.svg")}
          />
          <h3 className="mt-4 text-xl font-bold text-slate-900">Jirasak Prathomphat</h3>
          <p className="text-sm font-medium text-sky-700">Frontend Developer</p>
        </div>

        <div>
          <p id="about-heading" className="text-slate-700">
            ผมเป็นนักพัฒนาเว็บที่เน้นการสร้างประสบการณ์ใช้งานที่ชัดเจน ใช้ง่าย และรองรับการเติบโตของระบบในระยะยาว
            โดยทำงานร่วมกับทีมเพื่อเปลี่ยนความต้องการทางธุรกิจให้กลายเป็นหน้าเว็บที่มีคุณภาพและดูแลต่อได้ง่าย
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {workInfo.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{item.value}</p>
              </div>
            ))}
          </div>

          <ul className="mt-5 space-y-2 text-slate-700">
            {highlights.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-600" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
