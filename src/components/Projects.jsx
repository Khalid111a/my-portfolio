function Projects() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description:
        "A full-featured online store admin dashboard built with React, Laravel, and REST APIs for analytics, orders, and products.",
      image: "https://cdn.dribbble.com/userupload/13717421/file/original-08b2b8f3a5.png?resize=400x300",
      link: "#",
      tech: ["React", "Laravel", "API"],
    },
    {
      title: "SaaS Analytics Platform",
      description:
        "A scalable analytics web app for startups to monitor performance metrics and visualize growth using charts and dashboards.",
      image: "https://cdn.dribbble.com/userupload/14410553/file/original-11a98d9a5f.png?resize=400x300",
      link: "#",
      tech: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "Brand Identity — TechFlow",
      description:
        "Complete brand identity and visual design for a SaaS company, including logo, color palette, and marketing materials.",
      image: "https://cdn.dribbble.com/userupload/14011774/file/original-cb7df7b02a.png?resize=400x300",
      link: "#",
      tech: ["Illustrator", "Photoshop"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-950 text-gray-300 py-20 px-6 md:px-16 text-center"
    >
      <h2 className="text-4xl font-bold text-indigo-400 mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-indigo-400 border border-indigo-500 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-lg transition duration-200"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
