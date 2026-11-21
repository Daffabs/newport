"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  status: string;
  type: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "PT Artristik Studio Bandung",
    role: "Quality Assurance",
    period: "Sep 2025 – Sekarang",
    location: "Bandung, Indonesia",
    status: "Present Role",
    type: "Full-time",
    highlights: [
      "Menyusun dan menjalankan test case berdasarkan kebutuhan dan spesifikasi sistem.",
      "Melakukan pengujian manual pada aplikasi web dan mobile untuk mengidentifikasi bug, error, serta ketidaksesuaian fungsionalitas.",
      "Mendokumentasikan dan melaporkan bug secara terstruktur, serta melakukan verifikasi perbaikan dan retesting bersama tim pengembang.",
      "Menyusun dan menjalankan skenario User Acceptance Testing (UAT) untuk memastikan aplikasi sesuai dengan kebutuhan pengguna.",
      "Melakukan analisis kebutuhan, menyusun dokumen Software Requirements Specification (SRS), serta dokumentasi teknis sistem.",
      "Memberikan masukan terkait kualitas, fungsionalitas, dan UI/UX aplikasi serta memantau progres pekerjaan melalui aplikasi manajemen tugas internal.",
    ],
    skills: ["Quality Assurance", "Test Case Creation", "Bug Reporting", "UAT", "Web & Mobile QA"],
  },
  {
    company: "CV Indojasa Konsultan",
    role: "Freelance Frontend Developer",
    period: "Feb 2025 – Apr 2025",
    location: "Remote",
    status: "Completed",
    type: "Freelance",
    highlights: [
      "Mengembangkan antarmuka pengguna (UI) dashboard admin yang responsif dan intuitif.",
      "Merancang landing page company profile modern dengan fokus pada kecepatan performa dan pengalaman pengguna (UX).",
      "Melakukan pengujian tampilan lintas browser (cross-browser compatibility) dan optimasi responsif layout.",
    ],
    skills: ["Frontend Development", "UI/UX Implementation", "Dashboard Design", "Responsive Layout"],
  },
  {
    company: "Perdana Photo Group",
    role: "Intern Fullstack Developer",
    period: "Agu 2023 – Sep 2024",
    location: "Bandung, Indonesia",
    status: "Completed",
    type: "Internship",
    highlights: [
      "Mengembangkan Sistem Penilaian Kinerja Karyawan berbasis web menggunakan metode perhitungan Profile Matching.",
      "Melakukan analisis kebutuhan sistem, merancangkan alur logika pemodelan DFD dan ERD database.",
      "Melakukan pengujian pengoperasian sistem dan pengujian komputasi akurasi penilaian variabel kinerja.",
    ],
    skills: ["Fullstack Development", "Profile Matching", "System Analysis", "Database Design (ERD)"],
  },
  {
    company: "Palang Merah Indonesia (PMI) Kota Bandung",
    role: "Intern Frontend Developer",
    period: "Jul 2023 – Sep 2023",
    location: "Bandung, Indonesia",
    status: "Completed",
    type: "Internship",
    highlights: [
      "Melakukan redesign antarmuka website resmi PMI Kota Bandung agar lebih modern, accessible, dan responsif.",
      "Meningkatkan struktur navigasi informasi donor darah dan kegiatan sosial PMI untuk kenyamanan publik.",
    ],
    skills: ["Website Redesign", "UI/UX Design", "HTML/CSS", "Public Portal UX"],
  },
];

export default function Experience() {
  // State to track which cards are expanded. Default: first card open [0]
  const [openCards, setOpenCards] = useState<number[]>([0]);

  const toggleCard = (index: number) => {
    if (openCards.includes(index)) {
      setOpenCards(openCards.filter((i) => i !== index));
    } else {
      setOpenCards([...openCards, index]);
    }
  };

  const expandAll = () => setOpenCards([0, 1, 2, 3]);
  const collapseAll = () => setOpenCards([]);

  return (
    <section id="experience" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-slate-700 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Pengalaman Kerja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perjalanan <span className="text-gradient">Karir Professional</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] rounded-full mt-4 mb-6" />

          {/* Quick Expand / Collapse Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={expandAll}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1E293B] border border-slate-700 text-[#38BDF8] hover:border-[#38BDF8] transition-colors"
            >
              Buka Semua Card
            </button>
            <button
              onClick={collapseAll}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1E293B] border border-slate-700 text-[#94A3B8] hover:text-white transition-colors"
            >
              Tutup Semua
            </button>
          </div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Continuous Glowing Accent Line connecting timeline items */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#38BDF8] via-[#3B82F6] to-[#2DD4BF] rounded-full shadow-[0_0_15px_rgba(56,189,248,0.4)] hidden sm:block" />
          <div className="absolute left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-[#38BDF8] via-[#3B82F6] to-[#2DD4BF] rounded-full sm:hidden" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const isOpen = openCards.includes(idx);
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Center Node Badge */}
                  <button
                    onClick={() => toggleCard(idx)}
                    title="Toggle detail pengalamaan"
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 z-20 flex items-center justify-center group cursor-pointer"
                  >
                    <div className={`w-9 h-9 rounded-full bg-black border-2 transition-all duration-300 flex items-center justify-center ${
                      isOpen
                        ? "border-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.8)] text-[#38BDF8] scale-110"
                        : "border-slate-600 text-slate-400 group-hover:border-[#38BDF8]"
                    }`}>
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Card Container */}
                  <div className="pl-10 sm:pl-0 w-full sm:w-1/2 sm:px-8">
                    <div className="bg-[#121824] border border-slate-700/80 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-[#38BDF8]/60 transition-all duration-300 shadow-xl">
                      
                      {/* Card Header (Clickable to Toggle) */}
                      <button
                        onClick={() => toggleCard(idx)}
                        className="w-full text-left p-5 flex items-start justify-between gap-3 bg-[#161F30]/60 hover:bg-[#1E293B] transition-colors cursor-pointer"
                      >
                        <div className="space-y-1 pr-2">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="px-2.5 py-0.5 rounded-md bg-black border border-[#38BDF8]/40 text-xs font-bold text-[#38BDF8]">
                              {exp.role}
                            </span>
                            <span className="text-xs text-[#2DD4BF] font-medium flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {exp.period}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-white leading-snug">
                            {exp.company}
                          </h3>

                          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-slate-500" /> {exp.location}
                            </span>
                            <span>•</span>
                            <span>{exp.type}</span>
                          </div>
                        </div>

                        {/* Open / Close Toggle Chevron Icon */}
                        <div className={`p-2 rounded-xl bg-black/60 border border-slate-700 text-[#38BDF8] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-[#38BDF8]/10 border-[#38BDF8]" : ""
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Collapsible Content Body */}
                      {isOpen && (
                        <div className="p-5 border-t border-slate-800/80 bg-[#121824] animate-in fade-in slide-in-from-top-2 duration-200">
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                            Tanggung Jawab & Hasil Pengujian:
                          </h4>
                          
                          <ul className="space-y-2 mb-5">
                            {exp.highlights.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                                <ChevronRight className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                                <span className="leading-snug text-slate-300">{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Skill Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-1 rounded-md bg-black text-[11px] font-medium text-[#38BDF8] border border-slate-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
