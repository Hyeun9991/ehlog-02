import { useEffect, useState } from 'react';
import { images } from '../constants';
import { BsGithub, BsFillSendCheckFill } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

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

const NavItem = ({ name, isLastItem }) => {
  return (
    <li className="h-full">
      <a
        href="/"
        className={`border-l-2 border-secondColor-light flex items-center px-10 md:px-12 h-full text-textColor-light focus:bg-primaryColor-light focus:text-white hover:font-sans hover:text-primaryColor-light dark:text-textColor-dark dark:hover:text-primaryColor-dark dark:border-secondColor-dark ${
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
    <li className="">
      <a
        href="/"
        className="block text-center py-3 border-b-2 border-secondColor-light text-textColor-light focus:bg-primaryColor-light focus:text-white hover:font-sans hover:text-primaryColor-light dark:text-textColor-dark dark:hover:text-primaryColor-dark dark:border-secondColor-dark"
      >
        {name}
      </a>
    </li>
  );
};

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible(!navIsVisible);
  };

  const scrollHandler = () => {
    if (scrollY > 299) {
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
    <section
      className={`bg-bgColor-light dark:bg-bgColor-dark ${
        scrollActive
          ? 'fixed w-full border-b-2 border-secondColor-light dark:border-secondColor-dark'
          : ''
      }`}
    >
      <header className="">
        {/* Main Header */}
        <div
          className={`container mx-auto flex items-center justify-center gap-4 ${
            scrollActive ? 'h-12 md:h-20' : 'h-32 md:h-44'
          }`}
        >
          <h1
            className={`font-crimson font-bold text-textColor-light dark:text-textColor-dark ${
              scrollActive ? 'text-lg md:text-2xl' : 'text-4xl md:text-6xl'
            }`}
          >
            qkrdmsgp_eh.
          </h1>
          <div
            className={`absolute top-1/2 right-6 transform -translate-y-1/2 rotate-y-[-50%] text-xl md:text-2xl cursor-pointer ${
              scrollActive ? 'block' : 'hidden'
            }`}
            onClick={navVisibilityHandler}
          >
            {navIsVisible ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          {/* Hidden Menu */}
          {navIsVisible && (
            <ul className="bg-zinc-200 fixed top-[50px] md:top-[82px] w-full text-sm font-crimson font-semibold">
              {navItemsInfo.map((item, index) => (
                <HiddenNavItem key={index} name={item.name} />
              ))}
            </ul>
          )}
        </div>

        {/* Second Header */}
        <div
          className={`border-t-2 border-b-2 border-secondColor-light dark:border-secondColor-dark h-10 transition-all duration-200 ${
            scrollActive ? 'hidden' : ''
          }`}
        >
          <div className="container mx-auto h-full">
            <ul className="flex items-center h-full justify-center text-sm font-crimson font-semibold">
              {navItemsInfo.map((item, index) => (
                <NavItem
                  key={index}
                  name={item.name}
                  isLastItem={index === navItemsInfo.length - 1}
                />
              ))}

              {/* Links */}
              <div className="border-secondColor-light px-9 h-full hidden md:flex md:items-center gap-3 text-lg text-textColor-light  dark:border-secondColor-dark">
                <a
                  href="https://github.com/Hyeun9991"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primaryColor-light dark:hover:text-primaryColor-dark"
                >
                  <BsGithub />
                </a>
                <a
                  href="mailto:hyeun9991@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primaryColor-light dark:hover:text-primaryColor-dark"
                >
                  <BsFillSendCheckFill />
                </a>
              </div>

              {/* Sign in Button */}
              <button className="border-secondColor-light border-l-2 border-r-2 bg-black text-white hover:bg-primaryColor-light focus:bg-blue-500 focus:text-black px-9 h-full hidden md:flex md:items-center dark:border-secondColor-dark transition-all duration-200">
                Sign in
              </button>
            </ul>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
