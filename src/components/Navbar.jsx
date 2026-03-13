import { navLinks } from "../data/portfolioData";

export default function Navbar({ activeSection, menuOpen, onToggleMenu, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => onNavigate("home")}>
          <span className="logo-initials">SM</span>
          <span className="logo-text">Santhosh</span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`hamburger ${menuOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          onClick={onToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
