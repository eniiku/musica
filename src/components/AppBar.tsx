import { useEffect, useRef, useState } from 'react';
import logo from '../assets/icons/logo.svg';
import menu from '../assets/icons/nav/menu.svg';
import { navItems } from '../data/mainData';

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
    <header className="relative flex justify-between p-6">
      <img src={logo} aria-role="presentation" aria-label="logo" />

      <button
        className="bg-black-alt rounded-full w-[34px] h-[34px]"
        onClick={handleOpenMenu}
      >
        <img src={menu} aria-role="menu" className="m-auto" />
      </button>

      {/* Drawer(Side-bar) that pops up on menu click */}

      {isOpen && (
        <div
          aria-role="menubar"
          className="absolute top-0 right-0 h-screen bg-black-alt
            w-8/12 z-50 js-drawer"
          ref={ref}
        >
          <nav>
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.icon}
                  aria-role="menuitem"
                  onClick={handleCloseMenu}
                >
                  <img
                    src={item.icon}
                    alt="Go to Home"
                    aria-role="navigation"
                  />

                  <p className="text-white ">{item.title}</p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AppBar;
