import { Link } from "react-router-dom";
import { useTheme } from "../../context/thememode";
import Sun from "../../assets/images/icons8-light-24.png";
import Moon from "../../assets/images/icons8-dark-mode-24.png";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <Link to="/">
        <div className="underline-nav">
          <h1>W.Drancourt</h1>
        </div>
      </Link>
      <div className="burger">
        <div className="underline-nav">
          <Link to="/about">À propos</Link>
        </div>
        <div className="underline-nav">
          <Link to="/projets">Projets</Link>
        </div>
        <button onClick={toggleTheme} className="toggleTheme">
          {theme ? <img src={Sun} alt="sun" /> : <img src={Moon} alt="moon" />}
        </button>
      </div>
    </nav>
  );
}
