'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbarr = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-green-dark p-4 gap-4 flex">
      <Link href="./" className={`text-green-light hover:text-gray-300 ${ pathname === '/' ? 'underline' : '' }`}>Home</Link>
      <Link href="/services" className={`text-green-light hover:text-gray-300 ${ pathname === '/services' ? 'underline' : '' }`}>Services</Link>
      <Link href="/contact" className={`text-green-light hover:text-gray-300 ${ pathname === '/contact' ? 'underline' : '' }`}>Contact</Link>   
    </nav>
  );
};

export default Navbarr;