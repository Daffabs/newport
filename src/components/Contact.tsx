"use client";

import { useState } from "react";
import { Mail, Phone, Globe, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
    </svg>
  );
}

// Sanitasi string untuk mencegah payload HTML / Script XSS
const sanitizeInput = (input: string): string => {
  return input
    .replace(/<[^>]*>?/gm, "") // Hapus semua tag HTML
    .replace(/javascript:/gi, "") // Hapus protokol javascript:
    .replace(/on\w+\s*=/gi, "") // Hapus inline event handler (onload=, onerror=, dll)
    .trim();
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validasi Nama
    const sanitizedName = sanitizeInput(formData.name);
    if (!sanitizedName) {
      newErrors.name = "Nama lengkap wajib diisi.";
    } else if (sanitizedName.length < 2) {
      newErrors.name = "Nama minimal 2 karakter.";
    } else if (sanitizedName.length > 100) {
      newErrors.name = "Nama maksimal 100 karakter.";
    } else if (/<[^>]*>/g.test(formData.name) || /javascript:/gi.test(formData.name)) {
      newErrors.name = "Karakter atau skrip berbahaya terdeteksi.";
    }

    // Validasi Email
    const sanitizedEmail = sanitizeInput(formData.email);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!sanitizedEmail) {
      newErrors.email = "Alamat email wajib diisi.";
    } else if (!emailRegex.test(sanitizedEmail)) {
      newErrors.email = "Format email tidak valid.";
    } else if (sanitizedEmail.length > 100) {
      newErrors.email = "Email maksimal 100 karakter.";
    }

    // Validasi Subjek
    const sanitizedSubject = sanitizeInput(formData.subject);
    if (sanitizedSubject.length > 150) {
      newErrors.subject = "Subjek maksimal 150 karakter.";
    } else if (/<[^>]*>/g.test(formData.subject) || /javascript:/gi.test(formData.subject)) {
      newErrors.subject = "Karakter atau skrip berbahaya terdeteksi.";
    }

    // Validasi Pesan
    const sanitizedMessage = sanitizeInput(formData.message);
    if (!sanitizedMessage) {
      newErrors.message = "Pesan wajib diisi.";
    } else if (sanitizedMessage.length < 10) {
      newErrors.message = "Pesan minimal 10 karakter.";
    } else if (sanitizedMessage.length > 2000) {
      newErrors.message = "Pesan maksimal 2000 karakter.";
    } else if (/<script[^>]*>/gi.test(formData.message) || /javascript:/gi.test(formData.message)) {
      newErrors.message = "Skrip atau kode berbahaya terdeteksi pada pesan.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitError("");
    setSubmitted(false);
    
    // Sanitasi data sebelum dikirim/diproses
    const safeData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/daffabs2001@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: safeData.name,
          email: safeData.email,
          _subject: safeData.subject ? safeData.subject : `Pesan Portofolio Baru dari ${safeData.name}`,
          message: safeData.message,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        setTimeout(() => {
          setSubmitted(false);
        }, 7000);
      } else {
        throw new Error("Gagal terhubung ke layanan pengiriman email.");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setSubmitError("Gagal mengirim pesan secara otomatis. Mengalihkan ke aplikasi email Anda...");
      
      const mailSubject = encodeURIComponent(
        safeData.subject || `Pesan Portofolio dari ${safeData.name}`
      );
      const mailBody = encodeURIComponent(
        `Nama: ${safeData.name}\nEmail: ${safeData.email}\n\nPesan:\n${safeData.message}`
      );
      window.location.href = `mailto:daffabs2001@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    } finally {
      setLoading(false);
    }
  };

  const contactInfos = [
    {
      icon: Mail,
      label: "Email",
      value: "daffabs2001@gmail.com",
      href: "mailto:daffabs2001@gmail.com",
      color: "#38BDF8",
    },
    {
      icon: Phone,
      label: "Telepon / WhatsApp",
      value: "+62 895 356 4018 66",
      href: "https://wa.me/62895356401866",
      color: "#2DD4BF",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/daffa-bagus-syach-putra",
      href: "https://linkedin.com/in/daffa-bagus-syach-putra",
      color: "#3B82F6",
    },
    {
      icon: Globe,
      label: "Website Portofolio",
      value: "daffabs.vercel.app",
      href: "https://daffabs.vercel.app",
      color: "#38BDF8",
    },
    {
      icon: MapPin,
      label: "Domisili & Lokasi",
      value: "Bandung, Jawa Barat, Indonesia",
      href: "#",
      color: "#2DD4BF",
    },
  ];

  return (
    <section id="contact" className="py-20 relative bg-[#090D16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-slate-700 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mari Berdiskusi & <span className="text-gradient">Bekerjasama</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Terbuka untuk kesempatan karir Quality Assurance, System Analyst, IT Business Analyst maupun diskusi proyek software.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            {contactInfos.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="group bg-[#1E293B]/80 border border-slate-700/70 rounded-2xl p-4 flex items-center gap-4 hover:border-[#38BDF8] hover:bg-[#1E293B] hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-700/80 bg-[#0F172A] group-hover:scale-110 transition-transform"
                    style={{ color: item.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-medium text-slate-400 block">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors truncate block">
                      {item.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right Column: Dark Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1E293B]/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Isi formulir di bawah ini untuk mengirimkan pesan atau penawaran kerja secara cepat.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#2DD4BF]/20 to-[#38BDF8]/20 border border-[#2DD4BF] text-[#2DD4BF] flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div className="text-xs font-semibold">
                    <p className="text-white font-bold">Pesan Terkirim!</p>
                    <p>Terima kasih telah menghubungi Daffa Bagus. Pesan Anda telah dikirimkan ke daffabs2001@gmail.com dan akan segera direspons.</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/40 text-red-400 flex items-center gap-3 animate-in fade-in">
                  <AlertCircle className="w-6 h-6 shrink-0" />
                  <div className="text-xs font-semibold">
                    <p className="text-white font-bold">Informasi Pengiriman</p>
                    <p>{submitError}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0F172A] border ${
                        errors.name ? "border-red-500" : "border-slate-700"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contoh@domain.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0F172A] border ${
                        errors.email ? "border-red-500" : "border-slate-700"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subjek */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subjek Pesan / Perihal
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Penawaran Kerja Quality Assurance"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0F172A] border ${
                      errors.subject ? "border-red-500" : "border-slate-700"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Pesan */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Pesan Anda *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan detail pesan atau pertanyaan Anda di sini..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0F172A] border ${
                      errors.message ? "border-red-500" : "border-slate-700"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] text-[#0F172A] font-extrabold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan Sekarang</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

