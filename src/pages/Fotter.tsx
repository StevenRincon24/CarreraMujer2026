const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#4c3094]/70 via-[#923094]/85 to-[#e44697]/85 text-white">
      {" "}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Logo Evento */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://i.postimg.cc/rprV8cTg/Cabezote-Web-Carrera-Mujer-04.png"
            alt="Logo Nobsa es Mujer"
            className="h-20 hover:scale-105 transition duration-300"
          />
        </div>

        {/* Logo Institucional */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://i.postimg.cc/pr1mFYdR/Logo.png"
            alt="Logo Institucional"
            className="h-20 hover:scale-105 transition duration-300"
          />
        </div>
      </div>
      {/* Línea decorativa inferior */}
      <div className="mt-8 h-[2px] bg-gradient-to-r from-[#fad785] via-[#e44697] to-[#3392d0] opacity-70"></div>
      {/* Texto opcional */}
      <p className="text-center text-sm mt-4 text-white/80">
        © 2026 Nobsa es Mujer · Todos los derechos reservados
      </p>
      <br />
    </footer>
  );
};

export default Footer;
