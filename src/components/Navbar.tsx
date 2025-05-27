'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/', ariaLabel: 'Go to home page' },
  { name: 'About', href: '/about', ariaLabel: 'Learn about me' },
  { name: 'Projects', href: '/projects', ariaLabel: 'View my projects' },
  {
    name: 'Publications',
    href: '/publications',
    ariaLabel: 'Read my publications',
  },
  { name: 'Blog', href: '/blog', ariaLabel: 'Read my blog articles' },
  { name: 'Skills', href: '/skills', ariaLabel: 'See my skills' },
  { name: 'Resume', href: '/resume', ariaLabel: 'Download my resume' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);  return (
    <>      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/50 shadow-lg transition-all duration-200 bg-white dark:bg-gray-900 dark:border-gray-700/50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-3 xs:py-4 sm:py-5"
          aria-label="Global navigation"
        >          {/* Enhanced Logo with better mobile sizing */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-200 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg p-1"
              aria-label="Harthik M V - Home"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Harthik M V
              </span>
            </Link>
          </div>          {/* Desktop Navigation */}          <div className="hidden items-center space-x-1 xl:space-x-2 lg:flex">
            {navigation.map(item => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`relative rounded-lg px-2.5 xl:px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 ${
                    pathname === item.href
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                  }`}
                  aria-label={item.ariaLabel}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </div>
            ))}

            <div className="ml-4">
              <ThemeToggle />
            </div>            <div>
              <Link
                href="/contact"
                className="ml-3 xl:ml-4 inline-flex min-h-[44px] items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 xl:px-8 py-2.5 xl:py-3 text-sm xl:text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-label="Contact me"
              >
                Contact
              </Link>
            </div>
          </div>          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white lg:hidden transition-colors duration-150"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />            {/* Menu panel */}            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-4 xs:px-6 py-4 xs:py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-700/50 lg:hidden border-l border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-900"
            >
              <div className="flex items-center justify-between mb-6">
                <Link
                  href="/"
                  className="text-lg xs:text-xl font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg p-1"
                  onClick={closeMobileMenu}
                  aria-label="Harthik M V - Home"
                >
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Harthik M V
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-md p-2.5 min-h-[44px] min-w-[44px] text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">                  <div className="space-y-1 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className={`block rounded-lg px-4 py-3 text-base font-semibold leading-7 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 min-h-[44px] flex items-center ${
                            pathname === item.href
                              ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                              : 'text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800'
                          }`}
                          onClick={closeMobileMenu}
                          aria-label={item.ariaLabel}
                          aria-current={
                            pathname === item.href ? 'page' : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>

                  <div className="py-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between py-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                        <ThemeToggle />
                      </div>                      <Link
                        href="/contact"
                        className="w-full inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={closeMobileMenu}
                        aria-label="Contact me"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
