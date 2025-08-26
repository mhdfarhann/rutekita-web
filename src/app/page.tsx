import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RuteKita - Digital Bus Transportation Platform",
  description: "Next-generation digital platform revolutionizing bus transportation in Indonesia. Connecting passengers with operators through modern technology.",
};

function BusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2M7 17v2m10-2v2m-12-8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="15" r="1" fill="currentColor"/>
      <circle cx="16" cy="15" r="1" fill="currentColor"/>
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M1 10h22" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function BarChart3Icon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 17V9" stroke="currentColor" strokeWidth="2"/>
      <path d="M13 17V5" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 17v-3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function SmartphoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 18h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.000/svg">
      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PhoneFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone body */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        {/* Inner frame */}
        <div className="relative bg-black rounded-[2rem] p-1">
          {/* Screen */}
          <div className="bg-white rounded-[1.75rem] overflow-hidden relative">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
            {children}
          </div>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4444]/30 to-[#156064]/30 rounded-[2.5rem] opacity-60 blur-xl -z-10 scale-110 animate-pulse"></div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
          {/* Floating Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#0f4444]/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#156064]/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#0f4444]/3 to-[#156064]/3 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Header */}
          <header className="fixed top-0 w-full bg-white/70 backdrop-blur-2xl z-50 border-b border-slate-200/50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f4444] to-[#156064] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-[#0f4444] to-[#156064] rounded-2xl flex items-center justify-center shadow-xl">
                      <BusIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">RuteKita</span>
                    <div className="text-xs text-slate-500 -mt-1">Digital Transportation</div>
                  </div>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="#platform" className="text-slate-600 hover:text-[#0f4444] transition-all duration-300 font-medium relative group">
                    Platform
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0f4444] to-[#156064] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a href="#features" className="text-slate-600 hover:text-[#0f4444] transition-all duration-300 font-medium relative group">
                    Features
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
                    <span className="text-sm font-medium text-emerald-700">Pre-Launch</span>
                  </div>
                  <button className="bg-gradient-to-r from-[#0f4444] to-[#156064] text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left space-y-8">
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0f4444]/10 to-[#156064]/10 px-5 py-3 rounded-full border border-[#0f4444]/20">
                    <div className="w-2 h-2 bg-[#0f4444] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#0f4444]">Next-Gen Transportation Platform</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-[#0f4444] via-[#156064] to-[#0f4444] bg-clip-text text-transparent">RuteKita</span>
                    <br />
                    <span className="text-slate-900">Transforming</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#156064] to-[#0f4444] bg-clip-text text-transparent">Bus Travel</span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                    A comprehensive digital ecosystem connecting passengers, operators, and the entire bus transportation industry through cutting-edge technology.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">50+</div>
                      <div className="text-sm text-slate-500">Target Cities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">85%</div>
                      <div className="text-sm text-slate-500">Development</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">Q2 2025</div>
                      <div className="text-sm text-slate-500">Launch Ready</div>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="group bg-gradient-to-r from-[#0f4444] to-[#156064] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                      <span>View Demo</span>
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group bg-white/80 backdrop-blur-sm border-2 border-[#0f4444]/20 text-[#0f4444] px-8 py-4 rounded-2xl font-semibold hover:bg-[#0f4444] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                      <span>Partnership Inquiry</span>
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                {/* Right Content - App Preview */}
                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Main phone */}
                    <PhoneFrame className="w-80 z-20">
                      <div className="h-[600px] bg-gradient-to-br from-[#0f4444] to-[#156064] relative overflow-hidden">
                        {/* App Interface */}
                        <div className="absolute inset-0 p-6 text-white">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-8 pt-6">
                            <div>
                              <div className="text-lg font-semibold">Hi, Traveler 👋</div>
                              <div className="text-sm text-white/70">Where are you going?</div>
                            </div>
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <div className="w-6 h-6 bg-white rounded-full"></div>
                            </div>
                          </div>
                          
                          {/* Search Card */}
                          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 text-slate-800 mb-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex-1">
                                <div className="text-xs text-slate-500 mb-1">From</div>
                                <div className="font-semibold text-lg">Jakarta</div>
                              </div>
                              <div className="mx-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-[#0f4444] to-[#156064] rounded-full flex items-center justify-center">
                                  <ArrowRightIcon className="w-4 h-4 text-white" />
                                </div>
                              </div>
                              <div className="flex-1 text-right">
                                <div className="text-xs text-slate-500 mb-1">To</div>
                                <div className="font-semibold text-lg">Surabaya</div>
                              </div>
                            </div>
                            <div className="border-t pt-4">
                              <div className="text-xs text-slate-500 mb-1">Departure</div>
                              <div className="font-semibold">December 25, 2024</div>
                            </div>
                          </div>
                          
                          {/* Quick Actions */}
                          <div className="space-y-3">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-4">
                              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <BusIcon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold">Find Buses</div>
                                <div className="text-sm text-white/70">Search available routes</div>
                              </div>
                              <ArrowRightIcon className="w-5 h-5" />
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-4">
                              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <LocationIcon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold">Track Journey</div>
                                <div className="text-sm text-white/70">Real-time bus location</div>
                              </div>
                              <ArrowRightIcon className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </PhoneFrame>
                    
                    {/* Secondary phone showing results */}
                    <PhoneFrame className="w-72 absolute -left-24 top-16 -z-10 opacity-70">
                      <div className="h-[600px] bg-gradient-to-br from-slate-50 to-white p-4 overflow-hidden">
                        <div className="pt-8 space-y-4">
                          <div className="text-center mb-6">
                            <div className="text-lg font-bold text-slate-800">Available Buses</div>
                            <div className="text-sm text-slate-500">Jakarta → Surabaya</div>
                          </div>
                          
                          {/* Bus options */}
                          <div className="space-y-3">
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="font-semibold text-slate-800">Executive AC</div>
                                  <div className="text-xs text-slate-500">Comfortable seating</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold text-emerald-600">Rp 200K</div>
                                  <div className="text-xs text-slate-400">per seat</div>
                                </div>
                              </div>
                              <div className="text-xs text-slate-600">08:00 - 20:00 (12h)</div>
                            </div>
                            
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="font-semibold text-slate-800">Premium Suite</div>
                                  <div className="text-xs text-slate-500">Luxury experience</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold text-emerald-600">Rp 350K</div>
                                  <div className="text-xs text-slate-400">per seat</div>
                                </div>
                              </div>
                              <div className="text-xs text-slate-600">10:30 - 22:30 (12h)</div>
                            </div>
                            
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="font-semibold text-slate-800">Economy Class</div>
                                  <div className="text-xs text-slate-500">Budget friendly</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold text-emerald-600">Rp 150K</div>
                                  <div className="text-xs text-slate-400">per seat</div>
                                </div>
                              </div>
                              <div className="text-xs text-slate-600">06:00 - 18:30 (12.5h)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PhoneFrame>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Overview */}
          <section id="platform" className="py-20 bg-white/70 backdrop-blur-sm border-y border-slate-200/50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Complete <span className="bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">Ecosystem</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Connecting all stakeholders in the bus transportation industry through one unified platform
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="group text-center space-y-6 p-8 rounded-3xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0f4444]/10 to-[#156064]/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <SmartphoneIcon className="w-10 h-10 text-[#0f4444]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Passenger App</h3>
                    <p className="text-slate-600">Intuitive mobile experience for searching, booking, and tracking bus journeys with real-time updates</p>
                  </div>
                </div>
                
                <div className="group text-center space-y-6 p-8 rounded-3xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0f4444]/10 to-[#156064]/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <BusIcon className="w-10 h-10 text-[#0f4444]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Operator Dashboard</h3>
                    <p className="text-slate-600">Comprehensive fleet management, booking oversight, and operational analytics for bus operators</p>
                  </div>
                </div>
                
                <div className="group text-center space-y-6 p-8 rounded-3xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0f4444]/10 to-[#156064]/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <BarChart3Icon className="w-10 h-10 text-[#0f4444]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Intelligence</h3>
                    <p className="text-slate-600">Advanced analytics and insights for data-driven decision making and route optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-gradient-to-br from-slate-900 via-[#0f4444] to-[#156064] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full"></div>
              <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/4 w-36 h-36 border border-white rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-6 relative">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Advanced Features</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Built with cutting-edge technology to deliver exceptional user experience and operational efficiency
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    icon: <LocationIcon className="w-8 h-8" />,
                    title: "Real-time Tracking",
                    desc: "Live GPS tracking with accurate arrival predictions and route updates"
                  },
                  {
                    icon: <CreditCardIcon className="w-8 h-8" />,
                    title: "Smart Payments",
                    desc: "Multiple payment options with secure processing and instant confirmation"
                  },
                  {
                    icon: <ShieldCheckIcon className="w-8 h-8" />,
                    title: "Safety First",
                    desc: "Verified operators, safety ratings, and emergency assistance features"
                  },
                  {
                    icon: <BarChart3Icon className="w-8 h-8" />,
                    title: "Data Analytics",
                    desc: "Comprehensive insights for route optimization and demand forecasting"
                  },
                  {
                    icon: <SmartphoneIcon className="w-8 h-8" />,
                    title: "Mobile Optimized",
                    desc: "Native mobile apps for iOS and Android with offline capabilities"
                  },
                  {
                    icon: <BusIcon className="w-8 h-8" />,
                    title: "Fleet Management",
                    desc: "Complete operational control with maintenance scheduling and crew management"
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
                  Development <span className="bg-gradient-to-r from-[#0f4444] to-[#156064] bg-clip-text text-transparent">Progress</span>
                </h2>
                <p className="text-xl text-slate-600">Current status and upcoming milestones</p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>Overall Progress</span>
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
                      Completed
                    </h3>
                    {[
                      "Core Platform Architecture",
                      "User Authentication System", 
                      "Booking & Payment Integration",
                      "Admin Dashboard MVP",
                      "Mobile App UI/UX Design",
                      "Database Schema & APIs"
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
                      In Development
                    </h3>
                    {[
                      "Real-time Bus Tracking",
                      "Push Notification System",
                      "Operator Management Portal",
                      "Advanced Analytics Dashboard",
                      "Multi-language Support",
                      "Beta Testing Program"
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
                  <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">Q4</span>
                      </div>
                      <div className="text-sm text-slate-600">2024</div>
                      <div className="text-xs text-slate-500">Development</div>
                    </div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-2 animate-pulse">
                        <span className="text-white font-bold text-sm">Q1</span>
                      </div>
                      <div className="text-sm text-slate-600">2025</div>
                      <div className="text-xs text-slate-500">Beta Testing</div>
                    </div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-[#0f4444]"></div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0f4444] to-[#156064] rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">Q2</span>
                      </div>
                      <div className="text-sm text-slate-600">2025</div>
                      <div className="text-xs text-slate-500">Launch</div>
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
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Transform</span>
                  <br />Transportation?
                </h2>
                <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join us in revolutionizing Indonesia's bus transportation industry. 
                  Let's discuss partnership opportunities and strategic collaboration.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <button className="group bg-white text-[#0f4444] px-10 py-5 rounded-2xl font-bold hover:bg-slate-100 hover:scale-105 transition-all duration-300 flex items-center space-x-4 shadow-2xl">
                    <div className="text-3xl">📧</div>
                    <div className="text-left">
                      <div className="text-sm opacity-60">Partnership Inquiry</div>
                      <div className="text-lg">partnership@rutekita.com</div>
                    </div>
                    <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-[#0f4444] hover:scale-105 transition-all duration-300 flex items-center space-x-4">
                    <div className="text-3xl">📞</div>
                    <div className="text-left">
                      <div className="text-sm opacity-60">Business Development</div>
                      <div className="text-lg">+62 812-3456-7890</div>
                    </div>
                    <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                
                {/* Partnership Types */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-2xl mb-3">🚀</div>
                    <h3 className="font-bold mb-2">Strategic Investment</h3>
                    <p className="text-sm text-white/80">Equity partnership for growth acceleration</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-2xl mb-3">🤝</div>
                    <h3 className="font-bold mb-2">Operator Partnership</h3>
                    <p className="text-sm text-white/80">Collaborate with bus operators nationwide</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-2xl mb-3">⚡</div>
                    <h3 className="font-bold mb-2">Technology Alliance</h3>
                    <p className="text-sm text-white/80">Integration with existing systems</p>
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
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4444] to-[#156064] rounded-2xl blur opacity-75"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-[#0f4444] to-[#156064] rounded-2xl flex items-center justify-center">
                        <BusIcon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">RuteKita</span>
                      <div className="text-xs text-slate-400">Digital Transportation</div>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Transforming Indonesia's bus transportation through innovative digital solutions and strategic partnerships.
                  </p>
                  <div className="space-y-2 text-sm text-slate-400">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-slate-700 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      </div>
                      <span>Pre-Launch Phase</span>
                    </div>
                    <div>📧 hello@rutekita.com</div>
                    <div>📞 +62 812-3456-7890</div>
                    <div>📍 Jakarta, Indonesia</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-6 text-lg">Platform</h4>
                  <ul className="space-y-3 text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Passenger App</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Operator Dashboard</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Business Intelligence</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-6 text-lg">Partnership</h4>
                  <ul className="space-y-3 text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Strategic Investment</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Operator Network</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Technology Alliance</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Business Development</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-6 text-lg">Company</h4>
                  <ul className="space-y-3 text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">About Team</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Development Blog</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-slate-800 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <p className="text-slate-400">&copy; 2024 RuteKita. All rights reserved.</p>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-slate-400">
                    <span className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span>Made with ❤️ in Indonesia</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {children}
      </body>
    </html>
  );
}