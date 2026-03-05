import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ArrowLeft } from "lucide-react";

const categories = [
  {
    name: "Femenino",
    km: "3 Kilómetros",
    genero: "Femenino",
    link: "https://forms.gle/vpkFTUnpknL4eEYd8",
  },
  {
    name: "Femenino",
    km: "5 Kilómetros",
    genero: "Femenino",
    link: "https://forms.gle/8WpvAcZb9x7chq3s8",
  },
  {
    name: "Femenino",
    km: "10 Kilómetros",
    genero: "Femenino",
    link: "https://forms.gle/JFT3c6FqdoN6ft6q9",
  },
  {
    name: "Hombres recreativo",
    km: "10 Kilómetros",
    genero: "Masculino",
    link: "https://forms.gle/3LKZtFmmBhvrqs9i6",
  },
  {
    name: "Kids",
    km: "1.5 Kilómetros",
    genero: "Ambos generos",
    link: "https://forms.gle/3LKZtFmmBhvrqs9i6",
  },
  {
    name: "Discapacidad",
    km: "1.5 Kilómetros",
    genero: "Ambos generos",
    link: "https://forms.gle/3LKZtFmmBhvrqs9i6",
  },
];

const Nobsa: React.FC = () => {
  const navigate = useNavigate();

  const mujeres = categories.filter((cat) => cat.genero === "Femenino");
  const hombres = categories.filter((cat) => cat.genero === "Masculino");
  const especiales = categories.filter(
    (cat) => cat.genero === "Ambos generos"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fad785] via-[#e44697] to-[#4c3094] py-12">
      <div className="container mx-auto px-4">
        
        <Button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
        >
          <ArrowLeft size={18} className="mr-2" /> Volver al Inicio
        </Button>

        <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto">
          
          {/* Banner */}
          <div className="flex justify-center mb-10">
            <img
              src="https://i.postimg.cc/c18gwdhS/Banner-Nobsa-es-mujer-2026-jpg.jpg"
              alt="Carrera de la Mujer Nobsa"
              className="rounded-2xl shadow-xl w-full max-w-4xl"
            />
          </div>

          {/* TÍTULO */}
          <h2
            style={{ fontFamily: "Betterlett" }}
            className="text-6xl text-feminine-purple mb-12 text-center"
          >
            Categorías
          </h2>

          {/* MUJERES */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-feminine-pink">
              Mujeres
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mujeres.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#f3e8ff] p-8 rounded-2xl shadow-lg text-center transform transition hover:scale-105"
                >
                  <p className="text-4xl font-bold text-feminine-purple">
                    {category.km}
                  </p>

                  <a
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-feminine-pink hover:bg-feminine-purple text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition"
                  >
                    Inscribirse
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* HOMBRES */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-feminine-purple">
              Hombres (Recreativo)
            </h3>

            <div className="flex justify-center">
              {hombres.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#e0f2ff] p-8 rounded-2xl shadow-lg text-center transform transition hover:scale-105"
                >
                  <p className="text-4xl font-bold text-[#3392d0]">
                    {category.km}
                  </p>

                  <a
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-[#3392d0] hover:bg-[#4c3094] text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition"
                  >
                    Inscribirse
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ESPECIALES (Kids + Discapacidad) */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-feminine-pink">
              Categorías Especiales
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {especiales.map((category, index) => {
                const isKids = category.name === "Kids";

                return (
                  <div
                    key={index}
                    className={`p-8 rounded-2xl shadow-xl text-center transition transform hover:scale-105
                    ${
                      isKids
                        ? "bg-gradient-to-r from-[#fad785] via-[#fdb556] to-[#f05d77] text-white"
                        : "bg-gradient-to-r from-[#754e9f] to-[#372773] text-white"
                    }`}
                  >
                    <p
                      className={`text-4xl font-bold ${
                        isKids ? "text-white drop-shadow-lg" : ""
                      }`}
                    >
                      {category.name}
                    </p>

                    <p className="text-2xl mt-2">{category.km}</p>

                    <a
                      href={category.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 font-semibold px-8 py-3 rounded-xl shadow-lg transition"
                      
                      
                    >
                      Inscribirse
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MAPA */}
          <div className="mt-20">
            <h2
              style={{ fontFamily: "Betterlett" }}
              className="text-5xl text-feminine-purple mb-6 text-center"
            >
              Mapa del Recorrido
            </h2>

            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/QN1Y5WnJ/Nobsa.png"
                className="rounded-2xl shadow-2xl max-w-full md:max-w-3xl"
                alt="Mapa del recorrido"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nobsa;