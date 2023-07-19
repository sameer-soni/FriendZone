import PropTypes from "prop-types";

const ContactCard = ({ picture, name }) => {
  console.log(picture);
  return (
    <div className="flex flex-row items-center justify-start gap-2 mt-6">
      <img
        className="h-12 w-12 rounded-md object-cover"
        src={picture}
        alt="Contact's Profile"
      />
      <div className="font-bold">{name}</div>
    </div>
  );
};

ContactCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactCard;
