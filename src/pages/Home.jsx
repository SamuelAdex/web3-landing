
import Building from '../components/Building'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Platforms from '../components/Platforms'
import Stats from '../components/Stats'

const Home = ()=> {

  return (
    <main className=''>
      <Header />
      <Hero />
      <Stats />
      <Platforms />

      <Building />
      <Footer />
    </main>
  )
}

export default Home
