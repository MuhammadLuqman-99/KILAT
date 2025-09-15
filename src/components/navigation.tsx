"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Laman Utama", href: "/" },
  { name: "Demo", href: "/demo" },
  { name: "E-book", href: "/ebooks" },
  { name: "Prompts", href: "/prompts" },
  {
    name: "Berita",
    href: "#",
    dropdown: [
      { name: "Berita AI", href: "/news" },
      { name: "AI Malaysia", href: "/ai-malaysia" }
    ]
  },
  { name: "Tentang Kami", href: "/about" },
  { name: "Hubungi", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">⚡</span>
              </div>
              <span className="font-semibold text-lg">KILAT</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(item.name)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      <button
                        className={`text-sm font-medium transition-colors hover:text-accent flex items-center ${
                          item.dropdown.some(subItem => pathname === subItem.href)
                            ? "text-accent"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.name}
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {dropdownOpen === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                          <div className="py-1">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                                  pathname === subItem.href
                                    ? "text-accent bg-accent/10"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-accent ${
                        pathname === item.href
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <div className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                              pathname === subItem.href
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                        pathname === item.href
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}