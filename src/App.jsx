import './App.css'

import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'

// npm i react-router-dom

// useEffect vs useLayoutEffect (Advanced)

// why rem is used over pixel (Intermediate, Good to Know for Beginners)

// CSS Logical Properties (Advanced)

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />

        <Route path='*' Component={Notfound} />
      </Routes>
      <Footer />
    </>
  )
}

export default App