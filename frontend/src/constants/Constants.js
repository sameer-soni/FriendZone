import {
  CalendarIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  UserGroupIcon,
  PhotoIcon,
  UserIcon,
  BellIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Photos", href: "#", icon: PhotoIcon, current: false },
  { name: "Explore", href: "#", icon: UserGroupIcon, current: false },
  {
    name: "Profile",
    href: "#",
    icon: UserIcon,
    current: false,
  },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];

export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];
