import {
  FolderKanban,
  CheckCircle2,
  Landmark,
  Zap,
  Building2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Check,
} from "lucide-react";

interface QAProjectCategory {
  title: string;
  category: string;
  projectCount: string;
  countNumber: number;
  icon: typeof Landmark;
  color: "cyan" | "teal" | "blue";
  mainPoint: string;
  description: string;
  tags: string[];
}

const qaProjects: QAProjectCategory[] = [
  {
    title: "ESDM",
    category: "Website Instansi Pemerintahan",
    projectCount: "6 Proyek",
    countNumber: 6,
    icon: Landmark,
    color: "cyan",
    mainPoint: "Pengujian pada 6 proyek website pemerintahan",
    description:
      "Pengujian kualitas perangkat lunak untuk portal dan sistem layanan publik Kementerian Energi dan Sumber Daya Mineral (ESDM).",
    tags: ["Website Instansi Pemerintahan", "Manual Testing", "Test Case Execution", "Bug Retesting"],
  },
  {
    title: "PLN",
    category: "Website Instansi Pemerintahan",
    projectCount: "3 Proyek",
    countNumber: 3,
    icon: Zap,
    color: "teal",
    mainPoint: "Pengujian pada 3 proyek website dan aplikasi.",
    description:
      "Pengujian komprehensif pada ekosistem platform digital PT Perusahaan Listrik Negara (Persero) mencakup web dan mobile.",
    tags: ["Instansi BUMN / Pemerintahan", "Web & Aplikasi", "Functional Testing", "UAT Support"],
  },
  {
    title: "Perusahaan Swasta",
    category: "Website & Sistem Informasi",
    projectCount: "22 Proyek",
    countNumber: 22,
    icon: Building2,
    color: "blue",
    mainPoint: "Pengujian pada 22 proyek website perusahaan swasta.",
    description:
      "Pengujian menyeluruh pada puluhan produk digital korporasi, portal bisnis, dan sistem informasi manajemen perusahaan swasta.",
    tags: ["Website & Sistem Informasi", "Cross-Browser QA", "End-to-End Testing", "Quality Control"],
  },
];

export default function QAProjects() {
  return (
    <section id="qa-projects" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-slate-700 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Portofolio Pengujian</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            PENGALAMAN PROYEK <span className="text-gradient">QA (QUALITY ASSURANCE)</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] rounded-full mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl text-center leading-relaxed">
            Rekam jejak pengujian perangkat lunak pada berbagai platform instansi pemerintahan dan perusahaan swasta untuk menjamin kestabilan, fungsionalitas, serta kualitas sistem terbaik.
          </p>

          {/* Aggregate Summary Badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            <div className="bg-[#121824] border border-slate-700/80 rounded-2xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8] block">31+</span>
              <span className="text-xs text-[#94A3B8] font-medium">Total Proyek Teruji</span>
            </div>
            <div className="bg-[#121824] border border-slate-700/80 rounded-2xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#2DD4BF] block">9 Proyek</span>
              <span className="text-xs text-[#94A3B8] font-medium">Instansi Pemerintahan (ESDM & PLN)</span>
            </div>
            <div className="bg-[#121824] border border-slate-700/80 rounded-2xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 block">22 Proyek</span>
              <span className="text-xs text-[#94A3B8] font-medium">Website Perusahaan Swasta</span>
            </div>
          </div>
        </div>

        {/* 3 Main QA Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {qaProjects.map((item, idx) => {
            const Icon = item.icon;
            const isCyan = item.color === "cyan";
            const isTeal = item.color === "teal";

            return (
              <div
                key={idx}
                className="group relative bg-[#121824] border border-slate-700/80 rounded-3xl p-6 sm:p-7 backdrop-blur-md hover:border-[#38BDF8]/60 hover:shadow-[0_10px_35px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Project Count Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${
                        isCyan
                          ? "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                          : isTeal
                          ? "bg-[#2DD4BF]/10 text-[#2DD4BF] border-[#2DD4BF]/30 shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                          : "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black border border-slate-700 text-xs font-bold text-white shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{item.projectCount}</span>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-semibold text-[#94A3B8] mt-1 mb-4">
                    {item.category}
                  </p>

                  {/* Primary Highlight Box matching user spec */}
                  <div className="bg-[#161F30]/70 border border-[#38BDF8]/20 rounded-2xl p-3.5 mb-5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#38BDF8] mt-1.5 shrink-0" />
                      <p className="text-sm font-semibold text-white leading-relaxed">
                        {item.mainPoint}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
