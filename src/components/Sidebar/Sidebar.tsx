import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Box } from '../Box/Box';
import { classNames } from 'cascade-kit-tools/classNames';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { routes } from '../../constants/routes';
import './Sidebar.css';

interface NavItem {
  to: string;
  label: string;
}

const mobileNavItems: NavItem[] = [
  { to: routes.home, label: 'Home' },
  { to: routes.why, label: 'Why' },
];

const navItems: NavItem[] = [
  { to: routes.how, label: 'How It Works' },
  { to: routes.components, label: 'Component Model' },
  { to: routes.layers, label: 'Layers Explained' },
  { to: routes.mixin, label: 'Mixin System' },
  { to: routes.layoutUtils, label: 'Layout Utilities' },
  { to: routes.theme, label: 'Theming' },
  { to: routes.scopedStyles, label: 'Scoped Styles' },
  { to: routes.aiTools, label: 'AI Tools' },
  { to: routes.example, label: 'Live Example' },
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
          <ul className='Sidebar--list Sidebar--list-non-docs hide-on-desktop'>
            {mobileNavItems.map((item) => (
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
