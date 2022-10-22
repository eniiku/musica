import { navItems } from '../data/navData';

const SideNav = () => {
  const topNav = navItems.slice(0, -2);
  const bottomNav = navItems.slice(-2);

  return (
    <nav className="px-4 hidden md:block fixed">
      <ul className="bg-dark-alt rounded-full py-6 px-4 mb-8">
        {topNav.map((item: any) => (
          <li key={item.title} role="navigation" className="mt-4">
            {item.icon}
          </li>
        ))}
      </ul>

      <ul className="bg-dark-alt rounded-full py-6 px-4">
        {bottomNav.map((item: any) => (
          <li key={item.title} role="navigation" className="mt-4">
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
