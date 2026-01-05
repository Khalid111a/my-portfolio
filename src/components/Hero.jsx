function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950 text-white pt-24"
    >


      <div className="hero-waves">
        <svg viewBox="0 0 1440 420" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(37,99,235,0.0)" />
              <stop offset="35%" stopColor="rgba(59,130,246,0.55)" />
              <stop offset="70%" stopColor="rgba(99,102,241,0.55)" />
              <stop offset="100%" stopColor="rgba(147,51,234,0.0)" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(59,130,246,0.0)" />
              <stop offset="45%" stopColor="rgba(59,130,246,0.40)" />
              <stop offset="75%" stopColor="rgba(99,102,241,0.35)" />
              <stop offset="100%" stopColor="rgba(147,51,234,0.0)" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* back wave */}
          <path
            d="M0,260 C240,210 420,310 720,260 C980,220 1140,180 1440,240 L1440,420 L0,420 Z"
            fill="url(#waveGrad2)"
            filter="url(#softGlow)"
            opacity="0.85"
          />
          {/* front wave */}
          <path
            d="M0,300 C260,240 420,360 720,300 C980,250 1180,220 1440,280 L1440,420 L0,420 Z"
            fill="url(#waveGrad1)"
            filter="url(#softGlow)"
            opacity="0.95"
          />
        </svg>
      </div>


      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-400 drop-shadow-[0_0_25px_rgba(99,102,241,0.35)]">
          Hi, I&apos;m Khaled AlKamel <span className="inline-block">👋</span>
        </h1>

        <p className="mt-4 text-lg text-gray-200 font-medium">
          Full-Stack Developer & Graphic Designer
        </p>

        <p className="mt-3 max-w-2xl text-gray-300 leading-relaxed">
          I build fast, scalable web apps and modern digital designs that help
          businesses stand out.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-indigo-400 text-indigo-200 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Contact Me
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Trusted by startups • Open for freelance & full-time opportunities
        </p>

        <a href="#about" className="mt-10 text-gray-400 hover:text-gray-200 transition">
          ↓ Scroll to explore
        </a>
      </div>
    </section>
  );
}

export default Hero;
