import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <h2>Portfolio LOG3500</h2>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/equipe">Équipe</Link></li>
          <li><Link to="/projets">Projets</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;