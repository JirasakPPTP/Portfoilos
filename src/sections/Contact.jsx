import React, { useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"

function Contact() {
  const form = useRef();
  const contactDetails = [
    { label: "เบอร์โทร", value: "061 491 9820", href: "tel:0614919820" },
    { label: "ไลน์", value: "@0614919820" },
    { label: "เฟซบุ๊ก", value: "Jirasak Prathomphat" },
    { label: "อีเมล", value: "jirasakpptp@gmail.com", href: "mailto:jirasakpptp@gmail.com" },
    { label: "ที่อยู่", value: "511/8 หมู่ 3 ต.หนองขาม อ.ศรีราชา จ.ชลบุรี" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tihykk4",
        "template_m40duxc",
        form.current,
        "foo4cWTFKOcusa361"
      )
      .then(() => {
        toast.success('ส่งข้อความสำเร็จ')
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error('ส่งข้อความไม่สำเร็จ')
      });
  }
  return (
    <section id="contact" className="scroll-mt-28 py-14" aria-labelledby="contact-heading">
      <div className="max-w-3xl">
        <SectionTitle
          title="ติดต่อ"
          subtitle="ส่งข้อความหาผมได้โดยตรงจากฟอร์มนี้ โดยไม่ต้องยืนยันอีเมลซ้ำทุกครั้ง"
        />

        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
          <h3 className="mb-4 border-b border-slate-200 pb-3 text-2xl font-bold">ข้อมูลการติดต่อ</h3>
          <div className="space-y-3">
            {contactDetails.map((item) => (
              <div key={item.label} className="sm:grid sm:grid-cols-[120px_1fr] sm:gap-4">
                <p className="font-bold">{item.label}</p>
                {item.href ? (
                  <a className="text-slate-700 transition hover:text-sky-700" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-700">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <div>
            <label className="text-sm text-black-400 font-bold">ชื่อของคุณ</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full mt-2 p-3 rounded-lg bg-white border border-white/10 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-black-400 font-bold">อีเมล</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full mt-2 p-3 rounded-lg bg-white border border-white/10 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-black-400 font-bold">ข้อความ</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full mt-2 p-3 rounded-lg bg-white border border-white/10 focus:outline-none focus:border-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-white-500 to-blue-500 hover:opacity-90 transition font-semibold"
          >
            ส่งข้อความ
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;
