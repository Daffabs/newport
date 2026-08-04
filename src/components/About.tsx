import { User, CheckCircle2, Award, Users, Target, Brain } from "lucide-react";

const softSkills = [
  "Komunikasi",
  "Problem Solving",
  "Kepemimpinan",
  "Adaptif",
  "Pemikiran Kritis",
  "Kerjasama Tim",
];

const highlights = [
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    desc: "Memastikan fungsionalitas dan performa aplikasi web & mobile bebas bug melalui Test Case, Bug Reporting, dan melakukan User Acceptance Testing.",
  },
  {
    icon: Target,
    title: "System Analyst",
    desc: "Menganalisis kebutuhan sistem, menyusun SRS, membuat flowchart, dan merancang solusi sebelum tahap pengembangan.",
  },
  {
    icon: Users,
    title: "IT Business Analyst",
    desc: "Menganalisis proses bisnis, mengidentifikasi kebutuhan pengguna, dan memodelkan proses bisnis menggunakan BPMN.",
  },
  {
    icon: Brain,
    title: "Leadership",
    desc: "Mampu memimpin tim, mengoordinasikan pekerjaan, dan mendorong kolaborasi untuk mencapai tujuan bersama.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-slate-700 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Profil & <span className="text-gradient">Keahlian</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Detailed Summary Card */}
          <div className="lg:col-span-7 bg-[#1E293B]/70 border border-slate-700/70 rounded-3xl p-5 sm:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-[#38BDF8]/40 transition-all duration-300">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center text-sm font-bold border border-[#38BDF8]/20 shrink-0">
                  DBS
                </span>
                <span>Siapa Daffa Bagus Syach Putra?</span>
              </h3>
              
              <div className="space-y-4 text-[#94A3B8] leading-relaxed text-sm sm:text-base">
                <p>
                  Memiliki latar belakang di bidang Teknik Informatika dengan fokus pada <strong className="text-white">Quality Assurance</strong> dan <strong className="text-white">System Analysis</strong>. Berpengalaman dalam menyusun Test Case, melaksanakan manual testing pada aplikasi web dan mobile, mendokumentasikan Bug Report, serta mendukung proses User Acceptance Testing (UAT) untuk memastikan kualitas perangkat lunak sesuai kebutuhan bisnis.
                </p>
                <p>
                  Memiliki kemampuan dalam menganalisis kebutuhan pengguna dan menerjemahkannya menjadi spesifikasi sistem melalui pemodelan Flowchart dan Business Process Model and Notation (BPMN). Didukung dengan pengalaman organisasi sebagai Kepala Divisi Pengembangan Aparatur Organisasi (PAO) HIMA Teknik Informatika UNIKOM, yang membentuk kemampuan kepemimpinan, komunikasi, kolaborasi, dan manajemen tim.
                </p>
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#2DD4BF]" /> Keterampilan Personal:
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-[#0F172A] border border-[#38BDF8]/40 text-xs font-bold text-[#F1F5F9] hover:border-[#2DD4BF] hover:text-[#2DD4BF] hover:shadow-[0_0_15px_rgba(45,212,191,0.25)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1E293B]/60 border border-slate-700/60 rounded-2xl p-5 hover:border-[#38BDF8]/50 hover:bg-[#1E293B] hover:shadow-[0_8px_25px_rgba(56,189,248,0.1)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#2DD4BF]/20 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {item.desc}
                    </p>
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
