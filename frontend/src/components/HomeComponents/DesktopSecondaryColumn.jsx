import { RequestFeed, NotificationInNumber, ContactCard } from "../index";
import { randomNamesWithPictures } from "../../constants/Constants";
const people = [
  {
    name: "Lindsay Walton",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
  {
    name: "Emily Williams",
    imageUrl:
      "https://images.unsplash.com/photo-1504447998170-f10353b5cb8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];
const activityItems = [
  {
    id: 1,
    person: people[0],
    time: "1h",
  },
  {
    id: 2,
    person: people[1],
    time: "12h",
  },
];

const DesktopSecondaryColumn = () => {
  return (
    <div>
      <div className="border border-b-gray-300 px-3 py-4">
        <div className="flex flex-row items-center justify-between text-tertiary-shade uppercase ">
          <p>Recent</p>
          <NotificationInNumber total={activityItems.length} />
        </div>
        {activityItems.map((acitivity) => (
          <RequestFeed key={acitivity.id} activity={acitivity} />
        ))}
      </div>
      <div className="px-3 py-4">
        <div className="flex flex-row items-center justify-between text-tertiary-shade uppercase">
          <p>CONTACTS</p>
          <NotificationInNumber total={randomNamesWithPictures.length} />
        </div>
        {randomNamesWithPictures.map((item) => (
          <ContactCard key={item.id} name={item.name} picture={item.picture} />
        ))}
      </div>
    </div>
  );
};

export default DesktopSecondaryColumn;
