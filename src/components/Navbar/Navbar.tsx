import { MenuIcon } from '../Icons/Icons';
import { classNames } from 'cascade-kit-tools/classNames';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { routes } from '../../constants/routes';
import { NavButton } from '../NavButton/NavButton';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const THEME_EMOJI: Record<string, string> = {
  default: '🎨',
  bubblegum: '🍬',
  unicorn: '🦄',
};

interface NavbarProps {
  onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const { theme, themeLabel, toggleTheme } = useTheme();

  return (
    <header className={classNames('Navbar--root')}>
      <div className="Navbar--left-section d-flex ali-center gap-1">
        <Button
          variant='ghost'
          className='hide-on-desktop'
          onClick={onMenuClick}
          aria-label="Toggle navigation menu"
          isIcon
        >
          <MenuIcon />
        </Button>
        <a className="d-flex ali-center gap-1" href={routes.home}>
          <img src={`/CascadeKitIcon.png`} alt="" className="Navbar--logo" aria-hidden="true" />
          <Text variant='h5' tag='span' className='Navbar--logo-text'>CascadeKit</Text>
        </a>
      </div>
      <div className='Navbar--middle-section hide-on-small-screens d-flex ali-center gap-3'>
        <NavButton href={routes.home} >Home</NavButton>
        <NavButton href={routes.why}>Why</NavButton>
        <NavButton href={routes.aiTools}>CascadeKit for agents</NavButton>
        <NavButton href={routes.how} isDocs>Documentation</NavButton>
      </div>
      <div className='Navbar--right-section d-flex ali-center gap-1'>
        <Button
          variant='ghost'
          onClick={toggleTheme}
          aria-label={`Switch theme, current: ${themeLabel}`}
          isIcon
          title={`Theme: ${themeLabel}`}
        >
          <span className="Navbar--theme-emoji" aria-hidden="true">{THEME_EMOJI[theme]}</span>
        </Button>
        <Button
          variant='ghost'
          href={routes.about}
          aria-label="About"
          title="About"
          isIcon
        >
          <span aria-hidden="true">🧔🏻‍♂️</span>
        </Button>
        <Button
          variant='ghost'
          href={routes.links}
          aria-label="Links"
          title="Links"
          isIcon
        >
          <span aria-hidden="true">🔗</span>
        </Button>
      </div>
    </header>
  );
}
