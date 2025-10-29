function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center min-h-screen bg-gray-950 text-white px-6"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-indigo-400">
        Hi, I'm Khaled 👋
      </h1>

      <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
        Full Stack Developer & Graphic Designer — I build fast, scalable web apps and craft stunning visual designs that help businesses stand out.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-200"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
        >
          Contact Me    
        </a>
      </div>
    </section>
  );
}

export default Hero;
