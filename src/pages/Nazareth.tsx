import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ArrowLeft } from "lucide-react";

const categories = [
  {
    name: "7 - 14 años",
    km: "1.5 km",
    vueltas: "1 vuelta",
    genero: "Femenino",
    link: "https://forms.gle/juTy4t7w7cNsephNA",
  },
  {
    name: "15 - 28 años",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/VnYCR7fsEM31DC2Q9",
  },
  {
    name: "29 - 50 años",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/Z64ZGjJzTSDZyjw7A",
  },
  {
    name: "50 años en adelante",
    km: "1.5 km",
    vueltas: "1 vuelta",
    genero: "Femenino",
    link: "https://forms.gle/BDcNgYVNzTVf6Qgd7",
  },
  {
    name: "Elites (Pro)",
    km: "5 km",
    vueltas: "3 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/VLeBbdwdAC5RQXpU8",
  },
  {
    name: "Sin Límite (Personas en condición de discapacidad) ",
    km: "1.5 km",
    vueltas: "1 vuelta",
    genero: "Femenino",
    link: "https://forms.gle/egsbSh6qebLrn15B7",
  },
  {
    name: "Hombres recreativo",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Masculino",
    link: "https://forms.gle/RCtFPNmpsNG5kjmAA",
  },
];

const Nazareth: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-feminine-lavender via-white to-feminine-lightPink">
      <div className="container mx-auto px-6 py-12">
        <Button
          variant="tertiary"
          onClick={() => navigate("/")}
          className="mb-8 flex items-center text-rose-600"
        >
          <ArrowLeft size={18} className="mr-2" /> Volver al Inicio
        </Button>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img
              src="https://i.postimg.cc/JzFsnQ2q/Barrio-Nazareth.png"
              alt="Carrera de la Mujer Nobsa"
              className="rounded-lg shadow-lg w-full max-w-3xl"
            />
          </div>

          {/* Sección de Categorías */}
          <div className="mb-8">
            <h2
              style={{ fontFamily: "Betterlett" }}
              className="text-6xl  text-feminine-purple mb-4 text-center"
            >
              Categorías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-feminine-lavender/30 p-6 rounded-xl shadow-md text-center "
                >
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className=" mb-1">
                    📏 <strong> Distancia:</strong> {category.km}
                  </p>
                  <p className="mb-1">
                    🔄 <strong>Vueltas:</strong> {category.vueltas}
                  </p>
                  <p className="mb-1">
                    🚻 <strong>Género:</strong> {category.genero}
                  </p>
                  <a className="relative inline-block mt-2 bg-feminine-pink text-white font-semibold px-4 py-2 rounded-lg shadow transition opacity-50 cursor-not-allowed pointer-events-none overflow-hidden">
                     Inscribirse
                     <span className="absolute top-1/2 left-0 w-full bg-red-500 text-white text-xs font-bold py-1 transform -rotate-12 -translate-y-1/2 text-center">
                       Inscripciones cerradas
                     </span>
                   </a>
                </div>
              ))}
            </div>
          </div>

          {/* Sección de Información */}
          <div className="mt-12">
            <h2
              style={{ fontFamily: "Betterlett" }}
              className="text-5xl text-feminine-purple mb-4 text-center"
            >
              Mapa del Recorrido
            </h2>
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/ydSQLJ6B/Nazareth.png"
                height="100"
                className="rounded-lg shadow-lg"
                alt="Mapa del recorrido de la carrera en Nazareth"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nazareth;
