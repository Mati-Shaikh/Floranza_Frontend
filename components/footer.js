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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Links Section */}
          <div className="flex flex-wrap justify-center gap-4 text-center">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <a className="text-black font-bold hover:underline whitespace-nowrap">{link.name}</a>
              </Link>
            ))}
          </div>

          {/* Social Icons */}
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

          {/* Copyright Section */}
          <div className="border-t-2 border-zinc-200 pt-4 text-center w-full">
            <p className="text-black font-bold">&copy; 2024 FloranzaFragrances. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
