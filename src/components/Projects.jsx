import { useEffect, useMemo, useState } from "react";

// ✅ 1) change this
const GITHUB_USERNAME = "Khalid111a";

// ✅ 2) (optional) add images for some repos only
// repo name must match GitHub repo "name"
const projectImages = {
  "oi-chart-bot": [
    // put your local images here later (optional)
    // example:
    // require("../assets/projects/oi1.png"),
    // require("../assets/projects/oi2.png"),
  ],
  "dotcore-chat": [],
  "echo-contact-relay": [],
};


const EXCLUDED_REPOS = [
  "practice",
  "platformiq",        
  "french-transitions-qa" 
];


function Slider({ images, title }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  useEffect(() => {
    setIndex(0);
  }, [title]);

  if (!images || images.length === 0) {
    return (
      <div className="h-44 bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
        No screenshots yet
      </div>
    );
  }

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="relative h-44 bg-gray-800">
      <img
        src={images[index]}
        alt={`${title} screenshot ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center transition"
            aria-label="Previous image"
            type="button"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center transition"
            aria-label="Next image"
            type="button"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-indigo-400" : "bg-white/30"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function RepoCard({ repo }) {
  const images = projectImages[repo.name] || [];

  return (
    <div className="bg-gray-900/60 border border-white/5 rounded-2xl overflow-hidden shadow-md hover:shadow-indigo-500/20 transition duration-300 transform hover:-translate-y-1">
      <Slider images={images} title={repo.name} />

      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-white">{repo.name}</h3>

        <p className="text-gray-400 text-sm mt-2 leading-relaxed min-h-[40px]">
          {repo.description || "No description yet."}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {repo.language && (
            <span className="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/20">
              {repo.language}
            </span>
          )}

          {repo.private ? (
            <span className="text-xs bg-red-500/10 text-red-300 px-3 py-1 rounded-full border border-red-500/20">
              Private
            </span>
          ) : (
            <span className="text-xs bg-green-500/10 text-green-300 px-3 py-1 rounded-full border border-green-500/20">
              Public
            </span>
          )}
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="border border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            GitHub
          </a>

          {repo.homepage && repo.homepage.trim() !== "" && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        // ✅ fetch ALL repos (up to 100 per page)
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        const data = await res.json();

        // filter out forks (optional)
        const clean = Array.isArray(data)
          ? data.filter(
            (r) =>
              !r.fork &&
              !EXCLUDED_REPOS.includes(r.name)
          )
          : [];

        setRepos(clean);
      } catch (e) {
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return repos;
    return repos.filter((r) => {
      const name = (r.name || "").toLowerCase();
      const desc = (r.description || "").toLowerCase();
      const lang = (r.language || "").toLowerCase();
      return name.includes(s) || desc.includes(s) || lang.includes(s);
    });
  }, [repos, q]);

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-gray-950 text-gray-300 py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-400 mb-3">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            All my GitHub repositories (sorted by last update).
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects (name, language, description)..."
            className="w-full bg-gray-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 outline-none focus:border-indigo-400"
          />
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Loading repositories...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
