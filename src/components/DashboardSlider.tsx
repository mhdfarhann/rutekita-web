'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Monitor, BarChart3, Bus, Users } from 'lucide-react'
import Image from 'next/image'
import { ReactElement } from 'react'
import { useIsMobile } from '@/hooks/useMobile'

interface DashboardSlide {
  id: number
  icon: ReactElement
  title: string
  description: string
  image: string
  features: string[]
}

const dashboardSlides: DashboardSlide[] = [
  {
    id: 1,
    icon: <Monitor className="w-10 h-10 text-[#0f4444]" />,
    title: "Dashboard Utama",
    description: "Overview komprehensif tentang performa platform secara real-time",
    image: "/dashboard/main-dashboard.png",
    features: ["Real-time monitoring", "Performance metrics", "System overview", "Quick actions"]
  },
  {
    id: 2,
    icon: <BarChart3 className="w-10 h-10 text-[#0f4444]" />,
    title: "Analytics & Reports",
    description: "Analisis mendalam untuk pengambilan keputusan strategis",
    image: "/dashboard/analytics-dashboard.png",
    features: ["Data visualization", "Revenue tracking", "User analytics", "Custom reports"]
  },
  {
    id: 3,
    icon: <Bus className="w-10 h-10 text-[#0f4444]" />,
    title: "Manajemen Armada",
    description: "Kontrol lengkap atas seluruh armada dan operasional bus",
    image: "/dashboard/fleet-management.png",
    features: ["Fleet tracking", "Maintenance schedule", "Route optimization", "Driver management"]
  },
  {
    id: 4,
    icon: <Users className="w-10 h-10 text-[#0f4444]" />,
    title: "Manajemen Pengguna",
    description: "Kelola operator, penumpang, dan sistem verifikasi",
    image: "/dashboard/user-management.png",
    features: ["User verification", "Role management", "Activity monitoring", "Support system"]
  }
]

export default function DashboardSlider(): ReactElement {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)
  const isMobile = useIsMobile()

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dashboardSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = (): void => {
    setCurrentSlide((prev: number) => (prev + 1) % dashboardSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = (): void => {
    setCurrentSlide((prev: number) => (prev - 1 + dashboardSlides.length) % dashboardSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number): void => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className={`relative ${isMobile ? 'max-w-full px-4' : 'max-w-8xl px-20'} mx-auto`}>
      {/* Navigation Arrows - Only show on desktop */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white shadow-2xl rounded-full flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all duration-300 z-20 border border-slate-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8 text-slate-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white shadow-2xl rounded-full flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all duration-300 z-20 border border-slate-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8 text-slate-700" />
          </button>
        </>
      )}

      {/* Main Slider Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden">
        {/* Slider Content */}
        <div className={`relative ${isMobile ? 'h-[600px]' : 'h-[500px] md:h-[800px] lg:h-[500px]'} overflow-hidden`}>
          {dashboardSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              {isMobile ? (
                // Mobile Layout - Stack vertically with image on top
                <div className="flex flex-col h-full">
                  {/* Image Section - Top */}
                  <div className="relative flex-1 p-6 flex items-center justify-center bg-gradient-to-bl from-slate-100 to-slate-50">
                    <div className="relative group w-full max-w-sm">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4444]/20 to-[#156064]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
                      
                      {/* Image Container */}
                      <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transform transition-all duration-500 group-hover:scale-105">
                        <Image
                          src={slide.image}
                          alt={`${slide.title} Dashboard`}
                          width={600}
                          height={400}
                          className="w-full h-auto"
                          priority={index === currentSlide}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Bottom */}
                  <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0f4444]/10 to-[#156064]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <div className="text-[#0f4444] scale-75">
                            {slide.icon}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-bold text-slate-900 truncate">
                            {slide.title}
                          </h3>
                          <div className="text-xs text-slate-500">
                            {slide.id}/{dashboardSlides.length}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Desktop Layout - Side by side with more emphasis on image
                <div className="grid lg:grid-cols-3 h-full">
                  {/* Left Content - Smaller */}
                  <div className="lg:col-span-1 p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white">
                    <div className="space-y-5">
                      {/* Header */}
                      <div className="space-y-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0f4444]/10 to-[#156064]/10 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                          <div className="text-[#0f4444]">
                            {slide.icon}
                          </div>
                        </div>
                        <div className="text-center lg:text-left">
                          <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                            {slide.title}
                          </h3>
                          <div className="text-sm text-slate-500 mt-1">
                            Module {slide.id}/{dashboardSlides.length}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base text-slate-600 leading-relaxed text-center lg:text-left">
                        {slide.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-900 text-center lg:text-left">Key Features:</h4>
                        <div className="space-y-2">
                          {slide.features.map((feature: string, featureIndex: number) => (
                            <div key={featureIndex} className="flex items-center space-x-2 justify-center lg:justify-start">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#0f4444] to-[#156064] rounded-full flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>Progress</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-[#0f4444] to-[#156064] h-1.5 rounded-full transition-all duration-1000" 
                               style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Image - Larger */}
                  <div className="lg:col-span-2 relative p-8 lg:p-12 flex items-center justify-center bg-gradient-to-bl from-slate-100 to-slate-50">
                    <div className="relative group w-full max-w-4xl">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4444]/20 to-[#156064]/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
                      
                      {/* Image Container */}
                      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all duration-500 group-hover:scale-105">
                        <Image
                          src={slide.image}
                          alt={`${slide.title} Dashboard`}
                          width={1000}
                          height={700}
                          className="w-full h-auto"
                          priority={index === currentSlide}
                        />
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f4444]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
    </div>

      {/* Slide Indicators */}
      <div className={`flex justify-center ${isMobile ? 'mt-6 space-x-2' : 'mt-8 space-x-3'}`}>
        {dashboardSlides.map((_: DashboardSlide, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? `${isMobile ? 'w-8 h-2' : 'w-12 h-3'} bg-gradient-to-r from-[#0f4444] to-[#156064] rounded-full`
                : `${isMobile ? 'w-2 h-2' : 'w-3 h-3'} bg-slate-300 rounded-full hover:bg-slate-400`
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className={`text-center ${isMobile ? 'mt-3' : 'mt-4'}`}>
        <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-slate-500`}>
          {currentSlide + 1} / {dashboardSlides.length}
        </span>
      </div>
    </div>
  )
}