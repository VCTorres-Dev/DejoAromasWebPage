import React, { useState } from "react";
import SelectionModal from "../components/SelectionModal";
import GalleryItem from "../components/GalleryItem";
import { ReactComponent as LightBulbIcon } from "../icons/lightbulb-alt-svgrepo-com.svg";
import { ReactComponent as StarIcon } from "../icons/star-sharp-svgrepo-com.svg";
import { ReactComponent as GlobeIcon } from "../icons/planet-svgrepo-com.svg";
import "../App.css";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    "/images/HomePage_Images/deanna-alys-xQwRvghauaU-unsplash.jpg",
    "/images/HomePage_Images/killian-cartignies-zbBuJnYftfg-unsplash.jpg",
    "/images/HomePage_Images/laura-chouette-5jhj8_nOjjw-unsplash.jpg",
    "/images/HomePage_Images/laura-chouette-gbT2KAq1V5c-unsplash.jpg",
    "/images/HomePage_Images/laura-chouette-V00C5InglzM-unsplash.jpg",
    "/images/HomePage_Images/olena-bohovyk-GOVTETevRm8-unsplash.jpg",
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-section bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/laura-chouette-bnPdoKs9d54-unsplash.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white bg-black bg-opacity-30">
          <h1 className="text-6xl font-bold mb-4">
            Descubre la esencia del lujo
          </h1>
          <p className="text-2xl mb-8">
            Perfumes con esencias seleccionadas y exclusivas.
          </p>
          <button
            className="bg-gold hover:bg-gold-dark text-white font-bold py-3 px-6 rounded shadow-lg transition-transform transform hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            Explorar Aromas
          </button>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Nuestros Valores
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprometidos con la excelencia y la innovación
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: "Innovación",
                description:
                  "Nos esforzamos por estar siempre a la vanguardia de la industria de fragancias.",
                icon: <LightBulbIcon className="w-12 h-12 text-gold mx-auto" />,
              },
              {
                title: "Calidad",
                description:
                  "Utilizamos solo los mejores ingredientes para crear nuestras fragancias únicas.",
                icon: <StarIcon className="w-12 h-12 text-gold mx-auto" />,
              },
              {
                title: "Sostenibilidad",
                description:
                  "Comprometidos con prácticas sostenibles y respetuosas con el medio ambiente.",
                icon: <GlobeIcon className="w-12 h-12 text-gold mx-auto" />,
              },
            ].map((value) => (
              <div key={value.title} className="value-card">
                {value.icon}
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">Galería</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <GalleryItem key={index} src={src} alt={`Gallery ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Testimonios
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Increíbles fragancias y excelente servicio. Dejo Aromas nunca decepciona.",
                name: "Cliente Satisfecho",
              },
              {
                quote:
                  "Cada aroma es único y de alta calidad. No puedo recomendarlo lo suficiente.",
                name: "Cliente Fiel",
              },
              {
                quote:
                  "Desde que descubrí Dejo Aromas, no he vuelto a otra marca. Simplemente los mejores.",
                name: "Cliente Leal",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <h3 className="text-lg font-bold text-gray-900">
                  - {testimonial.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-16 bg-gold">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Descubre tu aroma perfecto
          </h2>
          <p className="text-lg text-white mb-8">
            Explora nuestra amplia gama de fragancias y encuentra la que mejor
            se adapte a tu estilo.
          </p>
          <button
            className="bg-white text-gold font-bold py-3 px-6 rounded shadow-lg transition-transform transform hover:scale-105"
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
