
import React from 'react';
import { classNames } from 'cascade-kit-tools/classNames';
import './NavButton.css';

interface NavButtonProps {
    href: string;
    children: React.ReactNode;
}

export const NavButton = ({ href, children }: NavButtonProps) => {
    const currentPath = window.location.pathname;
    const isSelected = currentPath === href;
    console.log(currentPath, href, isSelected);

    return (
        <a
            className={classNames('NavButton--root', undefined, {
                'NavButton--selected': isSelected,
            })}
            href={href}
        >
            <span className="NavButton--icon" />
            {children}
        </a>
    );
};