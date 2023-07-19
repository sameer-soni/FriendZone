import {
  CalendarIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Teams", href: "#", icon: UserGroupIcon, current: false },
  {
    name: "Directory",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
    current: false,
  },
  { name: "Announcements", href: "#", icon: MegaphoneIcon, current: false },
  { name: "Office Map", href: "#", icon: MapIcon, current: false },
];

export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];
