const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-white to-purple-300 text-gray-800">
      <h1 className="text-6xl font-bold text-pink-600">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Página no encontrada</h2>
      <p className="mt-4 text-lg text-gray-600">
        Lo sentimos, la página que buscas no existe.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
      >
        Volver al inicio
      </a>
    </div>
  );
};

export default NotFound;
