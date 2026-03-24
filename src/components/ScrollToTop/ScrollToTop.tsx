import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const main = document.querySelector('.Layout--main');
    if (main) {
      main.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
