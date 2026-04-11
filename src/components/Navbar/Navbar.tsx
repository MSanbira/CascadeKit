import { Link } from 'react-router-dom';
import { GitHubIcon, MenuIcon } from '../Icons/Icons';
import { classNames } from '../../helpers/classNameHelper';
import './Navbar.css';

interface NavbarProps {
  onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className={classNames('Navbar')}>
      <div className="Navbar--container">
        <div className="Navbar--start">
          <button
            className="Navbar--menuButton"
            onClick={onMenuClick}
            aria-label="Toggle navigation menu"
          >
            <MenuIcon className="Navbar--menuIcon" />
          </button>
          <Link to="/" className="Navbar--brand">
            <img src="/CascadeKitIcon.png" alt="" className="Navbar--logo" aria-hidden="true" />
            CascadeKit
          </Link>
        </div>
        <div className="Navbar--end">
          <a 
            href="https://github.com/MSanbira/CascadeKit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="Navbar--githubLink"
            aria-label="View on GitHub"
          >
            <GitHubIcon className="Navbar--githubIcon" />
          </a>
        </div>
      </div>
    </header>
  );
}
