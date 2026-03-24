import { useState } from 'react';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="Layout--root">
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
