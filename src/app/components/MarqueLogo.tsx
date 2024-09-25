"use client";

import React, { useState } from "react";

const logos = [
  {
    id: "mcdonalds",
    viewBox: "0 0 24 24",
    src: "/logo/1.jpeg",
  },
  {
    id: "jordan",
    viewBox: "0 0 24 24",
    src: "/logo/2.jpeg",
  },
  {
    id: "aws",
    viewBox: "0 0 24 24",
    src: "/logo/NHAI.jpeg",
  },
  {
    id: "spotify",
    viewBox: "0 0 24 24",
    src: "/logo/MORTH.jpeg",
  },
  {
    id: "mcdonalds",
    viewBox: "0 0 24 24",
    src: "/logo/1.jpeg",
  },
  {
    id: "jordan",
    viewBox: "0 0 24 24",
    src: "/logo/2.jpeg",
  },
  {
    id: "aws",
    viewBox: "0 0 24 24",
    src: "/logo/NHAI.jpeg",
  },
  {
    id: "spotify",
    viewBox: "0 0 24 24",
    src: "/logo/MORTH.jpeg",
  },
];

export default function MarqueeLogoWall() {
  const [isVertical, setIsVertical] = useState(false);

  return (
    <div
      className={`mb-12 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 ${
        isVertical ? "h-screen" : ""
      }`}
    >
      <div
        className={`wrapper ${
          isVertical ? "flex-row h-screen" : "flex-col"
        } max-w-full overflow-hidden`}
      >
        <div
          className={`marquee ${isVertical ? "flex-col" : ""} ${
            isVertical ? "h-full" : "w-full"
          }`}
        >
          <div
            className={`marquee__group ${
              isVertical ? "flex-col" : ""
            } flex items-center justify-around gap-4`}
          >
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="w-24 h-24 md:w-48 md:h-48 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
              >
                <img src={logo.src} alt={logo.id} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
          {/* Duplicate the group for infinite effect */}
          <div
            className={`marquee__group ${
              isVertical ? "flex-col" : ""
            } flex items-center justify-around gap-4`}
          >
            {logos.map((logo) => (
              <div
                key={`${logo.id}-copy`}
                className="w-24 h-24 md:w-48 md:h-48 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
              >
                <img src={logo.src} alt={logo.id} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee {
          --gap: 1rem;
          position: relative;
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
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
