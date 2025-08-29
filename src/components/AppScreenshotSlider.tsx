"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useEffect } from "react"

export default function AppScreenshotSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  })

  useEffect(() => {
    if (!instanceRef.current) return
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-[#0f4444] to-[#156064] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Antarmuka Aplikasi</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Desain intuitif dan modern untuk pengalaman pengguna yang luar biasa
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {["1.png", "2.png", "3.png"].map((img, i) => (
            <div key={i} className="keen-slider__slide flex justify-center">
              <div className="w-80 h-[640px] rounded-3xl shadow-2xl border-8 border-slate-800 overflow-hidden">
                <Image
                  src={`/screenshots/${img}`}
                  alt={`App Screenshot ${i + 1}`}
                  width={320}
                  height={640}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2].map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition"
            />
          ))}
        </div>
      </div>
    </section>
  )
}