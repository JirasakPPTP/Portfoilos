import React, { useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"

function Contact() {
  const form = useRef();

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
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 hover:opacity-90 transition font-semibold"
          >
            ส่งข้อความ
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;
