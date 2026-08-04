import { GraduationCap, Award, BookOpen, Calendar, Star } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-slate-700 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Pendidikan Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Latar Belakang <span className="text-gradient">Pendidikan</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] rounded-full mt-4" />
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#1E293B]/70 border border-slate-700/80 rounded-3xl p-5 sm:p-8 backdrop-blur-md hover:border-[#38BDF8]/50 hover:shadow-[0_10px_35px_rgba(56,189,248,0.15)] transition-all duration-300">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: University Badge & GPA */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#38BDF8]/20 to-[#2DD4BF]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] mb-4 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Universitas Komputer Indonesia
                </h3>
                <p className="text-xs text-[#38BDF8] font-semibold mb-3">
                  (UNIKOM Bandung)
                </p>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0F172A] border border-[#2DD4BF]/40 text-[#2DD4BF] text-sm font-bold shadow-sm">
                  <Star className="w-4 h-4 fill-[#2DD4BF]" />
                  <span>IPK 3,34 / 4,00</span>
                </div>
              </div>

              {/* Right Column: Major, Period, and Thesis Detail */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-lg font-bold text-white">
                      S1 Teknik Informatika
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] bg-[#0F172A] px-3 py-1 rounded-full border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>2020 – 2024</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] mb-6">
                    Fakultas Teknik dan Ilmu Komputer • Pemrograman & Analisis Sistem Informasi
                  </p>

                  {/* Thesis Box */}
                  <div className="bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#38BDF8]/5 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex items-center gap-2 text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-2">
                      <BookOpen className="w-4 h-4 text-[#38BDF8]" />
                      <span>Judul Skripsi / Tugas Akhir:</span>
                    </div>
                    
                    <h4 className="text-sm font-bold text-white leading-relaxed italic">
                      &quot;Sistem Penilaian Kinerja Karyawan dengan metode Profile Matching di Perdana Photo Group&quot;
                    </h4>

                    <p className="text-xs text-[#94A3B8] mt-3">
                      Penelitian ini merancang sistem evaluasi kinerja berbasis logika pembobotan Profile Matching untuk menentukan rekomendasi keputusan sumber daya manusia secara objektif dan terstruktur.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
