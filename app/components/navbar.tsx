'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbarr = () => {
  const [activeItem, setActiveItem] = useState('');
  const pathname = usePathname();

  // Charger la sélection sauvegardée au montage du composant
  useEffect(() => {
    const savedSelection = localStorage.getItem('activeMenuItem');
    if (savedSelection) {
      setActiveItem(savedSelection);
    } else {
      // Fallback: utiliser le pathname actuel
      setActiveItem(pathname);
    }
  }, [pathname]);

  // Gérer le clic sur un élément du menu
  const handleMenuClick = (item: string) => {
    setActiveItem(item);
    localStorage.setItem('activeMenuItem', item);
  };

  return (
    <nav className="bg-green-dark p-4 gap-4 flex">
      <Link href="./" onClick={() => handleMenuClick('homePage')} className={`text-green-light hover:text-gray-300 ${ pathname === '/' ? 'underline' : '' }`}>Home</Link>
      <Link href="/contact" onClick={() => handleMenuClick('contactPage')} className={`text-green-light hover:text-gray-300 ${ pathname === '/contact' ? 'underline' : '' }`}>Contact</Link>   
    </nav>
  );
};

export default Navbarr;