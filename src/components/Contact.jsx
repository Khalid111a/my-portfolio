function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-gray-300 py-20 px-6 md:px-16 text-center"
    >
      <h2 className="text-4xl font-bold text-indigo-400 mb-8">Contact Me</h2>
      <p className="max-w-2xl mx-auto text-gray-400 mb-12">
        Let’s build something amazing together! Whether you need a web app, 
        brand design, or a complete digital solution — I’d love to collaborate.
      </p>

      {/* 🔹 Social Links Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <a
          href="mailto:khaledm7060110@gmail.com"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          📧 Email
        </a>
        <a
          href="https://www.linkedin.com/in/alkamelnd"
          target="_blank"
          rel="noreferrer"
          className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-5 py-2 rounded-lg transition"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-5 py-2 rounded-lg transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://www.behance.net/"
          target="_blank"
          rel="noreferrer"
          className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-5 py-2 rounded-lg transition"
        >
          🎨 Behance
        </a>
        <a
          href="https://www.freelancer.com/u/khaledm7060110"
          target="_blank"
          rel="noreferrer"
          className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-5 py-2 rounded-lg transition"
        >
          💼 Freelancer
        </a>
      </div>

      {/* 🔹 Simple Message Form (optional) */}
      <form
        action="https://formspree.io/f/mqkwzvzd" // استبدل هذا باللينك الخاص بك من formspree.io
        method="POST"
        className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:outline-none text-white"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:outline-none text-white"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:outline-none text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition duration-200"
        >
          Send Message
        </button>
      </form>

      {/* 🔹 Footer */}
      <p className="mt-15 text-gray-500 text-sm">
        © {new Date().getFullYear()} Khaled AlKamel — All Rights Reserved.
      </p>
    </section>
  );
}

export default Contact;
