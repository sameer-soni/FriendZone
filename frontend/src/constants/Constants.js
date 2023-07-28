import {
  HomeIcon,
  UserGroupIcon,
  PhotoIcon,
  UserIcon,
  BellIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "Photos", href: "/photos", icon: PhotoIcon, current: false },
  { name: "Friends", href: "/friends", icon: UserGroupIcon, current: false },
  {
    name: "Notifications",
    href: "/notifications",
    icon: BellIcon,
    current: false,
  },
];

export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

export const randomNamesWithPictures = [
  {
    id: 1,
    pic: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    username: "Olivia Adams",
    status: getRandomStatus(),
  },
  {
    id: 2,
    pic: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Emily Johnson",
    status: getRandomStatus(),
  },
  {
    id: 3,
    pic: "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    username: "Ava Williams",
    status: getRandomStatus(),
  },
  // Add more contacts here...
  {
    id: 4,
    pic: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Sophia Smith",
    status: getRandomStatus(),
  },
  {
    id: 5,
    pic: "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Mia Brown",
    status: getRandomStatus(),
  },
  {
    id: 6,
    pic: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Isabella Davis",
    status: getRandomStatus(),
  },
  {
    id: 7,
    pic: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Amelia Taylor",
    status: getRandomStatus(),
  },
  {
    id: 8,
    pic: "https://images.unsplash.com/photo-1602442787305-decbd65be507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Charlotte Clark",
    status: getRandomStatus(),
  },
  {
    id: 9,
    pic: "https://plus.unsplash.com/premium_photo-1687294573608-b1cd92277cbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Ryan Smith",
    status: getRandomStatus(),
  },
  {
    id: 10,
    pic: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    username: "John Johnson",
    status: getRandomStatus(),
  },
];

