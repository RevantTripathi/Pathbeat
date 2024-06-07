
import './App.css';
import HomeCard from './HomePage/homecard';
import Home from './HomePage/home'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LongDesc from './LongDescPage/longDesc';

function App() {
  return (
<BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path='/long' element={<LongDesc/>} />
                </Routes>

            </BrowserRouter>


  
      // <HomeCard/>
    
  );
}

export default App;
