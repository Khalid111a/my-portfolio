function Navbar() {
  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-gray-900 text-gray-200 shadow-lg fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
        Khaled.dev
      </h1>

      <ul className="flex gap-8 text-sm font-medium">
        <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
        <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
