import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Projects from './pages/Projects';
import Navbar from './components/NAvigation/Navbar';
import ScreenNav from './components/NAvigation/ScreenNav';
const App = () => {
  return (
    <div>
      <Navbar />
      <ScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projets' element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
