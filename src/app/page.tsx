'use client'
import {
  Bus,
  MapPin,
  CreditCard,
  ShieldCheck,
  BarChart3,
  Smartphone,
  ArrowRight,
  Phone,
} from "lucide-react"
import AppScreenshotSlider from "../components/AppScreenshotSlider"
import Image from "next/image"
import { useIsMobile } from "@/hooks/useMobile"
import Logoprs from "@/components/logopr"



export default function HomePage() {
  const isMobile = useIsMobile()
  return (
        <div className="min-h-screen w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-100 ">
          {/* Floating Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#0f4444]/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#156064]/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#0f4444]/3 to-[#156064]/3 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Header */}
          <header className="fixed top-0 w-full bg-white/70 backdrop-blur-2xl z-50 border-b border-slate-200/50">
            <div className="container mx-auto py-4">
              <div className="flex items-center justify-between px-8">
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r bg-white to-gray-200 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br bg-white to-gray-200 rounded-2xl flex items-center justify-center shadow-xl">
                      {/* <Bus className="w-8 h-8 text-white" /> */}
                      <Logoprs/>
                    </div>
                  </div>
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">RuteKita</span>
                    <div className="text-xs text-slate-500 -mt-1">Transportasi Digital</div>
                  </div>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="#platform" className="text-slate-600 hover:text-[#0f4444] transition-all duration-300 font-medium relative group">
                    Platform
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0f4444] to-[#156064] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a href="#fitur" className="text-slate-600 hover:text-[#0f4444] transition-all duration-300 font-medium relative group">
                    Fitur
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0f4444] to-[#156064] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a href="#roadmap" className="text-slate-600 hover:text-[#0f4444] transition-all duration-300 font-medium relative group">
                    Roadmap
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0f4444] to-[#156064] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </nav>
                <div className="flex items-center space-x-3">
                  <div className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 rounded-full border border-emerald-200/50">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-emerald-700">Pra-Peluncuran</span>
                  </div>
                  <button className="bg-gradient-to-r from-[#0f4444] to-[#156064] text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                    {isMobile ? (
                      <Phone className="w-5 h-5" />
                    ) : (
                    "Hubungi Kami")}
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="pt-32 pb-20 px-6 relative w-full overflow-hidden ">
            <div className="container mx-auto gap-4">
              <div className="grid col-span-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left  h-[80svh] flex flex-col justify-between px-8">
                  <div className="inline-flex items-center space-x-3 w-fit bg-gradient-to-r from-[#0f4444]/10 to-[#156064]/10 px-5 py-3 rounded-full border border-[#0f4444]/20">
                    <div className="w-2 h-2 bg-[#0f4444] rounded-full animate-pulse"></div>
                    <span className="text-xs lg:text-sm font-semibold text-[#0f4444]">Platform Transportasi Generasi Terbaru</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    <span className="bg-gradient-to-r from-[#0f4444] via-[#156064] to-[#0f4444] bg-clip-text text-transparent">RuteKita</span>
                    <br />
                    <span className="text-slate-900">Mentransformasi</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#156064] to-[#0f4444] bg-clip-text text-transparent">Perjalanan Bus</span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                    Ekosistem digital komprehensif yang menghubungkan penumpang, operator, dan seluruh industri transportasi bus melalui teknologi canggih.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                    <div className="text-center flex flex-col justify-center items-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">50+</div>
                      <div className="text-sm text-slate-500">Kota Target</div>
                    </div>
                    <div className="text-center flex flex-col justify-center items-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">85%</div>
                      <div className="text-sm text-slate-500">Pengembangan</div>
                    </div>
                    <div className="text-center flex flex-col justify-center items-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">Q2 2025</div>
                      <div className="text-sm text-slate-500">Siap Diluncurkan</div>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="group bg-gradient-to-r from-[#0f4444] to-[#156064] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                      <span>Lihat Demo</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group bg-white/80 backdrop-blur-sm border-2 border-[#0f4444]/20 text-[#0f4444] px-8 py-4 rounded-2xl font-semibold hover:bg-[#0f4444] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                      <span>Kemitraan</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                {/* Right Content - App Preview Placeholder */}
                <div className=" flex justify-center ">
                  <div className="w-80 h-[600px] bg-gradient-to-br from-slate-100 to-white rounded-3xl shadow-2xl border-8 border-slate-800 overflow-hidden z-20">
                    <div className="w-full h-full bg-gradient-to-br from-[#0f4444] to-[#156064] flex items-center justify-center text-white">
                      <div className="text-center">
                        <Smartphone className="w-20 h-20 mx-auto mb-6" />
                         <Image
                                          src={`/screenshots/1.png`}
                                          alt={`App Screenshot `}
                                          width={320}
                                          height={640}
                                          className="object-cover w-full h-full"
                                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f4444]/30 to-[#156064]/30 rounded-3xl opacity-60 blur-xl -z-10 scale-110 animate-pulse"></div>
                </div>
              </div>
            </div>
          </section>

          {/* App Screenshots Slider */}
             <AppScreenshotSlider />
          

          {/* Platform Overview */}
          <section id="platform" className="py-20 bg-white/70 backdrop-blur-sm border-y border-slate-200/50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Ekosistem <span className="bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">Lengkap</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Menghubungkan semua stakeholder dalam industri transportasi bus melalui satu platform terpadu
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="group text-center space-y-6 p-8 rounded-3xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0f4444]/10 to-[#156064]/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-10 h-10 text-[#0f4444]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Aplikasi Penumpang</h3>
                    <p className="text-slate-600">Pengalaman mobile intuitif untuk mencari, memesan, dan melacak perjalanan bus dengan update real-time</p>
                  </div>
                </div>
                
                <div className="group text-center space-y-6 p-8 rounded-3xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0f4444]/10 to-[#156064]/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Bus className="w-10 h-10 text-[#0f4444]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Dashboard Operator</h3>
                    <p className="text-slate-600">Manajemen armada komprehensif, pengawasan pemesanan, dan analitik operasional untuk operator bus</p>
                  </div>
                </div>
                
                <div className="group text-center space-y-6 p-8 rounded-3xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0f4444]/10 to-[#156064]/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-10 h-10 text-[#0f4444]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Intelijen Bisnis</h3>
                    <p className="text-slate-600">Analitik canggih dan insight untuk pengambilan keputusan berbasis data dan optimasi rute</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          

          {/* Features Section */}
          <section id="fitur" className="py-20 bg-gradient-to-br from-slate-900 via-[#0f4444] to-[#156064] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full"></div>
              <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/4 w-36 h-36 border border-white rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-6 relative">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Fitur Canggih</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Dibangun dengan teknologi terdepan untuk memberikan pengalaman pengguna yang luar biasa dan efisiensi operasional
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    icon: <MapPin className="w-8 h-8" />,
                    title: "Pelacakan Real-time",
                    desc: "Pelacakan GPS langsung dengan prediksi kedatangan akurat dan update rute"
                  },
                  {
                    icon: <CreditCard className="w-8 h-8" />,
                    title: "Pembayaran Cerdas",
                    desc: "Berbagai opsi pembayaran dengan proses aman dan konfirmasi instan"
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8" />,
                    title: "Keamanan Utama",
                    desc: "Operator terverifikasi, rating keamanan, dan fitur bantuan darurat"
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8" />,
                    title: "Analitik Data",
                    desc: "Insight komprehensif untuk optimasi rute dan prediksi permintaan"
                  },
                  {
                    icon: <Smartphone className="w-8 h-8" />,
                    title: "Mobile Optimal",
                    desc: "Aplikasi native untuk iOS dan Android dengan kemampuan offline"
                  },
                  {
                    icon: <Bus className="w-8 h-8" />,
                    title: "Manajemen Armada",
                    desc: "Kontrol operasional lengkap dengan penjadwalan perawatan dan manajemen kru"
                  }
                ].map((feature, index) => (
                  <div key={index} className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    <div className="text-white/80 mb-4 group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Development Roadmap */}
          <section id="roadmap" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Progres <span className="bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">Pengembangan</span>
                </h2>
                <p className="text-xl text-slate-600">Status saat ini dan milestone yang akan datang</p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>Progres Keseluruhan</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#0f4444] to-[#156064] h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Completed */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      Selesai
                    </h3>
                    {[
                      "Arsitektur Platform Inti",
                      "Sistem Autentikasi User", 
                      "Integrasi Booking & Pembayaran",
                      "MVP Dashboard Admin",
                      "Desain UI/UX Aplikasi Mobile",
                      "Skema Database & API"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        </div>
                        <span className="text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* In Progress */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                      Dalam Pengembangan
                    </h3>
                    {[
                      "Pelacakan Bus Real-time",
                      "Sistem Push Notification",
                      "Portal Manajemen Operator",
                      "Dashboard Analitik Canggih",
                      "Dukungan Multi-bahasa",
                      "Program Beta Testing"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Timeline */}
                <div className="mt-16 text-center">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-4 bg-white rounded-2xl p-6 shadow-lg ">
                    <div className="text-center flex justify-center items-center flex-col">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">Q4</span>
                      </div>
                      <div className="text-sm text-slate-600">2024</div>
                      <div className="text-xs text-slate-500">Pengembangan</div>
                    </div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                    <div className="text-center flex justify-center items-center flex-col">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-2 animate-pulse">
                        <span className="text-white font-bold text-sm">Q1</span>
                      </div>
                      <div className="text-sm text-slate-600">2025</div>
                      <div className="text-xs text-slate-500">Beta Testing</div>
                    </div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-[#0f4444]"></div>
                    <div className="text-center flex justify-center items-center flex-col">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0f4444] to-[#156064] rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">Q2</span>
                      </div>
                      <div className="text-sm text-slate-600">2025</div>
                      <div className="text-xs text-slate-500">Peluncuran</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partnership CTA */}
          <section className="py-20 bg-gradient-to-br from-[#0f4444] via-[#156064] to-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="container mx-auto px-6 text-center relative">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                  Siap <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Transformasi</span>
                  <br />Transportasi?
                </h2>
                <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Bergabunglah dengan kami dalam merevolusi industri transportasi bus Indonesia. 
                  Mari diskusikan peluang kemitraan dan kolaborasi strategis.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <button className="group bg-white text-[#0f4444] px-10 py-5 rounded-2xl font-bold hover:bg-slate-100 hover:scale-105 transition-all duration-300 flex items-center  shadow-2xl">
                    <div className="text-3xl">📧</div>
                    <div className="text-left">
                      <div className="text-sm opacity-60">Kemitraan</div>
                      <div className="text-lg">partnership@rutekita.com</div>
                    </div>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-[#0f4444] hover:scale-105 transition-all duration-300 flex items-center space-x-4">
                    <div className="text-3xl">📞</div>
                    <div className="text-left">
                      <div className="text-sm opacity-60">Pengembangan Bisnis</div>
                      <div className="text-lg">+62 812-3456-7890</div>
                    </div>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                
                {/* Partnership Types */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-2xl mb-3">🚀</div>
                    <h3 className="font-bold mb-2">Investasi Strategis</h3>
                    <p className="text-sm text-white/80">Kemitraan ekuitas untuk akselerasi pertumbuhan</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-2xl mb-3">🤝</div>
                    <h3 className="font-bold mb-2">Kemitraan Operator</h3>
                    <p className="text-sm text-white/80">Kolaborasi dengan operator bus di seluruh Indonesia</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-2xl mb-3">⚡</div>
                    <h3 className="font-bold mb-2">Aliansi Teknologi</h3>
                    <p className="text-sm text-white/80">Integrasi dengan sistem yang sudah ada</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-900 text-white py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-2 md:col-span-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r bg-white to-gray-200 rounded-2xl blur opacity-75"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br bg-white to-gray-200 rounded-2xl flex items-center justify-center">
                        <Logoprs/>

                      </div>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">RuteKita</span>
                      <div className="text-xs text-slate-400">Transportasi Digital</div>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Mentransformasi transportasi bus Indonesia melalui solusi digital inovatif dan kemitraan strategis.
                  </p>
                  <div className="space-y-2 text-sm text-slate-400">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-slate-700 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      </div>
                      <span>Fase Pra-Peluncuran</span>
                    </div>
                    <div>📧 mulateknologimandiri@gmail.com</div>
                    <div>📞 +62 812-3456-7890</div>
                    <div>📍 Aceh, Indonesia</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-6 text-lg">Platform</h4>
                  <ul className="space-y-3 text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Aplikasi Penumpang</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Dashboard Operator</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Intelijen Bisnis</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Dokumentasi API</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-6 text-lg">Kemitraan</h4>
                  <ul className="space-y-3 text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Investasi Strategis</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Jaringan Operator</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Aliansi Teknologi</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Pengembangan Bisnis</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-6 text-lg">Perusahaan</h4>
                  <ul className="space-y-3 text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Tentang Tim</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog Pengembangan</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-slate-800 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <p className="text-slate-400">&copy; 2025 RuteKita. Hak cipta dilindungi.</p>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-slate-400">
                    <span className="flex items-center space-x-2">
                    
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          
        </div>
    
  )
}


