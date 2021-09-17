import PropTypes from "prop-types";

export const Title = ({ styleTitle, text }) => {
  return <h1 className={styleTitle}>{text}</h1>;
};

Title.propTypes = {
  text: PropTypes.string,
};
