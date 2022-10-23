import { NavLink } from 'react-router-dom';
import { navItems } from '../data/navData';

const SideNav = () => {
  const topNav = navItems.slice(0, -2);
  const bottomNav = navItems.slice(-2);

  return (
    <nav className="px-4 hidden md:block fixed">
      <ul className="bg-dark-alt rounded-full py-6 px-4 mb-8">
        {topNav.map((item: any) => (
          <NavLink to={`/${item.link}`} key={item.title}>
            <li role="navigation" className="mt-4">
              {item.icon}
            </li>
          </NavLink>
        ))}
      </ul>

      <ul className="bg-dark-alt rounded-full py-6 px-4">
        {bottomNav.map((item: any) => (
          <NavLink to={`/${item.link}`} key={item.title}>
            <li role="navigation" className="mt-4">
              {item.icon}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
