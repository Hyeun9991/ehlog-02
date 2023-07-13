import { BsGithub, BsFillSendCheckFill } from 'react-icons/bs';

export const navItems = [
  {
    id: 1,
    name: 'Home',
    to: '/',
  },
  {
    id: 2,
    name: 'About',
    to: '/about',
  },
  {
    id: 3,
    name: 'Articles',
    to: '/articles',
  },
];

export const linkItems = [
  {
    id: 1,
    icon: <BsGithub />,
    to: 'https://github.com/Hyeun9991',
  },
  {
    id: 2,
    icon: <BsFillSendCheckFill />,
    to: 'mailto:hyeun9991@gmail.com',
  },
];
