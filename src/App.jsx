import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Equipe from './pages/Equipe';
import Projets from './pages/Projets';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;