
import { useEffect, useState } from 'react'
import Building from '../components/Building'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Platforms from '../components/Platforms'
import Stats from '../components/Stats'
import Register from './Register'
import trustLogo from '../assets/img/trustLogo.png'

const Home = () => {
  const [splash, setSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.8s, then hide completely at 2.3s
    const fadeTimer = setTimeout(() => setFadeOut(true), 6800);
    const hideTimer = setTimeout(() => setSplash(false), 8300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* Splash Screen */}
      {splash && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500"
          style={{ opacity: fadeOut ? 0 : 1, pointerEvents: fadeOut ? 'none' : 'auto' }}
        >
          <img
            src={trustLogo}
            alt="Trust Wallet"
            className="w-[160px] animate-pulse"
          />
        </div>
      )}

      <main className='min-h-screen bg-white'>
        <Header />
        <div className="md:mt-0 mt-0">
          <Register />
        </div>
        {/* <Hero /> */}
        {/* <Stats /> */}
        {/* <Platforms /> */}

        {/* <Building /> */}
        {/* <Footer /> */}
      </main>
    </>
  )
}

export default Home
