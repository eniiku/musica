import { navItems } from '../data/mainData';

const SideNav = () => {
  const topNav = navItems.slice(0, -2);
  const bottomNav = navItems.slice(-2);

  return (
    <nav className="px-4 hidden md:block fixed">
      <ul className="bg-dark-alt rounded-full py-6 px-4 mb-5">
        {topNav.map((item) => (
          <li key={item.title} role="navigation">
            <img
              src={item.icon}
              alt={item.title}
              className="w-[22px]  my-6 mx-auto cursor-pointer fill-light opacity-75"
            />
          </li>
        ))}
      </ul>
      <ul className="bg-dark-alt rounded-full py-6 px-4">
        {bottomNav.map((item) => (
          <li key={item.title} role="navigation">
            <img
              src={item.icon}
              alt={item.title}
              className="w-[22px] my-6 mx-auto cursor-pointer fill-light opacity-75"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
