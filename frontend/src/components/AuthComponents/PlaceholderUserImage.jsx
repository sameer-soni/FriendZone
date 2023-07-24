import PropTypes from "prop-types";
import userPlaceholder from "../../assets/placeholderUserImage.png";

const PlaceholderUserImage = ({ img }) => {
  return (
    <img
      className="inline-block h-12 w-12 rounded-full object-cover"
      src={img ? img : userPlaceholder}
      alt="User Profile"
    />
  );
};

PlaceholderUserImage.propTypes = {
  img: PropTypes.string, // Expects a string representing the URL of the user's profile picture
};

export default PlaceholderUserImage;
