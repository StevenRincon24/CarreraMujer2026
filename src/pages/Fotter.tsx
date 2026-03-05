const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#4c3094]/70 via-[#923094]/85 to-[#e44697]/85 text-white">
      {" "}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
        {/* Logo Evento */}
        <img
          src="https://i.postimg.cc/X7b9R6s9/logos-Footer.png"
          alt="Logo Nobsa es Mujer"
          className=" w-[50%] item-center mx-auto"
        />
      </div>
      {/* Línea decorativa inferior */}
      <div className="h-[2px] bg-gradient-to-r from-[#fad785] via-[#d8cccc] to-[#3392d0] opacity-70"></div>
      {/* Texto opcional */}
      <p className="text-center text-sm mt-4 text-white/80">
        © 2026 Nobsa es Mujer · Todos los derechos reservados
      </p>
      <br />
    </footer>
  );
};

export default Footer;
