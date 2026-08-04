import Image from "next/image";
import { Mail, ArrowRight, ShieldCheck, FileCheck2, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center"
    >
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#2DD4BF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information & Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-slate-700/80 mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38BDF8]"></span>
              </span>
              <span className="text-xs font-semibold text-[#38BDF8] tracking-wide">
                Terbuka untuk Peluang Profesional
              </span>
            </div>

            {/* Big Main Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Daffa Bagus <br />
              <span className="text-gradient">Syach Putra</span>
            </h1>

            {/* Accent Tagline */}
            <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-[#38BDF8] tracking-wide mb-5 flex flex-wrap items-center gap-2">
              <span>Quality Assurance</span>
              <span className="text-slate-600">•</span>
              <span className="text-blue-400">System Analyst</span>
            </h2>

            {/* Concise Profile Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mb-8 leading-relaxed">
Berfokus pada Quality Assurance, System Analysis, serta pemodelan proses bisnis menggunakan Flowchart dan BPMN. Memiliki kemampuan dalam analisis kebutuhan, penyusunan dokumentasi sistem, dan pengujian aplikasi untuk memastikan kualitas perangkat lunak sesuai kebutuhan bisnis.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] text-[#0F172A] font-extrabold text-sm shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Hubungi Saya</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E293B] border border-slate-700/80 text-[#F1F5F9] font-bold text-sm hover:border-[#38BDF8] hover:text-[#38BDF8] hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Hubungi Saya</span>
              </a> */}
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center gap-4 pt-2 border-t border-slate-800/80 w-full">
              <span className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                Sosial & Kontak:
              </span>

              <a
                href="https://linkedin.com/in/daffa-bagus-syach-putra"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-[#1E293B] border border-slate-700 text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF8] hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
              </a>

              <a
                href="mailto:daffabs2001@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-[#1E293B] border border-slate-700 text-slate-300 hover:text-[#2DD4BF] hover:border-[#2DD4BF] hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Right Column: Formal Profile Picture Representation */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group">
              {/* Outer Neon Glow Circle */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#2DD4BF] opacity-75 blur-xl group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />
              
              {/* Main Avatar Card Frame */}
              <div className="relative rounded-3xl p-2.5 bg-[#1E293B] border border-slate-700 shadow-2xl max-w-[340px] sm:max-w-[380px]">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-[#0F172A] border border-slate-700/60 flex flex-col items-center justify-center text-center p-6">
                  
                  {/* Formal Stylized Avatar Graphic */}
                  <div className="relative w-42 h-42 rounded-full bg-gradient-to-tr from-[#38BDF8]/20 to-[#2DD4BF]/20 p-1 border-2 border-[#38BDF8]/50 shadow-[0_0_30px_rgba(56,189,248,0.3)] mb-4 flex items-center justify-center">
                    <Image
                      src="/profile3.jpeg"
                      alt="Daffa Bagus Syach Putra"
                      width={144}
                      height={144}
                      className="w-full h-full rounded-full object-cover shadow-inner"
                      priority
                    />
                    {/* Badge Icon */}
                    <div className="absolute bottom-0 right-0 p-2 rounded-full bg-[#38BDF8] text-[#0F172A] shadow-lg">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Profile Card Summary Text */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    Daffa Bagus Syach Putra
                  </h3>
                  {/* <p className="text-xs font-semibold text-[#38BDF8] mb-3">
                    S1 Teknik Informatika (UNIKOM)
                  </p> */}
                  
                  {/* Skill Badges inside Card */}
                  <div className="flex flex-wrap justify-center gap-1.5 w-full pt-3 border-t border-slate-800">
                    <span className="px-2.5 py-1 rounded-md bg-[#0F172A] border border-slate-700 text-[11px] text-[#94A3B8] flex items-center gap-1">
                      <FileCheck2 className="w-3 h-3 text-[#38BDF8]" /> Quality Assurance
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#0F172A] border border-slate-700 text-[11px] text-[#94A3B8] flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-[#2DD4BF]" /> System Analyst
                    </span>
                  </div>
                </div>

                {/* Floating Floating Pill 1 */}
                <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-[#1E293B]/90 backdrop-blur-md border border-[#38BDF8]/40 shadow-xl flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#38BDF8] animate-ping" />
                  <span className="text-xs font-bold text-white">Quality Assurance</span>
                </div>

                {/* Floating Floating Pill 2 */}
                {/* <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-[#1E293B]/90 backdrop-blur-md border border-[#2DD4BF]/40 shadow-xl flex items-center gap-2">
                  <span className="text-xs font-bold text-[#2DD4BF]">DFD • ERD • Flowchart</span>
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