// Function to randomly return "online" or "offline" status
export function getRandomStatus() {
  const statuses = ["online", "offline"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

export const notifications = [
  {
    user: {
      name: "Ricardo Cooper",
      email: "ricardo.cooper@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    message: "Hey, how's it going? 😃",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "Kristen Ramos",
      email: "kristen.ramos@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-02-15",
    dateFull: "February 15, 2020",
    message: "Just saw your latest post. It looks amazing! 👍🏼",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "Ted Fox",
      email: "ted.fox@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-03-22",
    dateFull: "March 22, 2020",
    message: "Hey, are you free for a chat later today? 📞",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "Ryan Smith",
      email: "ryan.ramos@gmail.com",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1687294573608-b1cd92277cbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    date: "2020-04-05",
    dateFull: "April 5, 2020",
    message: "Just shared your latest article on my timeline! 📰",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "John Johnson",
      email: "ted.fox@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    date: "2020-06-11",
    dateFull: "June 11, 2020",
    message: "Happy birthday! 🎉",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "Mia Brown",
      email: "mia.brown@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    date: "2020-07-28",
    dateFull: "July 28, 2020",
    message: "Thanks for the follow! 😊",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "Isabella Davis",
      email: "isabella.davis@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    date: "2020-09-03",
    dateFull: "September 3, 2020",
    message: "Let's catch up over coffee sometime ☕️",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "Sophia White",
      email: "sophia.white@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1602442787305-decbd65be507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    date: "2020-10-20",
    dateFull: "October 20, 2020",
    message: "Just posted a new blog, check it out! 📝",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "Ethan Johnson",
      email: "ethan.johnson@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1590649880765-91b1956b8276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    date: "2020-11-15",
    dateFull: "November 15, 2020",
    message: "Let's connect on LinkedIn! 👥",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "William Miller",
      email: "william.miller@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    date: "2020-12-05",
    dateFull: "December 5, 2020",
    message: "Liked your recent post! ❤️",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "Emma Turner",
      email: "emma.turner@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    date: "2021-01-10",
    dateFull: "January 10, 2021",
    message: "Hey, long time no see! Let's catch up soon. 🤗",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
  {
    user: {
      name: "Liam Harris",
      email: "liam.harris@gmail.com",
      imageUrl:
        "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    date: "2021-02-22",
    dateFull: "February 22, 2021",
    message: "Thanks for the mention in your story! 🙌",
    href: "#",
    status: Math.random() < 0.5 ? "online" : "offline",
  },
];

export const randomStories = [
  {
    user: randomNamesWithPictures[0],
    story:
      "https://images.unsplash.com/photo-1568158951683-b5dadda4cd8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
export const stories = [
  {
    user: randomNamesWithPictures[
      Math.floor(Math.random() * randomNamesWithPictures.length)
    ],
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    user: randomNamesWithPictures[
      Math.floor(Math.random() * randomNamesWithPictures.length)
    ],
    source:
      "https://images.unsplash.com/photo-1614640384477-93219e3554a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0aWZ1bHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    user: randomNamesWithPictures[
      Math.floor(Math.random() * randomNamesWithPictures.length)
    ],
    source:
      "https://images.unsplash.com/photo-1665255865070-5e17bdea66d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    user: randomNamesWithPictures[
      Math.floor(Math.random() * randomNamesWithPictures.length)
    ],
    source:
      "https://images.unsplash.com/photo-1673444404834-15725d6f304d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
  {
    user: randomNamesWithPictures[
      Math.floor(Math.random() * randomNamesWithPictures.length)
    ],
    source:
      "https://images.unsplash.com/photo-1690205074022-560b3587cbc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    user: randomNamesWithPictures[
      Math.floor(Math.random() * randomNamesWithPictures.length)
    ],
    source:
      "https://images.unsplash.com/photo-1612725558359-fb598a53b380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
];
function getRandomTimeAsString() {
  const now = new Date().getTime();
  const randomOffset = Math.floor(Math.random() * 86400000);
  const randomTime = new Date(now - randomOffset);

  return randomTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export const feeds = [
  {
    user: randomNamesWithPictures[
      Math.floor(Math.random() * randomNamesWithPictures.length)
    ],
    postMessage: "Best Ever Vecations!",
    img: "https://images.unsplash.com/photo-1565462900119-a16b91dead9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format",
  },
  {
    user: randomNamesWithPictures[
      Math.floor(Math.random() * randomNamesWithPictures.length)
    ],
    postMessage: "Best Ever Vecations!",
    content:
      "hello everyone, today is a very beautiful day. How you guys feeling, tell in the comments.hello everyone, today is a very beautiful day. How you guys feeling, tell in the comments.hello everyone, today is a very beautiful day. How you guys feeling, tell in the comments.",
    time: getRandomTimeAsString(),
  },
];

const comments = [
  "Your photography skills are exceptional! The composition and colors in this picture are simply stunning. I'm blown away by your talent!",
  "Wow! This picture is like a work of art. The way you captured the beauty of the moment is truly remarkable. I could stare at it for hours.",
  "This picture speaks a thousand words. I love the way you've framed the scene and the emotions it conveys. Keep up the fantastic work!",
  "Incredible shot! The lighting and shadows add so much depth to this image. It's clear that you have a great eye for photography.",
  "This is pure magic! I can't get over how captivating this picture is. Your photography skills are truly impressive.",
  "You've managed to capture a moment of pure beauty in this picture. It's like stepping into a dream. Absolutely breathtaking!",
  "I'm in awe of your talent! The details and colors in this photo are exquisite. You have a gift for capturing the essence of a scene.",
  "This picture tells a story and evokes so much emotion. It's like stepping into a different world. Thank you for sharing your art!",
  "This photo is a masterpiece! The composition, lighting, and subject are all perfectly aligned. You have a real talent for photography.",
  "Your photography is out of this world! This picture is mesmerizing, and I can't get enough of it. Keep sharing your incredible work!",
];

// Function to generate a random comment
export const generateRandomComment = () => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
};

export const generateRandomFeedComments = () => {
  const numberOfComments = Math.floor(Math.random() * 3) + 1; // Random number of comments between 1 and 3
  const feedComments = [];

  for (let i = 0; i < numberOfComments; i++) {
    feedComments.push({
      user: randomNamesWithPictures[
        Math.floor(Math.random() * randomNamesWithPictures.length)
      ],
      comment: generateRandomComment(),
    });
  }

  return feedComments;
};
