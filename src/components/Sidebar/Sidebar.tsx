import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Box } from '../Box/Box';
import { classNames } from '../../helpers/classNameHelper';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
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
  { to: '/mixin', label: 'Mixin System' },
  { to: '/layout-utils', label: 'Layout Utilities' },
  { to: '/theme', label: 'Theming' },
  { to: '/scoped-styles', label: 'Scoped Styles' },
  { to: '/example', label: 'Live Example' },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const { themeLabel, toggleTheme } = useTheme();

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
        className={classNames('Sidebar--root', [], { 'Sidebar--open': isOpen })}
        aria-label="Main navigation"
      >
        <nav className="Sidebar--nav">
          <ul className="Sidebar--list" role="list">
            {navItems.map((item) => (
              <li key={item.to} className="Sidebar--item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    classNames('Sidebar--link', [], { 'Sidebar--link-active': isActive })
                  }
                  onClick={onClose}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <Box
          className="Sidebar--theme-section d-flex dir-col gap-1"
          mixin={{ pt: 3 }}
        >
          <Text variant='body2'>
            Theme: {themeLabel}
          </Text>
          <Button onClick={toggleTheme} variant="secondary">
            Change Theme
          </Button>
        </Box>
      </aside>
    </>
  );
}
