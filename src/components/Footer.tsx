import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070A12] py-8 border-t border-slate-800/80 text-xs text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Branding */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-tr from-[#38BDF8] to-[#2DD4BF] p-[1px] flex items-center justify-center">
            {/* <div className="w-full h-full bg-[#0F172A] rounded-[3px] flex items-center justify-center">
              <span className="text-[#38BDF8] font-mono font-bold text-[10px]">DBS</span>
            </div> */}
          </div>
          <span className="text-white font-bold">Daffa Bagus Syach Putra</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="hidden sm:inline text-slate-400">QA & System Analyst</span>
        </div>

        {/* Center Copyright */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Daffa Bagus Syach Putra. All Rights Reserved.
        </p>

        {/* Right Scroll Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/daffa-bagus-syach-putra"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-lg bg-[#1E293B] hover:text-[#38BDF8] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
            </svg>
          </a>
          <a
            href="mailto:daffabs2001@gmail.com"
            className="p-1.5 rounded-lg bg-[#1E293B] hover:text-[#2DD4BF] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#hero"
            aria-label="Scroll to top"
            className="p-1.5 rounded-lg bg-[#1E293B] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0F172A] transition-all ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
