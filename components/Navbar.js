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
    <Disclosure as="nav" className="fixed top-0 w-full bg-[#BBA14F] shadow-sm z-50">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="flex justify-between items-center h-24">
              {/* Desktop Logo Section */}
              <div className="hidden lg:flex items-center gap-4 pl-6">
                <Link href="/">
                  <a>
                    <Image
                      src="/logoo.png"
                      alt="Logo"
                      width={100}
                      height={90}
                      className="xl:h-[90px] xl:w-[100px]"
                    />
                  </a>
                </Link>
                <div className="flex flex-col">
                  <span className="text-3xl font-serif tracking-wider text-black">
                    FLORANZA
                  </span>
                  <span className="text-xl tracking-wide text-black">
                    FRAGRANCES
                  </span>
                </div>
              </div>

              {/* Mobile Logo Section */}
              <div className="flex lg:hidden items-center gap-3 pl-4">
                <Link href="/">
                  <a>
                    <Image
                      src="/logoo.png"
                      alt="Mobile Logo"
                      width={70}
                      height={80}
                      className="h-[80px] w-[70px]"
                    />
                  </a>
                </Link>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif tracking-wider text-black">
                    FLORANZA
                  </span>
                  <span className="text-lg tracking-wide text-black">
                    FRAGRANCES
                  </span>
                </div>
              </div>

              <div className="flex-grow mr-12 flex justify-center">
                <div className="hidden lg:flex space-x-12 lg:mr-24">
                  {navigation.map(({ name, href }) => (
                    <Link href={href} key={name}>
                      <a className="inline-flex items-center py-2 font-medium text-black hover:text-[#BBA14F] duration-100 text-sm xl:text-base 2xl:text-lg">
                        {name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center pr-4">
                <div className="flex lg:hidden items-center">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-black hover:text-[#BBA14F] duration-300">
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
                    <span className="text-black font-medium group-hover:translate-x-2 duration-300">
                      {name}
                    </span>
                    <ChevronRightIcon className="text-black group-hover:text-[#BBA14F] block h-7 w-7 duration-300" />
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