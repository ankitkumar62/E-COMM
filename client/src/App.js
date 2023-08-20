import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/ProductAdd';
import Contact from './components/contact';
import Nav from './components/Nav'
import Signup from './components/SignUp';
import Login from './components/login';
import Footer from './components/footer';
import Private from './components/Private'
function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route element={<Private/>}>
         <Route path='/' element={<Home/>} />
         <Route path='/About' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/Add-product' element={<Product/>} />
         </Route>
         
         <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<Signup/>} />

      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
