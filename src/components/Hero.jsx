function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950 text-white pt-24"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-400">
        Hi, I&apos;m Khaled AlKamel <span className="inline-block">👋</span>
      </h1>

      <p className="mt-4 text-lg text-gray-300 font-medium">
        Full-Stack Developer & Graphic Designer
      </p>

      <p className="mt-3 max-w-2xl text-gray-400 leading-relaxed">
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
          className="border border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Contact Me
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Trusted by startups • Open for freelance & full-time opportunities
      </p>

      <a href="#about" className="mt-10 text-gray-500 hover:text-gray-300 transition">
        ↓ Scroll to explore
      </a>
    </section>
  );
}

export default Hero;
