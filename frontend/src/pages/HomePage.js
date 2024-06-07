import React, { useState } from "react";
import SelectionModal from "../components/SelectionModal";
import heroImage from "../images/blake-verdoorn-cssvEZacHvQ-unsplash.jpg";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Bienvenido a Dejo Aromas
          </h1>
          <p className="text-xl mb-8 drop-shadow-lg">
            Explora la esencia de la elegancia y el lujo
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            Explorar Aromas
          </button>
        </div>
      </section>

      {/* Informative Sections */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Nuestros Valores
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v8m0 0l-4-4m4 4l4-4M4 12H2a10 10 0 0120 0h-2m-2 0H6m0 0L5.5 4.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Innovación
                </h3>
                <p className="text-gray-600">
                  Nos esforzamos por estar siempre a la vanguardia de la
                  industria de fragancias.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Calidad
                </h3>
                <p className="text-gray-600">
                  Utilizamos solo los mejores ingredientes para crear nuestras
                  fragancias únicas.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v8m-4-4h8"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sostenibilidad
                </h3>
                <p className="text-gray-600">
                  Comprometidos con prácticas sostenibles y respetuosas con el
                  medio ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Galería</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Gallery 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/600x400"
              alt="Gallery 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/600x400"
              alt="Gallery 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/600x400"
              alt="Gallery 4"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/600x400"
              alt="Gallery 5"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/600x400"
              alt="Gallery 6"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Testimonios
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-4">
                "Increíbles fragancias y excelente servicio. Dejo Aromas nunca
                decepciona."
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                - Cliente Satisfecho
              </h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-4">
                "Cada aroma es único y de alta calidad. No puedo recomendarlo lo
                suficiente."
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                - Cliente Fiel
              </h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-4">
                "Desde que descubrí Dejo Aromas, no he vuelto a otra marca.
                Simplemente los mejores."
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                - Cliente Leal
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Descubre tu aroma perfecto
          </h2>
          <p className="text-lg text-white mb-8">
            Explora nuestra amplia gama de fragancias y encuentra la que mejor
            se adapte a tu estilo.
          </p>
          <button
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Comienza Ahora
          </button>
        </div>
      </section>

      {/* Selection Modal */}
      <SelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default HomePage;
