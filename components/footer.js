import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const footerLinks = [
  { name: 'Perfumes Collection', href: '/test' },
  { name: 'Blogs and Articles', href: '/tax' },
  { name: 'FAQs', href: '/Train' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Admin', href: '/adminKey' }
];

export default function Footer() {
  return (
    <footer className="bg-[#BBA14F] shadow-sm">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <a className="text-black font-bold hover:underline">{link.name}</a>
              </Link>
            ))}
          </div>
          <div className="flex space-x-6">
            <Link href="https://twitter.com" passHref>
              <a className="text-black">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </Link>
            <Link href="https://instagram.com" passHref>
              <a className="text-black">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </Link>
            <Link href="https://github.com" passHref>
              <a className="text-black">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </Link>
          </div>
          <div className="border-t-4 border-zinc-200 pt-8 text-center">
            <p className="text-black font-bold">&copy; 2024 FloranzaFragrances. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
