import './App.css' 
import velasImg from './assets/velas.jpg.webp'


function App() {
  

  return (
    <>
      <section id="center">
        <div className="hero">
        
        <img src={velasImg} alt="imagen de velas"/>
        </div>
        <div>
          <h1>Velas artesanales</h1>
          <p>
          velas hechas para crear momentos especiales, creamos velas con diferentes aromas 
          para acompañar tus días y darle un ambiente agradable a tu hogar.
          </p>
        </div>
        
      </section>

      

      
       

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
