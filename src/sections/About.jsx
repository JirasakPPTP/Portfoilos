import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Profile from "../assets/profile.jpg";

function About() {
  const [profileSrc, setProfileSrc] = useState("/profile.jpg");
  const resumeLink = "/resume.jpg";

  const highlights = [
    "พัฒนาเว็บแอปด้วย React และ JavaScript เป็นหลัก",
    "ออกแบบโครงสร้างคอมโพเนนต์ให้ขยายระบบต่อได้ง่าย",
    "ปรับปรุง และประสิทธิภาพหน้าเว็บให้โหลดไวขึ้น",
  ];

  const workInfo = [
    { label: "ตำแหน่ง", value: "Frontend Developer" },
    { label: "ประสบการณ์", value: "เคยทำงานพาร์ทไทม์ Chaveevan Group" },
    { label: "รูปแบบงาน", value: "Web Application / Landing Page" },
  ];

  return (
    <section id="about" className="scroll-mt-28 py-14" aria-labelledby="about-heading">
      <SectionTitle
        title="แนะนำตัว"
        subtitle="ข้อมูลส่วนตัวด้านการทำงานและแนวทางการพัฒนาเว็บ"
      />

      <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[200px,1fr] sm:p-7">
        <div className="flex justify-center sm:justify-start">
          <img
            src={Profile}
            alt="รูปโปรไฟล์"
            className="h-auto w-full max-w-[180px] rounded-2xl border border-slate-200 bg-slate-100 object-contain shadow-sm"
            onError={() => setProfileSrc("/profile-avatar.svg")}
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">Jirasak Prathomphat</h3>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">KEN</h3>
              <p className="mt-2 text-base font-medium text-sky-700">Frontend Developer</p>
            </div>

            <div>
              <a
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                ดู Resume
              </a>
            </div>
          </div>

          <p id="about-heading" className="mt-6 text-slate-700">
            กำลังมองหาโอกาสฝึกงานด้าน Web Development มีประสบการณ์พัฒนาเว็บแอปพลิเคชันด้วย HTML, CSS, JavaScript, PHP และ MySQL โดยสามารถพัฒนาระบบ เช่น ระบบ Login/Register, Shopping Cart และระบบจัดการหลังบ้าน (Admin Panel)
          </p>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr,0.95fr]">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {workInfo.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <ul className="space-y-2 text-slate-700">
                {highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-600" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
