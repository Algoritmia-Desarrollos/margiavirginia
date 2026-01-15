import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sobre Mí - Virginia González Scherer',
  description: 'Coach de Bienestar & Alquimia Ayurvédica. Mi misión es acompañarte a reconectar con tu Naturaleza.',
}

export default function SobreMi() {
  return (
    <>
      <Navbar />
      
      <header className="hero-section fade-in">
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <span className="hero-tag">Conoce mi historia</span>
            <h1 className="hero-title">Coach de Bienestar <br /> Alquimia Ayurvédica</h1>
        </div>
      </header>

      <main className="container fade-in">
        <div className="about-content visible">
            <p className="about-text">
                "Mi camino comenzó con una búsqueda personal: entender que el bienestar no es un
                destino, sino una forma de caminar. Después de descubrir el poder transformador del
                Ayurveda, comprendí que la verdadera sanación no ocurre en la mente, sino en la
                integración de nuestros ritmos biológicos con nuestro propósito espiritual.
            </p>
            <p className="about-text">
                Hoy, mi misión es acompañarte a reconectar con tu Naturaleza. A través de la nutrición
                consciente, el equilibrio del Agni y el cuidado del sistema nervioso, te brindo las
                herramientas para que tu cuerpo deje de vivir en alerta y se convierta en el hogar fértil
                donde tus sueños puedan manifestarse.
            </p>
            <p className="about-text highlight-text">
                No es más esfuerzo, es más conciencia. ¡Hagamos este camino juntas!"
            </p>
        </div>
      </main>

      <Footer />
    </>
  )
}
