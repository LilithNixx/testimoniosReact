import React from 'react';
import '../src/App.css';
import Testimonio from '../src/Testimonio';

const testimonios = [
  {
    nombre: 'Shawn Wang',
    pais: 'Singapur',
    imagen: 'testimonioShawn',
    cargo: 'Ingeniero de Software',
    empresa: 'Amazon',
    testimonio: 'Da miedo cambiar de carrera. Sólo gané confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas. Este curso cambió mi vida'
  },
  {
    nombre: 'Sarah Chima',
    pais: 'Suecia',
    imagen: 'testimonioSarah',
    cargo: 'Ingeniera en Sistemas',
    empresa: 'Chatdesk',
    testimonio: 'Fue complicado al comienzo encontrar un camino en medio de tantas tecnologias. Me sentí abrumada hasta que encontré este curso que cambió mi vida. Me dio una perspectiva de qué es lo que podía interesarme y me orientó en un camino específico'
  },
  {
    nombre: 'Emma Bostniak',
    pais: 'Rusia',
    imagen: 'testimonioEmma',
    cargo: 'programadora Junior',
    empresa: 'Spotify',
    testimonio: 'Gracias a este curso pude conseguir un trabajo de lo que me gusta y no tengo palabras para agradecerles por eso. Me dieron una oportunidad que pocos tienen.'
  }
]


class App extends React.Component { 
  
  render() {
    return (
      <div className="App">
       <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos:</h1>
          {
            testimonios.map(testimonio => {
              return <Testimonio 
              nombre={testimonio.nombre}
              pais={testimonio.pais}
              imagen={testimonio.imagen}
              cargo={testimonio.cargo}
              empresa={testimonio.empresa}
              testimonio={testimonio.testimonio}
              />
            })
            
          }
       </div>
      </div>
    );
  }
}
export default App;
