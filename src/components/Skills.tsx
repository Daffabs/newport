import { Code, Layers, Sparkles, Check } from "lucide-react";

interface SkillCategory {
  title: string;
  subtitle: string;
  items: { name: string; tag: string; level?: string }[];
}

const technicalSkills = [
  { name: "HTML & CSS", tag: "Frontend Tech", level: "Advanced" },
  { name: "PHP", tag: "Backend Tech", level: "Intermediate" },
  { name: "Next.js", tag: "React Framework", level: "Intermediate" },
  { name: "Tailwind CSS", tag: "CSS Framework", level: "Advanced" },
  { name: "SQL & Relational DB", tag: "Database", level: "Intermediate" },
  { name: "Figma", tag: "UI/UX & Prototyping", level: "Intermediate" },
  { name: "Flowchart & Process", tag: "System Modeling", level: "Advanced" },
  { name: "ERD & DFD", tag: "Data & System Architecture", level: "Advanced" },
  { name: "BPMN", tag: "Business Process Modeling", level: "Intermediate" },
  { name: "Playwright", tag: "QA Automation", level: "Intermediate" },
  { name: "Draw.io", tag: "Diagramming Tool", level: "Advanced" },
  { name: "Test Case & Bug Reporting", tag: "QA Methodology", level: "Advanced" },
];

const interests = [
  { name: "Quality Assurance", desc: "Memastikan kualitas aplikasi melalui pengujian fungsional, penyusunan test case, pelaporan bug, serta pelaksanaan User Acceptance Testing (UAT)." },
    { name: "System Analyst", desc: "Menganalisis kebutuhan sistem, menyusun Software Requirements Specification (SRS), serta merancang alur dan solusi sistem yang efektif." },
  { name: "IT Business Analyst", desc: "Menganalisis kebutuhan bisnis, menyelaraskannya dengan kebutuhan sistem, dan memodelkan proses bisnis menggunakan BPMN." },
  // { name: "UI/UX Specialist", desc: "Merancang wireframe, user flow, dan antarmuka aplikasi yang berorientasi pengguna." },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-slate-700 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Keahlian & Spesialisasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Keahlian & <span className="text-gradient">Spesialisasi</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] rounded-full mt-4" />
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#38BDF8]" /> Keahlian Teknis & Teknologi:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-[#1E293B]/70 border border-slate-700/70 rounded-2xl p-4 backdrop-blur-sm hover:border-[#38BDF8] hover:bg-[#1E293B] hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] group-hover:scale-150 transition-transform" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#2DD4BF] bg-[#0F172A] px-2 py-0.5 rounded border border-slate-700">
                    {skill.level}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                  {skill.name}
                </h4>
                <p className="text-[11px] text-[#94A3B8] mt-1">
                  {skill.tag}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Interest / Specialization Cards */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#2DD4BF]" /> Minat & Fokus Peran (Areas of Focus):
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((role) => (
              <div
                key={role.name}
                className="bg-[#1E293B]/70 border border-slate-700/70 rounded-2xl p-6 hover:border-[#2DD4BF]/60 hover:bg-[#1E293B] hover:shadow-[0_8px_25px_rgba(45,212,191,0.15)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/30 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {role.name}
                  </h4>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
