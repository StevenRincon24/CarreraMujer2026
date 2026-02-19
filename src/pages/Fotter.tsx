const Footer = () => {
  return (
    <footer className="bg-feminine-lightPink  text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 text-center">
        {/* Sección Izquierda */}
        <div className="flex flex-col items-center justify-center h-full text-center md:text-left">
          <img
            src="https://i.postimg.cc/rprV8cTg/Cabezote-Web-Carrera-Mujer-04.png"
            alt="Logo"
            className="h-20 hover:scale-105 transition duration-300"
          />
        </div>

        {/* Sección Derecha */}
        <div className="flex flex-col items-center justify-center h-full text-center md:text-left space-y-2">
          <img
            src="https://i.postimg.cc/pr1mFYdR/Logo.png"
            alt="Logo"
            className="h-20 hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
