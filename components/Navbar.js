import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronRightIcon } from '@heroicons/react/solid';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/story' },
  { name: 'Perfumes', href: '/test' },
  { name: 'Blogs and Articles', href: '/tax' },
  { name: 'FAQs', href: '/Train' },
  { name: 'Contact us', href: '/contact' }
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full bg-[#BBA14F] shadow-sm z-50 h-18">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="flex justify-between items-center h-24">
              {/* Desktop Logo */}
              <div className="hidden lg:block">
                <Link href="/">
                  <a>
                    <Image
                      src="/logoo.png" // Dynamic image source
                      alt="Logo"       // Alt text for the image
                      width={100}      // Set width in pixels
                      height={90}      // Set height in pixels
                      className="xl:h-[90px] xl:w-[100px]" // Additional responsive styling if needed
                    />
                  </a>
                </Link>
              </div>

              {/* Mobile Logo */}
              <div className="block lg:hidden">
                <Link href="/">
                  <a>
                    <Image
                      src="/logoo.png"         // Image source
                      alt="Mobile Logo"        // Alt text for accessibility
                      width={70}               // Set width in pixels
                      height={80}              // Set height in pixels
                      style={{ marginLeft: "20px" }}  // Inline style for margin
                      className="h-[80px] w-[70px]"   // Additional class styling
                    />
                  </a>
                </Link>
              </div>

              <div className="flex-grow mr-12 flex justify-center">
                <div className="hidden lg:flex space-x-12 lg:mr-24">
                  {navigation.map(({ name, href }) => (
                    <Link href={href} key={name}>
                      <a className={`inline-flex items-center py-2 font-medium rounded-md text-gold hover:text-[#475374] duration-100
                        ${'text-sm' && 'xl:text-base' && '2xl:text-lg'}`}>
                        {name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex lg:hidden items-center">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-gold hover:text-blue-900 duration-300">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-9 w-9" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden border-t-2 border-white overflow-y-auto max-h-screen">
            <div className="px-10 py-8 space-y-8">
              {navigation.map(({ name, href }) => (
                <Link href={href} key={name}>
                  <Disclosure.Button
                    as="a"
                    className="group flex justify-between cursor-pointer"
                  >
                    <span className="text-white font-medium group-hover:translate-x-2 duration-300">
                      {name}
                    </span>
                    <ChevronRightIcon className="text-white group-hover:text-blue-900 block h-7 w-7 duration-300" />
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
