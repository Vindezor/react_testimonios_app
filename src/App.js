import './App.css';
import Testimonio from './components/Testimonio'
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Emma Bostian'
          imagen='emma'
          pais='Suecia'
          cargo='Software Engineer'
          empresa='Spotify'
          testimonio={<React.Fragment>I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify.</React.Fragment>}/>
        <Testimonio 
          nombre='Shawn Wang'
          imagen='shawn'
          pais='Singapore'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio={<React.Fragment>It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <strong>freeCodeCamp changed my life.</strong></React.Fragment>}/>
        <Testimonio 
          nombre='Sarah Chima'
          imagen='sarah'
          pais='Nigeria'
          cargo='Software Engineer'
          empresa='ChatDesk'
          testimonio={<React.Fragment><strong>freeCodeCamp was the gateway to my career</strong> as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.</React.Fragment>}/>
      </div>
    </div>
  );
}

export default App;
