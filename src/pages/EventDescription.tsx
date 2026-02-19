import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowLeft, Calendar, MapPin, Clock, Users } from 'lucide-react';

const EventDescription: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-feminine-lavender via-white to-feminine-lightPink">
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="tertiary" 
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center"
        >
          <ArrowLeft size={18} className="mr-2" /> Volver al Inicio
        </Button>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-feminine-pink mb-6 text-center">
            Descripción del Evento
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <img 
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Evento de carrera femenina" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Calendar className="text-feminine-purple mr-3" size={24} />
                <div>
                  <h3 className="font-semibold">Fecha</h3>
                  <p>15 de Octubre, 2025</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <MapPin className="text-feminine-purple mr-3" size={24} />
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p>Parque Central de Nobsa</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <Clock className="text-feminine-purple mr-3" size={24} />
                <div>
                  <h3 className="font-semibold">Horario</h3>
                  <p>7:00 AM - Registro</p>
                  <p>8:30 AM - Inicio de Carrera</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="text-feminine-purple mr-3" size={24} />
                <div>
                  <h3 className="font-semibold">Participantes</h3>
                  <p>Mujeres de todas las edades y habilidades</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-feminine-purple mb-4">
              Acerca del Evento
            </h2>
            <p className="mb-4">
              La Segunda Gran Carrera Femenina es una celebración de la fuerza, 
              determinación y espíritu comunitario de las mujeres. Este evento anual 
              reúne a mujeres de Nobsa, Nazareth y comunidades cercanas para un día 
              de competencia amistosa, camaradería y empoderamiento.
            </p>
            <p>
              Las participantes pueden elegir entre una ruta de 5K y 10K, ambas 
              mostrando los hermosos paisajes de nuestra región. La carrera está 
              diseñada para ser inclusiva, dando la bienvenida a mujeres de todos 
              los niveles de condición física y edades.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-feminine-purple mb-4">
              Qué Esperar
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sistema de cronometraje profesional</li>
              <li>Estaciones de hidratación a lo largo de la ruta</li>
              <li>Apoyo médico durante todo el recorrido</li>
              <li>Medallas para todas las participantes</li>
              <li>Premios especiales para ganadoras por categoría</li>
              <li>Celebración post-carrera con música y refrigerios</li>
              <li>Feria comunitaria con emprendedoras locales</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-feminine-purple mb-4">
              Información de Inscripción
            </h2>
            <p className="mb-4">
              Las inscripciones abrirán el 1 de Agosto de 2025. Inscripciones 
              anticipadas estarán disponibles hasta el 1 de Septiembre, con 
              tarifas especiales con descuento.
            </p>
            <p>
              ¡Mantente atenta para más detalles sobre cómo inscribirte y 
              prepararte para este emocionante evento!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;