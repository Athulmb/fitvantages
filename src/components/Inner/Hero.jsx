// Drop this component right under your existing navbar. 
// TailwindCSS required.

import React from "react";

const BRAND_GREEN = "#8DFF6A"; // tweak to match your brand
const BACKGROUND_IMAGE = "/corporatesHero.png"; // new background image
const LOGO_TOP = "/logo2.png"; // logo image on top of the text
const LOGO_WATERMARK = "/logo.png"; // watermark logo on the side

export default function BusinessInnerHero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-black text-white"
      aria-label="Business Inner Page"
    >
      {/* Background image */}
      <img
        src={BACKGROUND_IMAGE}
        alt="People training in a modern gym"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Subtle top/bottom vignettes */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 -z-10 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 -z-10 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Right-side watermark logo */}
      <div className="pointer-events-none absolute right-[-6vw] top-1/2 -z-10 -translate-y-1/2 rotate-[-16deg]">
        <img
          src={LOGO_WATERMARK}
          alt="FitVantage watermark"
          className="w-[40vw] opacity-10 select-none"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-16 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 text-center">
        {/* Logo above text */}
        <div className="flex justify-center">
          <img
            src={LOGO_TOP}
            alt="FitVantage logo"
            className="h-16 w-auto sm:h-20 md:h-24"
          />
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Own a Vantage gym
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/85">
          Be a part of India’s largest fitness brand
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg text-white/90">
          <span className="font-semibold">580+ centres</span>
          <span className="opacity-60">|</span>
          <span className="font-semibold">50+ cities</span>
        </div>

        <div className="mt-8">
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 rounded-md border px-5 py-2 text-sm font-medium transition-colors sm:text-base"
            style={{ borderColor: BRAND_GREEN }}
          >
            <span className="relative z-10">Get in touch</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              <path
                d="M5 12h12M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="absolute inset-0 -z-10 rounded-md opacity-0 transition-opacity"
              style={{ background: BRAND_GREEN }}
            />
          </a>
        </div>
      </div>

      {/* Button hover fill */}
      <style>{`
        a[href="#contact"]:hover .-z-10 { opacity: 1; }
        a[href="#contact"]:hover { color: #0B1115; background: transparent; }
      `}</style>
    </section>
  );
}
