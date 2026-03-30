const navLinks = [
  { href: "#home", label: "หน้าแรก" },
  { href: "#about", label: "เกี่ยวกับ" },
  { href: "#skills", label: "ทักษะ" },
  { href: "#projects", label: "ผลงาน" },
  { href: "#contact", label: "ติดต่อ" },
];

function Navbar() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur"
      aria-label="Primary"
    >
      <nav className="mx-auto flex min-h-[72px] w-[92%] max-w-6xl flex-wrap items-center justify-between gap-3 py-3">
        <a
          className="text-lg font-bold tracking-wide text-slate-900"
          href="#home"
          aria-label="Go to home section"
        >
         JIRASAK PRATHOMPHAT
        </a>

        <ul className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600 sm:text-base" aria-label="Section links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-sky-700 focus-visible:text-sky-700" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
