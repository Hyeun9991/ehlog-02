import { useEffect, useState } from 'react';
import { BsGithub, BsFillSendCheckFill } from 'react-icons/bs';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

const navItemsInfo = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  },
  {
    name: 'Articles',
  },
];

const linkItems = [
  {
    id: 1,
    icon: <BsGithub />,
    href: 'https://github.com/Hyeun9991',
  },
  {
    id: 2,
    icon: <BsFillSendCheckFill />,
    href: 'mailto:hyeun9991@gmail.com',
  },
];

const NavItem = ({ name, isLastItem }) => {
  return (
    <li className="h-full">
      <a
        href="/"
        className={`border-l-2 border-secondColor-light flex items-center px-10 md:px-12 h-full text-textColor-light focus:bg-primaryColor-light focus:text-white hover:font-sans hover:text-primary-gradient dark:text-textColor-dark dark:hover:text-primaryColor-dark dark:border-secondColor-dark ${
          isLastItem ? 'border-r-2 border-secondColor-light' : ''
        }`}
      >
        {name}
      </a>
    </li>
  );
};

const HiddenNavItem = ({ name }) => {
  return (
    <li className="w-full">
      <a
        href="/"
        className="block py-3 text-center text-white hover:text-primary-gradient hover:font-sans"
      >
        {name}
      </a>
    </li>
  );
};

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const scrollHandler = () => {
    if (scrollY > 200) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollHandler);
    };
    scrollListener();

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <>
      {scrollActive ? (
        <div className="z-50 bg-bgColor-light dark:bg-bgColor-dark fixed inset-x-0 top-0 left-0 h-[60px] border-b-2 border-secondColor-light dark:border-secondColor-dark">
          <div className="container flex items-center justify-center h-full gap-4 mx-auto">
            {/* Logo */}
            <a href="/">
              <h1 className="text-lg font-bold lg:text-xl font-crimson text-textColor-light dark:text-textColor-dark">
                qkrdmsgp_eh{' '}
                <span className="text-2xl text-primary-gradient"> .</span>
              </h1>
            </a>

            {/* Side Menu Open Button */}
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className={`fixed z-50 flex items-center text-2xl cursor-pointer right-6 top-4.5 ${
                showSidebar
                  ? 'text-white'
                  : 'text-secondColor-light dark:text-secondColor-dark'
              }`}
            >
              {showSidebar ? <IoCloseOutline /> : <IoMenuOutline />}
            </button>

            {/* Side Menu */}
            <div
              className={`top-0 right-0 w-[70vw] sm:w-[280px] bg-zinc-900 fixed h-full z-40 ease-in-out duration-200 ${
                showSidebar ? 'translate-x-0 ' : 'translate-x-full'
              }`}
            >
              <ul className="flex flex-col items-center justify-center w-full h-full text-sm font-semibold font-crimson">
                {navItemsInfo.map((item, index) => (
                  <HiddenNavItem key={index} name={item.name} />
                ))}

                {/* Link Items */}
                <div className="flex gap-4 mt-6 text-lg text-white">
                  {linkItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="transition-all duration-200 hover:text-primaryColor-defaultColor">
                        {item.icon}
                      </span>
                    </a>
                  ))}
                </div>
                {/* Logo */}
                <a href="/">
                  <h1 className="fixed text-sm font-semibold text-white transform -translate-x-1/2 bottom-8 left-1/2 font-crimson dark:text-textColor-dark">
                    qkrdmsgp_eh{' '}
                    <span className="text-2xl text-primary-gradient"> .</span>
                  </h1>
                </a>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <section className="z-50 bg-bgColor-light dark:bg-bgColor-dark">
          {/* Main Header */}
          <header className="h-[195px]">
            <div className="container flex items-center justify-center h-full gap-4 mx-auto">
              {/* Logo */}
              <a href="/">
                <h1 className="text-5xl font-bold lg:text-6xl font-crimson text-textColor-light dark:text-textColor-dark">
                  qkrdmsgp_eh{' '}
                  <span className="text-6xl lg:text-7xl text-primary-gradient">
                    {' '}
                    .
                  </span>
                </h1>
              </a>
            </div>
          </header>
          {/* Second Header */}
          <div className="h-[45px] border-t-2 border-b-2 border-secondColor-light dark:border-secondColor-dark transition-all duration-200">
            <div className="container h-full mx-auto">
              {/* Menu Items */}
              <ul className="flex items-center justify-center h-full text-sm font-semibold font-crimson">
                {navItemsInfo.map((item, index) => (
                  <NavItem
                    key={index}
                    name={item.name}
                    isLastItem={index === navItemsInfo.length - 1}
                  />
                ))}

                {/* Link Items */}
                <div className="hidden h-full gap-3 text-lg border-secondColor-light px-9 md:flex md:items-center text-textColor-light dark:border-secondColor-dark">
                  {linkItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="transition-all duration-200 hover:text-primaryColor-defaultColor">
                        {item.icon}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Sign in Button */}
                <button className="hidden h-full border-l-2 border-r-2 primary-button px-9 md:flex md:items-center">
                  Sign in
                </button>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Header;
