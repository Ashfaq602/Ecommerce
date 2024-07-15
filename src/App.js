import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar';
import Home from './Home';

import X from './X';
import Carousel from './carousel';
function App() {
  return (
    <div>
     <Navbar/>
     <BrowserRouter>
     <X/>
    
     <Routes>
      
      <Route path='/Home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    
        <Carousel></Carousel>

    </div>
  );
}

export default App;
//import PhoneSignin from './components/PhoneSignin';