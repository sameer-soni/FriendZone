import { useRef, useState } from "react";
import { FriendCard, MobileProfileModal } from "../components";
import { randomNamesWithPictures } from "../constants/Constants";

// Function to shuffle the array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Friends = () => {
  // State to manage the mobile profile modal
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  // Ref to store the shuffled friends list
  const friendsList = useRef(shuffleArray(randomNamesWithPictures).slice());

  return (
    <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
      {/* Start main area */}
      <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
        <div className="h-full rounded-lg">
          <div>
            <div className="text-center my-4">
              <div>
                <ul
                  role="list"
                  className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3 mx-auto"
                >
                  {/* Shuffle and map the array of friends */}
                  {friendsList.current.map((person) => (
                    <FriendCard
                      key={person.id}
                      person={person}
                      user={person}
                      open={isOpen}
                      setIsOpen={setIsOpen}
                      setSelectedUser={setSelectedUser}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Render the MobileProfileModal with the selected user */}
      <MobileProfileModal
        open={isOpen}
        setOpen={setIsOpen}
        user={selectedUser}
      />
      {/* End main area */}
    </main>
  );
};

export default Friends;
