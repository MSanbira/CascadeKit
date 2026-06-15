
import { classNames } from 'cascade-kit-tools/classNames';
import './NavButton.css';
import { isDocsPage, routes } from '../../constants/routes';

interface NavButtonProps {
    href: string;
    children: string;
    isDocs?: boolean;
}

export const NavButton = ({ href, children, isDocs = false }: NavButtonProps) => {
    const currentPath = window.location.pathname;
    const isSelected = isDocs ? isDocsPage(currentPath) && currentPath !== routes.aiTools : currentPath === href;

    return (
        <a
            className={classNames('NavButton--root', undefined, {
                'NavButton--selected': isSelected,
            })}
            href={href}
            data-label={children}
        >
            <span className="NavButton--icon" />
        </a>
    );
};