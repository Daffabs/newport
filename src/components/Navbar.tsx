"use client";

import { useState, useEffect } from "react";
import { Menu, X, Send, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "QA Projects", href: "#qa-projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F172A]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#38BDF8] to-[#2DD4BF] p-[1.5px] flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0F172A] rounded-[7px] flex items-center justify-center">
                <span className="text-[#38BDF8] font-mono font-bold text-sm">DBS</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="leading-tight group-hover:text-[#38BDF8] transition-colors">
                Daffa Bagus S.
              </span>
              <span className="text-[10px] font-normal text-[#94A3B8] tracking-widest uppercase">
                QA & Systems Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1E293B]/70 border border-slate-700/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#38BDF8] bg-slate-800 shadow-sm border border-slate-700/60 font-semibold"
                      : "text-[#94A3B8] hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Contact CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] text-[#0F172A] text-xs font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Hubungi Saya</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggler */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-lg bg-[#1E293B] border border-slate-700 text-[#94A3B8] hover:text-white hover:border-[#38BDF8] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 bg-[#1E293B]/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-4 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeSection === item.href.substring(1)
                  ? "text-[#38BDF8] bg-slate-800/80 border border-slate-700"
                  : "text-[#94A3B8] hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.href.substring(1) && (
                <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              )}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] text-[#0F172A] font-bold text-sm shadow-lg shadow-[#38BDF8]/20"
            >
              <Send className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
