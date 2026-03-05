import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ArrowLeft } from "lucide-react";

// Agregamos el campo 'km' a hombres para el nuevo diseño de tarjeta
const categories = [
  {
    name: "Femenino 3K",
    genero: "Femenino",
    link: "https://forms.gle/vpkFTUnpknL4eEYd8",
    img: "https://i.postimg.cc/25yWQ4wC/Iconos_03.png",
  },
  {
    name: "Femenino 5K",
    genero: "Femenino",
    link: "https://forms.gle/8WpvAcZb9x7chq3s8",
    img: "https://i.postimg.cc/8CcvRhHs/Iconos_04.png",
  },
  {
    name: "Femenino 10K",
    genero: "Femenino",
    link: "https://forms.gle/JFT3c6FqdoN6ft6q9",
    img: "https://i.postimg.cc/zfvhCnjV/Iconos_05.png",
  },
  {
    name: "Hombres recreativo",
    km: "10 Kilómetros", // Añadimos los KM aquí
    genero: "Masculino",
    link: "https://forms.gle/3LKZtFmmBhvrqs9i6",
    // Ya no necesitamos 'img' circular aquí, usaremos la imagen de la tarjeta
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
  const especiales = categories.filter((cat) => cat.genero === "Ambos generos");

  // Componente reutilizable para el Círculo (SOLO PARA MUJERES AHORA)
  const CircularCategory = ({ cat }: { cat: (typeof categories)[0] }) => (
    <div className="flex flex-col items-center">
      <a
        href={cat.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
      >
        <div className="relative w-48 h-48 md:w-56 md:h-56 transition-transform duration-300 group-hover:scale-110">
          <img
            src={cat.img}
            alt={cat.name}
            className="w-full h-full object-contain"
          />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-full">
            <span className="text-white font-bold text-xl drop-shadow-md text-center px-2">
              Inscríbete
            </span>
          </div>
        </div>
      </a>
      {/* Las mujeres no tienen 'km' en los datos, si quieres mostrarlo, añádelo a los datos */}
    </div>
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
          <div className="flex justify-center mb-10">
            <img
              src="https://i.postimg.cc/bwSVmhrk/Cabezotr.jpg"
              alt="Carrera de la Mujer Nobsa"
              className="rounded-2xl shadow-xl w-full max-w-4xl"
            />
          </div>

          <h2
            style={{ fontFamily: "Betterlett" }}
            className="text-6xl text-feminine-purple mb-12 text-center"
          >
            Categorías
          </h2>

          {/* SECCIÓN MUJERES (Siguen siendo CIRCULARES) */}
          <div className="mb-16">
            <h3
              style={{ fontFamily: "SugoTrial" }}
              className="text-4xl font-bold text-center mb-10 text-feminine-pink"
            >
              Mujeres
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
              {mujeres.map((cat, i) => (
                <CircularCategory key={i} cat={cat} />
              ))}
            </div>
          </div>

          {/* SECCIÓN HOMBRES */}
          <div className="mb-10">
            <h3
              style={{ fontFamily: "SugoTrial" }}
              className="text-4xl font-bold text-center mb-10 text-feminine-purple"
            >
              Hombres (Recreativo)
            </h3>

            <div className="flex justify-center w-full px-4">
              {hombres.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* Cambié max-w-sm por max-w-[280px] para que sea notablemente más pequeña */
                  className="p-6 rounded-2xl shadow-lg text-center transition transform hover:scale-105 block bg-white border border-gray-100 max-w-[280px] w-full"
                >
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src="https://i.postimg.cc/288m0TsZ/10k-Hombres.png"
                      alt="Hombres 10K"
                      /* Reducimos el tamaño de la imagen interna */
                      className="w-full max-w-[150px] object-contain"
                    />

                    <div className="flex flex-col items-center">
                      <p className="text-2xl font-bold text-feminine-purple leading-tight">
                        {category.name}
                      </p>
                      
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="inline-block bg-[#2563eb] text-white text-sm border-2 border-[#2563eb] px-6 py-1.5 rounded-lg font-semibold hover:bg-white hover:text-[#2563eb] transition-all shadow-sm">
                      Inscríbete
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ESPECIALES (Mantienen su diseño original de tarjetas) */}
          <div className="mb-10">
            <h3
              style={{ fontFamily: "SugoTrial" }}
              className="text-4xl font-bold text-center mb-8 text-feminine-pink"
            >
              Categorías Especiales
            </h3>

            {/* Contenedor Flex para centrar y ajustar tamaño */}
            <div className="flex flex-wrap justify-center gap-6 px-4">
              {especiales.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-2xl shadow-lg text-center transition transform hover:scale-105 block w-full max-w-[280px]
          ${
            category.name === "Kids"
              ? "bg-gradient-to-br from-[#fad785] via-[#fdb556] to-[#f05d77] text-white"
              : "bg-gradient-to-br from-[#754e9f] to-[#372773] text-white"
          }`}
                >
                  <div className="flex flex-col items-center gap-4">
                    {/* Imagen de la Categoría */}
                    <img
                      src={
                        category.name === "Kids"
                          ? "https://i.postimg.cc/6QspbnVH/Kids-1-5K.png"
                          : "https://i.postimg.cc/288m0TsZ/10k-Hombres.png"
                      }
                      alt={category.name}
                      className="w-full max-w-[140px] h-32 object-contain"
                    />

                    
                  </div>

                  <div className="mt-5">
                    <span className="inline-block border-2 border-white/50 bg-white/10 px-6 py-1.5 rounded-xl text-sm font-semibold hover:bg-white hover:text-current transition-all shadow-sm">
                      Inscríbete
                    </span>
                  </div>
                </a>
              ))}
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
