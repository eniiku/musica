import { useEffect, useRef, useState } from 'react';
import logoIcon from '../assets/icons/logo.svg';
import menuIcon from '../assets/icons/nav/menu.svg';
import searchIcon from '../assets/icons/search.svg';
import { navItems } from '../data/mainData';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <form className="hidden md:block ml-12 w-full">
      <div className="flex items-center text-white text-opacity-25">
        <img src={searchIcon} aria-hidden="true" className="w-4 h-4 mr-4" />
        <input
          name="search-field"
          id="search-field"
          placeholder="Search"
          role="searchbar"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-sm font-semibold outline-none 
          placeholder-white placeholder-opacity-25 w-[25%]"
        />
      </div>
    </form>
  );
};

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // toggles menu state

  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  //  closes Side bar by clicking outside of Sidebar's window

  useEffect(() => {
    // * logic to determine whether user is clicking
    // * outside it's window or not

    const handleClickOutsideDrawer = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node))
        setIsOpen(false);
    };

    window.addEventListener('mousedown', handleClickOutsideDrawer);

    // ! umount event listener on clean up

    return () => window.addEventListener('mousedown', handleClickOutsideDrawer);
  }, []);

  return (
    <header className="sticky md:flex md:items-center px-6 py-7 bg-transparent z-30">
      <img
        src={logoIcon}
        role="presentation"
        aria-label="logo"
        className="inline-block"
      />

      <button
        className="rounded-full w-[34px] h-[34px] inline-block md:hidden float-right"
        onClick={handleOpenMenu}
      >
        <img src={menuIcon} role="menu" className="m-auto " />
      </button>

      {/* Drawer(Side-bar) that pops up on menu click */}

      {isOpen && (
        <div
          role="menubar"
          className="fixed top-0 right-0 h-screen bg-dark-alt
            w-[250px] z-50 md:hidden"
          ref={ref}
        >
          <nav>
            <ul className="mt-14">
              {navItems.map((item) => (
                <li key={item.icon} role="menuitem" onClick={handleCloseMenu}>
                  <a
                    href="#"
                    className="flex items-center py-4 mt-3 px-9 w-full"
                  >
                    <img
                      src={item.icon}
                      alt={`Go to${item.title} page`}
                      role="navigation"
                      className="w-7 h-7"
                    />

                    <p className="text-light font-semibold text-opacity-25 ml-7 text-lg">
                      {item.title}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Searchbar */}
      <SearchBar />
    </header>
  );
};

export default AppBar;
