// ActivityIcon component represents an icon for activity or status
const ActivityIcon = ({ status }) => {
  return (
    // Icon container with flex layout, centered vertically and horizontally
    <div className="flex flex-col items-center justify-center h-full">
      {/* Circular icon with primary shade background */}
      <span
        className={`w-2 h-2 ${
          status == "online" ? "bg-primary-shade" : "bg-[#E7E7E7]"
        } block rounded-full`}
      />
    </div>
  );
};

export default ActivityIcon;
