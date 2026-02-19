import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ArrowLeft } from "lucide-react";

const categories = [
  {
    name: "Femenino",
    km: "3 kilometros",
    genero: "Femenino",
    link: "https://forms.gle/JFT3c6FqdoN6ft6q9",
  },
  {
    name: "Femenino",
    km: "5 kilometros",
    genero: "Femenino",
    link: "https://forms.gle/JFT3c6FqdoN6ft6q9",
  },
  {
    name: "Femenino",
    km: "10 kilometros",
    genero: "Femenino",
    link: "https://forms.gle/JFT3c6FqdoN6ft6q9",
  },
  {
    name: "Hombres recreativo",
    km: "10 kilometros",
    genero: "Masculino",
    link: "https://forms.gle/JFT3c6FqdoN6ft6q9",
  },
];

const Nobsa: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-feminine-lavender via-white to-feminine-lightPink">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="tertiary"
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center"
        >
          <ArrowLeft size={18} className="mr-2" /> Volver al Inicio
        </Button>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img
              src="https://i.postimg.cc/qvqt4Fjq/Nobsa-Centro.png"
              alt="Carrera de la Mujer Nobsa"
              className="rounded-lg shadow-lg w-full max-w-3xl"
            />
          </div>

          {/* Sección de Categorías */}
          <div className="mb-8">
            <h2
              style={{ fontFamily: "Betterlett" }}
              className="text-6xl text-feminine-purple mb-8 text-center"
            >
              Categorías
            </h2>

            {/* 🔹 SECCIÓN MUJERES */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-center mb-6 text-feminine-pink">
                Mujeres
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories
                  .filter((cat) => cat.genero === "Femenino")
                  .map((category, index) => (
                    <div
                      key={index}
                      className="bg-feminine-lightPink/20 p-8 rounded-xl shadow-md text-center"
                    >
                      <p className="text-4xl font-bold text-feminine-purple">
                        {category.km}
                      </p>
                      <button title="">
                        <a
                          href={category.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 bg-feminine-pink hover:bg-feminine-purple text-white font-semibold px-6 py-3 rounded-lg shadow transition transform hover:scale-105"
                        >
                          Inscribirse
                          {/* <span className="absolute top-1/2 left-0 w-full bg-red-500 text-white text-xs font-bold py-1 transform -rotate-12 -translate-y-1/2 text-center">
                          Inscripciones cerradas
                        </span> */}
                        </a>
                      </button>
                    </div>
                  ))}
              </div>
            </div>

            {/* 🔹 SECCIÓN HOMBRES */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-6 text-blue-600">
                Hombres
              </h3>

              <div className="flex justify-center">
                {categories
                  .filter((cat) => cat.genero === "Masculino")
                  .map((category, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 p-8 rounded-xl shadow-md text-center"
                    >
                      <p className="text-4xl font-bold text-blue-700">
                        {category.km}
                      </p>

                      <a
                        href={category.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-feminine-lightPink2 hover:bg-feminine-purple text-white font-semibold px-6 py-3 rounded-lg shadow transition transform hover:scale-105"
                      >
                        Inscribirse
                        {/* <span className="absolute top-1/2 left-0 w-full bg-red-500 text-white text-xs font-bold py-1 transform -rotate-12 -translate-y-1/2 text-center">
                          Inscripciones cerradas
                        </span> */}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Sección del Mapa del Recorrido */}
          <div className="mt-12">
            <h2
              style={{ fontFamily: "Betterlett" }}
              className="text-5xl text-feminine-purple mb-4 text-center"
            >
              Mapa del Recorrido
            </h2>
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/QN1Y5WnJ/Nobsa.png"
                height="100"
                className="rounded-lg shadow-lg"
                alt="Mapa del recorrido de la carrera de la mujer Nobsa"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nobsa;
