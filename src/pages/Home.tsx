import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Menú superior */}
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Blog de Guillermo Choque Aspiazu</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:text-blue-400">Inicio</a>
            <a href="/catalog" className="hover:text-blue-400">Catálogo</a>
          </nav>
        </div>
      </header>

      {/* Banner principal */}
      <section className="bg-cover bg-center h-72 flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/banner.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h2 className="text-4xl font-bold text-blue-300">El legado de un genio</h2>
          <p className="mt-2 text-lg text-gray-200">Conocimiento abierto para el mundo</p>
        </div>
      </section>

      {/* Presentación */}
      <section className="container mx-auto py-10 px-4">
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">¿Qué encontrarás aquí?</h3>
        <p className="text-gray-300 leading-relaxed">
          Este sitio honra la vida y obra del PhD. Guillermo, difundiendo sus libros, artículos y aportes a la comunidad académica y científica. 
          Todo el contenido está disponible para consulta libre. La plataforma permite explorar fácilmente sus trabajos clasificados por temas.
        </p>
      </section>
    </div>
  );
};

export default Home;
