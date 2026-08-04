import { Award, ShieldCheck, CheckCircle, ExternalLink } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  desc: string;
  color: "cyan" | "teal" | "blue";
}

const certificates: Certificate[] = [
  {
    title: "Junior Web Programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "2024",
    badge: "Sertifikasi Kompetensi Nasional",
    desc: "Sertifikasi kompetensi resmi dalam standar pemrograman web nasional, mencakup algoritma, pemrograman terstruktur, dan analisis kode.",
    color: "cyan",
  },
  {
    title: "Cisco CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Feb 2023",
    badge: "Networking Fundamental",
    desc: "Pemahaman arsitektur jaringan, protokol komunikasi data, IPv4/IPv6 sub-netting, ethernet switching, dan security fundamentals.",
    color: "teal",
  },
  {
    title: "Cisco CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "Agu 2023",
    badge: "Switching & Routing",
    desc: "Keahlian dalam mengonfigurasi VLAN, WLAN, Inter-VLAN routing, STP, DHCP, EtherChannel, dan arsitektur perangkat keras jaringan.",
    color: "blue",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-slate-700 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Lisensi & Sertifikasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sertifikat <span className="text-gradient">Professional</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] rounded-full mt-4" />
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => {
            const isCyan = cert.color === "cyan";
            const isTeal = cert.color === "teal";

            return (
              <div
                key={idx}
                className="group relative bg-[#1E293B]/70 border border-slate-700/70 rounded-2xl p-5 sm:p-6 backdrop-blur-sm hover:border-[#38BDF8] hover:bg-[#1E293B] hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      isCyan
                        ? "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/30"
                        : isTeal
                        ? "bg-[#2DD4BF]/10 text-[#2DD4BF] border-[#2DD4BF]/30"
                        : "bg-blue-500/10 text-blue-400 border-blue-500/30"
                    }`}>
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#94A3B8] bg-[#0F172A] px-2.5 py-1 rounded-full border border-slate-800">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#38BDF8] mb-3 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {cert.desc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {cert.badge}
                  </span>
                  {/* <div className="w-6 h-6 rounded-full bg-[#0F172A] border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-[#38BDF8] group-hover:border-[#38BDF8] transition-colors">
                    <ExternalLink className="w-3 h-3" />
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
