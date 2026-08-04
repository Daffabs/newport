import { Users, Calendar, ChevronRight } from "lucide-react";

interface OrgRole {
  title: string;
  org: string;
  period: string;
  status: string;
  duties: string[];
}

const orgRoles: OrgRole[] = [
  {
    title: "Kepala Divisi Pengembangan Aparatur Organisasi (PAO)",
    org: "HIMA Teknik Informatika UNIKOM",
    period: "Nov 2022 – Nov 2023",
    status: "Executive Leadership",
    duties: [
      "Memimpin dan merencanakan seluruh program kerja divisi dalam pengembangan kapasitas, kaderisasi, serta evaluasi aparatur organisasi.",
      "Mengkoordinasikan pelatihan kepemimpinan, team building, dan manajemen sumber daya manusia bagi mahasiswa Teknik Informatika.",
      "Bertanggung jawab langsung kepada Ketua Himpunan atas kinerja dan soliditas pengurus HIMA IF UNIKOM.",
    ],
  },
  {
    title: "Angkatan Muda Divisi Pengembangan Aparatur Organisasi",
    org: "HIMA Teknik Informatika UNIKOM",
    period: "Nov 2021 – Nov 2022",
    status: "Junior Staff",
    duties: [
      "Mengorganisir pelaksanaan acara-acara pengkaderan dan kaderisasi mahasiswa baru Teknik Informatika.",
      "Membantu pelaksanaan survey kepuasan serta evaluasi berkala kinerja divisi internal Himpunan.",
    ],
  },
];

export default function Organization() {
  return (
    <section id="organization" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-slate-700 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Kepemimpinan & Komunitas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman <span className="text-gradient">Organisasi</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] rounded-full mt-4" />
        </div>

        {/* Organization Cards Container (Side-by-side 2 column grid on desktop/tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          {orgRoles.map((role, idx) => (
            <div
              key={idx}
              className="bg-[#121824] border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md hover:border-[#38BDF8]/60 hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-black border border-[#38BDF8]/40 text-xs font-bold text-[#38BDF8]">
                    {role.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] bg-black px-3 py-1 rounded-xl border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{role.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-1">
                  {role.title}
                </h3>
                <p className="text-sm font-semibold text-[#2DD4BF] mb-4">
                  {role.org}
                </p>

                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Tanggung Jawab Utama:
                  </h4>
                  <ul className="space-y-2.5">
                    {role.duties.map((duty, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                        <ChevronRight className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-slate-300">{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
