import { Link } from 'react-router-dom';
import { GitHubIcon, MenuIcon } from '../Icons/Icons';
import { classNames } from 'cascade-kit-tools/classNames';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { routes } from '../../constants/routes';
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
        <Link to="/" className="d-flex ali-center gap-1">
          <img src="/CascadeKitIcon.png" alt="" className="Navbar--logo" aria-hidden="true" />
          <Text variant='h5' tag='span'>CascadeKit</Text>
        </Link>
      </div>
      <div className='hide-on-small-screens d-flex ali-center gap-2'>
        <Button variant='ghost' href={routes.home}>Home</Button>
        <Button variant='ghost' href={routes.why}>Why</Button>
        <Button variant='ghost' href={routes.aiTools}>CascadeKit for agents</Button>
        <Button variant='ghost' href={routes.how}>Documentation</Button>
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
