import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


import Coba from './pages/Coba';
import Wisata from './pages/Wisata';
import Kuliner from './pages/kuliner';
import Budaya from './pages/Budaya';


function App() {
  return (
    <Router>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Coba />} />
          <Route path="/home" element={<Home />} />
           <Route path="/wisata" element={<Wisata />} />
            <Route path="/Kuliner" element={<Kuliner />} />
             <Route path="/Budaya" element={<Budaya />} />
            

        </Routes>
      </div>
    </Router>
  );
}

export default App;