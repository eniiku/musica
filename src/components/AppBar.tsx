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
          aria-role="searchbar"
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
    <header
      className="relative flex justify-between md:justify-start p-6
        md:items-center bg-transparent"
    >
      <img src={logoIcon} aria-role="presentation" aria-label="logo" />

      <button
        className="rounded-full w-[34px] h-[34px] md:hidden"
        onClick={handleOpenMenu}
      >
        <img src={menuIcon} aria-role="menu" className="m-auto " />
      </button>

      {/* Drawer(Side-bar) that pops up on menu click */}

      {isOpen && (
        <div
          aria-role="menubar"
          className="absolute top-0 right-0 h-screen bg-dark-alt
            w-8/12 z-50"
          ref={ref}
        >
          <nav className="relative">
            <ul className="my-16">
              {navItems.map((item) => (
                <li
                  key={item.icon}
                  aria-role="menuitem"
                  onClick={handleCloseMenu}
                >
                  <button className="flex items-center py-6 px-9 w-full">
                    <img
                      src={item.icon}
                      alt={`Go to${item.title} page`}
                      aria-role="navigation"
                      className="w-7 h-7"
                    />

                    <p className="text-light font-semibold text-opacity-25 ml-7 text-lg">
                      {item.title}
                    </p>
                  </button>
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
