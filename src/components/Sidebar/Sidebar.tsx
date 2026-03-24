import { NavLink } from 'react-router-dom';
import './Sidebar.css';

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/why', label: 'Why CascadeKit' },
  { to: '/how', label: 'How It Works' },
  { to: '/components', label: 'Component Model' },
  { to: '/layers', label: 'Layers Explained' },
  { to: '/example', label: 'Live Example' },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div 
          className="Sidebar--overlay" 
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside 
        className={`Sidebar--root ${isOpen ? 'Sidebar--open' : ''}`}
        aria-label="Main navigation"
      >
        <nav className="Sidebar--nav">
          <ul className="Sidebar--list" role="list">
            {navItems.map((item) => (
              <li key={item.to} className="Sidebar--item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) => 
                    `Sidebar--link ${isActive ? 'Sidebar--link-active' : ''}`
                  }
                  onClick={onClose}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
