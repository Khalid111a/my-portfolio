function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-gray-900 text-gray-300 py-20 px-6 md:px-16 flex flex-col items-center text-center"
    >
      <h2 className="text-4xl font-bold text-indigo-400 mb-8">
        About Me
      </h2>

      <p className="max-w-3xl text-lg leading-relaxed mb-10">
        I'm <span className="text-white font-semibold">Khaled AlKamel</span> — a
        <span className="text-indigo-400 font-medium"> Full Stack Developer </span>
        and <span className="text-indigo-400 font-medium">Graphic Designer</span> with
        <span className="text-white font-medium"> 8+ years of experience</span>.
        crafting elegant, scalable web applications and powerful visual identities.
        <br />
        <br />
        I combine technical expertise with creativity — building digital experiences that are
        not only functional but also visually stunning. My goal is to help businesses grow by
        turning complex problems into elegant solutions.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-indigo-500/30 transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-indigo-400 mb-3">💻 Development</h3>
          <p className="text-gray-400 text-sm">
            React, Laravel, WordPress, Node.js, and APIs. I build fast, secure, and responsive web apps.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-indigo-500/30 transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-indigo-400 mb-3">🎨 Design</h3>
          <p className="text-gray-400 text-sm">
            Logos, Branding, UI/UX, and illustrations. Creating visually impactful designs that tell stories.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-indigo-500/30 transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-indigo-400 mb-3">🚀 Mindset</h3>
          <p className="text-gray-400 text-sm">
            Transparent communication, on-time delivery, and a long-term partnership mindset.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
