import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { classNames } from 'cascade-kit-tools/classNames';
import { isDocsPage } from '../../constants/routes';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentPath = window.location.pathname;
  console.log(currentPath);
  const isCurrentPageDocs = isDocsPage(currentPath);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className={classNames('Layout--root', undefined, { 'Layout--is-docs': isCurrentPageDocs })}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar onMenuClick={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <main id="main-content" className="Layout--main">
        <div className="Layout--content">
          {children}
        </div>
      </main>
    </div>
  );
}
