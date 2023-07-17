import {
  CogIcon,
  HomeIcon,
  PhotoIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const sidebarNavigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "All Files", href: "#", icon: Squares2X2Icon, current: false },
  { name: "Photos", href: "#", icon: PhotoIcon, current: false },
  { name: "Shared", href: "#", icon: UserGroupIcon, current: false },
  { name: "Albums", href: "#", icon: RectangleStackIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];

export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];
