import { Dialog, Transition } from '@headlessui/react';
import { BellIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import { navigation, user, userNavigation } from '../../constants/constants';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
import Menubutton from './Menubutton';
import Picker from './Picker';
import ProfileMenu from './ProfileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const HeaderNotification = () => {
    return (
      <span className="inline-flex">
        <a
          href="#!!"
          className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </a>
      </span>
    );
  };

  return (
    <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
      <HeaderLogo />
      <Picker />
      <Menubutton setMobileMenuOpen={setMobileMenuOpen} />

      {/* Desktop nav area */}
      <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
        <HeaderSearch />
        <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
          <HeaderNav />
          <div className="flex items-center space-x-8">
            <HeaderNotification />
            <ProfileMenu />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 md:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
            enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
            enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
            leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
            leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
            leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
          >
            <nav
              className="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
              aria-label="Global"
            >
              <div className="h-16 flex items-center justify-between px-4 sm:px-6">
                <a href="#!">
                  <img
                    className="block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  />
                </a>
                <button
                  type="button"
                  className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-2 max-w-8xl mx-auto px-4 sm:px-6">
                <div className="relative text-gray-400 focus-within:text-gray-500">
                  <label htmlFor="mobile-search" className="sr-only">
                    Search all inboxes
                  </label>
                  <input
                    id="mobile-search"
                    type="search"
                    placeholder="Search all inboxes"
                    className="block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
                {navigation.map((item) => (
                  <Fragment key={item.name}>
                    <a
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
                      >
                        {child.name}
                      </a>
                    ))}
                  </Fragment>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <div className="text-base font-medium text-gray-800 truncate">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500 truncate">
                      {user.email}
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
                <div className="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
