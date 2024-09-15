import React from 'react';
import Home from './pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mountain from './pages/Mountain';
import Footer from './components/Footer';
import Contact from './styles/Contact';
import About from './components/About';
import Blog from './components/Blog';

function App() {
  return (
    <BrowserRouter>
    <>
    <GlobalStyles />
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mountain' element={<Mountain/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer /> 
    </>

    </BrowserRouter>
  );
}

export default App;
