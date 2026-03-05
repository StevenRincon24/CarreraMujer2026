import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import Button from "../components/Button";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedEdition, setSelectedEdition] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const galleryImages: Record<number, string[]> = {
    1: [
      "https://i.postimg.cc/SKtQsVrY/12.jpg",
      "https://i.postimg.cc/pXkZpngJ/Foto1.jpg",
      "https://i.postimg.cc/hPKsD038/Foto10.jpg",
      "https://i.postimg.cc/kX7sJyh6/Foto11.jpg",
      "https://i.postimg.cc/TYQ9pWZq/Foto2.jpg",
      "https://i.postimg.cc/xTgRcbWM/Foto3.jpg",
      "https://i.postimg.cc/GhbKLjSX/Foto4.jpg",
      "https://i.postimg.cc/SNmdSGtZ/Foto5.jpg",
      "https://i.postimg.cc/KvmfG5sf/Foto6.jpg",
      "https://i.postimg.cc/fTMCzvgc/Foto7.jpg",
      "https://i.postimg.cc/RVvdSTbL/Foto8.jpg",
      "https://i.postimg.cc/xT95fPFL/Foto9.jpg",
    ],
    2: [
      "https://i.postimg.cc/SKtQsVrY/12.jpg",
      "https://i.postimg.cc/pXkZpngJ/Foto1.jpg",
      "https://i.postimg.cc/hPKsD038/Foto10.jpg",
      "https://i.postimg.cc/kX7sJyh6/Foto11.jpg",
      "https://i.postimg.cc/TYQ9pWZq/Foto2.jpg",
      "https://i.postimg.cc/xTgRcbWM/Foto3.jpg",
      "https://i.postimg.cc/GhbKLjSX/Foto4.jpg",
      "https://i.postimg.cc/SNmdSGtZ/Foto5.jpg",
      "https://i.postimg.cc/KvmfG5sf/Foto6.jpg",
      "https://i.postimg.cc/fTMCzvgc/Foto7.jpg",
      "https://i.postimg.cc/RVvdSTbL/Foto8.jpg",
      "https://i.postimg.cc/xT95fPFL/Foto9.jpg",
    ],
  };

  const openGallery = (edition: number) => {
    setSelectedEdition(edition);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setSelectedEdition(null);
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    if (!selectedEdition) return;
    setCurrentIndex(
      (prev) => (prev + 1) % galleryImages[selectedEdition].length,
    );
  };

  const prevSlide = () => {
    if (!selectedEdition) return;
    setCurrentIndex(
      (prev) =>
        (prev - 1 + galleryImages[selectedEdition].length) %
        galleryImages[selectedEdition].length,
    );
  };

  useEffect(() => {
    if (!selectedEdition) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % galleryImages[selectedEdition].length,
      );
    }, 4000); // cada 4 segundos

    return () => clearInterval(interval);
  }, [galleryImages, selectedEdition]);

  useEffect(() => {
    const targetDate = new Date("2026-03-08T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const segundos = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbb04e]/50 via-[#e44697]/50 to-[#4c3094]/50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center">
          <img
            src="https://i.postimg.cc/c18gwdhS/Banner-Nobsa-es-mujer-2026-jpg.jpg"
            alt="Carrera Nobsa"
            className="w-full bg-cover bg-center rounded-3xl shadow-lg mb-8"
          />
        </header>

        <main>
          {/* Sección Principal */}
          <div className="relative mt-5">
            <div className="absolute -left-20 w-64 h-64 bg-feminine-pink/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-feminine-purple/10 rounded-full blur-3xl"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src="https://i.postimg.cc/jS5z9Q2b/Carrera.jpg"
                    alt="Carrera Nobsa"
                    className="w-full object-contain rounded-2xl shadow-lg mb-8"
                  />
                </div>

                <div className="text-center mb-10">
                  <h2
                    className="text-5xl text-feminine-purple"
                    style={{ fontFamily: "Betterlett" }}
                  >
                    ¡Únete a una experiencia inolvidable!
                  </h2>

                  <p className="text-gray-700 mb-6 text-lg mt-5">
                    Gracias por ser parte de la III Carrera Atlética de la Mujer
                    Nobsa 2026 <b>#MujeresQueTransforman</b> <br />
                    Sé parte de este evento inspirador que celebra la fuerza,
                    determinación y espíritu comunitario de las mujeres del
                    municipio de Nobsa.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <h3>
                    📅 <strong>Fecha:</strong> 14 de marzo
                  </h3>
                  <p className="mt-2">
                    ⏰ <strong>Hora:</strong> Desde las 4:00 p.m
                  </p>
                  <Button className="mt-2" onClick={() => navigate("/nobsa")}>
                    Inscripciones
                  </Button>

                  {/* CONTADOR */}
          <div className="mt-12">
            <h3 className="text-3xl text-feminine-purple font-bold mb-6">
              ⏳ Cuenta regresiva al 8 de marzo
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
              <div className="bg-gradient-to-br from-[#923094] to-[#4c3094] p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">{timeLeft.dias}</p>
                <span>Días</span>
              </div>

              <div className="bg-gradient-to-br from-[#e44697] to-[#923094] p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">{timeLeft.horas}</p>
                <span>Horas</span>
              </div>

              <div className="bg-gradient-to-br from-[#3392d0] to-[#4c3094] p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">{timeLeft.minutos}</p>
                <span>Minutos</span>
              </div>

              <div className="bg-gradient-to-br from-[#f05d77] to-[#e44697] p-6 rounded-xl shadow-xl animate-pulse">
                <p className="text-4xl font-bold">{timeLeft.segundos}</p>
                <span>Segundos</span>
              </div>
            </div>
          </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premiación */}
          <div className="relative mt-5 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h2
                className="text-4xl text-feminine-purple"
                style={{ fontFamily: "Betterlett" }}
              >
                🏅 Premiación 🏅
              </h2>
              <p className="text-lg text-feminine-pink max-w-2xl mx-auto mt-4 font-semibold">
                🥇🥈🥉 Premios para los tres primeros lugares en 3K, 5K y 10K.
              </p>
            </div>
          </div>

          {/* Reglamentación */}
          <div className="relative bg-white/80 mt-5 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2
                className="text-5xl md:text-5xl  text-feminine-purple"
                style={{ fontFamily: "Betterlett" }}
              >
                📜 Reglamentación
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-feminine-lavender/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">🏁 Reglas Generales</h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>🏃‍♂️ La carrera termina cuando el atleta cruza la meta.</li>
                  <li>
                    📊 El orden de llegada es determinado por el orden en que
                    los atletas cruzan la línea de meta.
                  </li>
                  <li>
                    ⏱️ El tiempo se mide desde el disparo de salida hasta que el
                    atleta cruza la línea de meta.
                  </li>
                </ul>
              </div>

              <div className="bg-feminine-purple/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">⚠️ Reglas de Penalización</h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>
                    🚷 Si un atleta obstruye o interfiere con otro atleta, puede
                    ser penalizado o descalificado.
                  </li>
                  <li>
                    📍 Si un atleta abandona la ruta designada sin autorización,
                    puede ser descalificado.
                  </li>
                </ul>
              </div>

              <div className="bg-feminine-pink/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">
                  🚨 Reglas de Descalificación
                </h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>
                    🧪 El uso de cualquier sustancia psicoactiva es motivo de
                    descalificación.
                  </li>
                  <li>
                    🙅 Si un atleta se comporta de manera antideportiva, puede
                    ser descalificado.
                  </li>
                  <li>
                    ❌ Si un atleta incumple con alguna de las reglas de
                    competencia, puede ser descalificado.
                  </li>
                </ul>
              </div>

              <div className="bg-feminine-lightPink2/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">🏃 Reglas de Competencia</h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>
                    🚦 Salida: Los atletas deben permanecer detrás de la línea
                    de salida hasta que se dispare el arma de salida.
                  </li>
                  <li>
                    🚫 No se permite obstruir o interferir con otros atletas.
                  </li>
                  <li>
                    🛤️ Ruta: Los atletas deben correr por la ruta designada y no
                    pueden abandonarla sin autorización.
                  </li>
                  <li>
                    🚫 No se permite recibir ayuda externa, como comida, bebida
                    o equipo, durante la carrera.
                  </li>
                  <li>
                    🎽 Los atletas deben utilizar equipo autorizado y no pueden
                    llevar objetos peligrosos.
                  </li>

                  <li>
                    🤝Se espera un comportamiento respetuoso hacia otros
                    atletas, jueces y espectadores.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Historial */}
          <div className="relative bg-white/80 mt-10 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2
              className="text-4xl text-center text-feminine-purple mb-10"
              style={{ fontFamily: "Betterlett" }}
            >
              🏃‍♀️ Revive nuestras ediciones anteriores
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* I Edición */}
              <div
                onClick={() => openGallery(1)}
                className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src="https://i.postimg.cc/qBDVyzV0/Carrera1.jpg"
                  alt="I Carrera"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center p-4">
                  <Images
                    size={40}
                    className="text-white mb-3 animate-bounce"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Ver recuerdos
                  </h3>
                </div>
              </div>

              {/* II Edición */}
              <div
                onClick={() => openGallery(2)}
                className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src="https://i.postimg.cc/jS5z9Q2b/Carrera.jpg"
                  alt="II Carrera"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center p-4">
                  <Images
                    size={40}
                    className="text-white mb-3 animate-bounce"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Ver recuerdos
                  </h3>
                </div>
              </div>

              {/* III Edición */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://i.postimg.cc/vmbSpsFq/Carrera3.jpg"
                  alt="III Carrera"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold animate-pulse">
                    ✨ Espérala 2026 ✨
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MODAL SLIDER */}
          {selectedEdition && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
              <div className="relative w-full max-w-5xl">
                <button
                  onClick={closeGallery}
                  className="absolute -top-12 right-0 text-white"
                >
                  <X size={30} />
                </button>

                <div className="relative bg-black rounded-2xl shadow-2xl flex items-center justify-center h-[80vh]">
                  <img
                    src={galleryImages[selectedEdition][currentIndex]}
                    alt="Slide"
                    className="max-h-full max-w-full object-contain transition-opacity duration-700"
                  />

                  <button
                    onClick={prevSlide}
                    className="absolute left-4 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-4 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg"
                  >
                    <ChevronRight />
                  </button>
                </div>

                <div className="flex justify-center mt-4 gap-2">
                  {galleryImages[selectedEdition].map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentIndex ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;
