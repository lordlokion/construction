'use client'

import React from "react"
import Image from "next/image"

const logos = [
  { id: "logo1", src: "/logo/1.jpeg" },
  { id: "logo3", src: "/logo/NHAI.jpeg" },
  { id: "logo4", src: "/logo/MORTH.jpeg" },
  { id: "logo6", src: "/logo/2.jpeg" },
]

export default function Component() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Yellow accent corner */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400 z-10" />
      
      <div className="flex flex-col md:flex-row">
        {/* Left section with heading */}
        <div className="w-full md:w-1/3 bg-orange-400 p-8 min-h-[200px] flex items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Prestigious Clients
          </h2>
        </div>

        {/* Right section with logos */}
        <div className="w-full md:w-2/3 bg-white p-8 relative">
          <div className="marquee">
            <div className="marquee__group">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
                >
                  <Image src={logo.src} width={100} height={100} alt={logo.id} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            <div className="marquee__group" aria-hidden="true">
              {logos.map((logo) => (
                <div
                  key={`${logo.id}-copy`}
                  className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
                >
                  <Image src={logo.src} width={100} height={100} alt={logo.id} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          --gap: 1rem;
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: var(--gap);
        }

        .marquee__group {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: var(--gap);
          min-width: 100%;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
      `}</style>
    </section>
  )
}