"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/tasks", label: "Daftar Task" },
  { href: "/tasks/new", label: "Tambah Task" },
];

function isActive(pathname: string, href: string) {
  if (href === "/tasks") {
    return (
      pathname === "/tasks" ||
      (pathname.startsWith("/tasks/") && pathname !== "/tasks/new")
    );
  }
  return pathname === href;
}

export default function AppNav() {
  const pathname = usePathname();

  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link href="/tasks" className="app-brand">
          <span className="app-brand__icon">TB</span>
          <span className="app-brand__text">TaskBoard</span>
        </Link>

        <nav className="app-nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`app-nav__link${
                isActive(pathname, item.href) ? " app-nav__link--active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
