import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Menú superior */}
      <header className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Guillermo Blog</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-300">Inicio</a></li>
              <li><a href="#" className="hover:text-blue-300">Catálogo</a></li>
              <li><a href="#" className="hover:text-blue-300">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section className="flex-grow bg-cover bg-center" style={{ backgroundImage: 'url(https://assets.entrepreneur.com/content/3x2/2000/1413823428-amazingly-free-stock-websites.jpg?format=pjeg&auto=webp&crop=16:9&width=675&height=380)' }}>
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Un legado de conocimiento</h2>
            <p className="text-xl text-gray-300">Explora la obra académica de Guillermo y sus valiosas contribuciones.</p>
          </div>
        </div>
      </section>

      {/* Descripción breve */}
      <section className="bg-gray-950 py-10 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">¿De qué trata este sitio?</h3>
          <p className="text-gray-300">
            Este espacio reúne los libros, artículos y documentos de investigación que Guillermo ha producido durante su carrera.
            Es una forma de preservar y compartir su legado con estudiantes, investigadores y lectores interesados en su trabajo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-sm text-center py-4">
        © {new Date().getFullYear()} Blog Guillermo | Todos los derechos reservados
      </footer>
    </div>
  );
};

export default Home;
