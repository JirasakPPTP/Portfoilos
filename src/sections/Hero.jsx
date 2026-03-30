function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-28 pb-12 pt-36 sm:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
          นักพัฒนา Frontend
        </p>
        <h1
          id="hero-heading"
          className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl"
        >
          ประสบการณ์เว็บไซต์
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          พัฒนาอินเทอร์เฟซที่ใช้งานง่าย เน้นประสิทธิภาพ และออกแบบโครงสร้าง
          คอมโพเนนต์ให้ขยายต่อได้ในระยะยาว
        </p>
        <a
          className="mt-7 inline-flex rounded-xl bg-sky-700 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-800"
          href="#projects"
        >
          ดูผลงาน
        </a>
      </div>
    </section>
  );
}

export default Hero;
