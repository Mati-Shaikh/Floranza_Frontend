import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const footerLinks = [
  { name: 'Business Services', href: '/test' },
  { name: 'Tax Services', href: '/tax' },
  { name: 'Accounting Services', href: '/Train' },
  { name: 'Contact Us', href: '/contact' }
];

export default function Footer() {
  return (
    <footer className="bg-[#BBA14F] shadow-sm">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <a className="text-gold hover:underline">{link.name}</a>
              </Link>
            ))}
          </div>
          <div className="flex space-x-6">
            <Link href="https://twitter.com" passHref>
              <a className="text-gold">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </Link>
            <Link href="https://instagram.com" passHref>
              <a className="text-gold">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </Link>
            <Link href="https://github.com" passHref>
              <a className="text-gold">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </Link>
          </div>
          <div className="border-t-4 border-zinc-200 pt-8 text-center">
            <p className="text-gold">&copy; 2024 UK Accountants. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
