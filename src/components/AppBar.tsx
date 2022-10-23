import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, Menu, Search } from '../assets/icons/';
import { navItems } from '../data/navData';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form className="hidden md:block ml-12 w-full">
      <div className="flex items-center text-white text-opacity-25">
        <label
          htmlFor="search-field"
          className="hover:stroke-secondary hover:opacity-100"
        >
          <Search className="w-4 h-4 mr-4 stroke-light opacity-40" />
        </label>
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
    <header className="sticky top-0 md:flex md:items-center px-6 py-7 bg-dark z-30">
      <NavLink to="/">
        <Logo className="inline-block" />
      </NavLink>

      <button
        className="rounded-full w-[34px] h-[34px] inline-block md:hidden float-right"
        onClick={handleOpenMenu}
      >
        <Menu className="m-auto stroke-light hover:stroke-secondary" />
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
              {navItems.map((item: any) => (
                <li
                  key={item.icon.toString()}
                  role="menuitem"
                  onClick={handleCloseMenu}
                >
                  <NavLink
                    to={`/${item.link}`}
                    className="flex items-center py-4 mt-3 px-9 w-full 
                      hover:text-opacity-100 hover:text-secondary"
                  >
                    {item.icon}

                    <p className="text-light text-opacity-25 font-semibold ml-7 text-lg">
                      {item.title}
                    </p>
                  </NavLink>
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
