import {
  Home,
  LogOut,
  Playlist,
  Profile,
  Radio,
  Video,
} from '../assets/icons/nav';

export const navItems = [
  { icon: <Home />, title: 'Home', link: '' },
  { icon: <Playlist />, title: 'My collections', link: 'collections' },
  { icon: <Radio />, title: 'Radio', link: 'radio' },
  { icon: <Video />, title: 'Music videos', link: 'video' },
  { icon: <Profile />, title: 'Profile', link: 'profile' },
  { icon: <LogOut />, title: 'Log out', link: 'log-out' },
];
