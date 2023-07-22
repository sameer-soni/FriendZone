import {
  HomeIcon,
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

export const randomNamesWithPictures = [
  {
    id: 1,
    picture:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Olivia Adams",
  },
  {
    id: 2,
    picture:
      "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Emily Johnson",
  },
  {
    id: 3,
    picture:
      "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Ava Williams",
  },
  // Add more contacts here...
  {
    id: 4,
    picture:
      "https://images.unsplash.com/photo-1590649880765-91b1956b8276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Sophia Smith",
  },
  {
    id: 5,
    picture:
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Mia Brown",
  },
  {
    id: 6,
    picture:
      "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Isabella Davis",
  },
  {
    id: 7,
    picture:
      "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Amelia Taylor",
  },
  {
    id: 8,
    picture:
      "https://images.unsplash.com/photo-1602442787305-decbd65be507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Charlotte Clark",
  },
  {
    id: 9,
    picture:
      "https://plus.unsplash.com/premium_photo-1687294573608-b1cd92277cbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Ryan Smith",
  },
  {
    id: 10,
    picture:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "John Johnson",
  },
];
