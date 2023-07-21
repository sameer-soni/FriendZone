import userPlaceholder from "../../assets/placeholderUserImage.png";

const PlaceholderUserImage = ({ img }) => {
  return (
    <img
      className="inline-block h-12 w-12 rounded-full object-cover"
      // src={userPlaceholder}
      src={img ? img : userPlaceholder}
    />
  );
};

export default PlaceholderUserImage;
