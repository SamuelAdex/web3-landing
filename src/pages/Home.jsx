
import Building from '../components/Building'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Platforms from '../components/Platforms'
import Stats from '../components/Stats'
import Register from './Register'

const Home = ()=> {

  return (
    <main className=''>
      <Header />
      <div className="mt-28">
        <Register />
      </div>
      {/* <Hero /> */}
      {/* <Stats /> */}
      {/* <Platforms /> */}

      <Building />
      {/* <Footer /> */}
    </main>
  )
}

export default Home
