
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pocetna></Pocetna>}></Route>

      </Routes>
      
      </BrowserRouter>
      
      </div>
  );
}

export default App;
