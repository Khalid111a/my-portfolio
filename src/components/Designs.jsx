function Designs() {
  const designs = [
    {
      title: "Modern Logo – TechFlow",
      image: "/src/assets/designs/logo1.png",
      tool: "Adobe Illustrator",
    },
    {
      title: "Corporate Business Card",
      image: "/src/assets/designs/businesscard.png",
      tool: "Photoshop",
    },
    {
      title: "Social Media Banner",
      image: "/src/assets/designs/banner1.jpg",
      tool: "Canva Pro",
    },
    
  ];

  return (
    <section
      id="designs"
      className="bg-gray-900 text-gray-300 py-20 px-6 md:px-16 text-center"
    >
      <h2 className="text-4xl font-bold text-indigo-400 mb-12">Design Portfolio</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {designs.map((design, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition duration-300"
          >
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-1">
                {design.title}
              </h3>
              <p className="text-gray-400 text-sm">{design.tool}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Designs;
