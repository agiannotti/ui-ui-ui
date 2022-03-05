import { useState } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
import Menubutton from './Menubutton';
import MobileHeader from './MobileHeader';
import ProfileMenu from './ProfileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
      <HeaderLogo />
      <Menubutton setMobileMenuOpen={setMobileMenuOpen} />
      <div className=" min-w-0 flex-1 flex items-center justify-between">
        <HeaderSearch />
        <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-4">
          <HeaderNav />
          <div className="flex items-center space-x-4">
            <ProfileMenu />
          </div>
        </div>
      </div>
      <MobileHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
