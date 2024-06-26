import './App.css'
import Home from './pages/home';
import Header from './components/header';
import Register from './pages/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer';
function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
