import { GitHubIcon, MenuIcon } from '../Icons/Icons';
import { classNames } from 'cascade-kit-tools/classNames';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { routes, BasePath } from '../../constants/routes';
import { NavButton } from '../NavButton/NavButton';
import './Navbar.css';

interface NavbarProps {
  onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
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
        <div className="d-flex ali-center gap-1">
          <img src={`${BasePath}/CascadeKitIcon.png`} alt="" className="Navbar--logo" aria-hidden="true" />
          <Text variant='h5' tag='span'>CascadeKit</Text>
        </div>
      </div>
      <div className='hide-on-small-screens d-flex ali-center gap-3'>
        <NavButton href={routes.home}>Home</NavButton>
        <NavButton href={routes.why}>Why</NavButton>
        <NavButton href={routes.aiTools}>CascadeKit for agents</NavButton>
        <NavButton href={routes.how}>Documentation</NavButton>
      </div>
      <div className='Navbar--right-section'>
        <Button
          variant='ghost'
          href="https://github.com/MSanbira/CascadeKit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on GitHub"
          isIcon
        >
          <GitHubIcon />
        </Button>
      </div>
    </header>
  );
}
