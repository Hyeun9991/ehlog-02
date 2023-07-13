import {
  navItems,
  linkItems,
} from '../../../components/Layout/Header/MenuItems';
import { Link } from 'react-router-dom';

const NavItem = ({ name, isLastItem, to }) => {
  return (
    <li className="h-full">
      <Link
        to={to}
        className={`flex items-center h-full px-10 border-l-2 hover-text border-secondColor-light md:px-12 dark:border-secondColor-dark ${
          isLastItem ? 'border-r-2 border-secondColor-light' : ''
        }`}
      >
        {name}
      </Link>
    </li>
  );
};

const Banner = () => {
  return (
    <section className="z-50 bg-bgColor-light dark:bg-bgColor-dark">
      {/* Main Header */}
      <header className="main-container">
        <div className="container flex items-center justify-center h-full gap-4 mx-auto">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-4xl md:text-5xl logo-text">
              qkrdmsgp_eh{' '}
              <span className="text-6xl md:text-7xl primary-dot-2xl"> .</span>
            </h1>
          </Link>
        </div>
      </header>
      {/* Second Header */}
      <div className="h-[40px] md:h-[45px] border-t-2 border-b-2 border-secondColor-light dark:border-secondColor-dark transition-all duration-200">
        <div className="container h-full mx-auto">
          {/* Menu Items */}
          <ul className="flex items-center justify-center h-full text-sm font-semibold font-crimson">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                name={item.name}
                to={item.to}
                isLastItem={index === navItems.length - 1}
              />
            ))}

            {/* Link Items */}
            <div className="hidden h-full gap-3 text-lg border-secondColor-light px-9 md:flex md:items-center text-textColor-light dark:border-secondColor-dark">
              {linkItems.map((item) => (
                <a
                  key={item.id}
                  href={item.to}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="hover-icon">{item.icon}</span>
                </a>
              ))}
            </div>

            {/* Sign in Button */}
            <button className="hidden h-full border-l-2 border-r-2 primary-button px-9 md:flex md:items-center hover:font-sans">
              Sign in
            </button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
