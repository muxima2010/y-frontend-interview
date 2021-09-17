import PropTypes from "prop-types";

export const Subtitle = ({ styleTitle, text }) => {
  return <h2 className={styleTitle}>{text}</h2>;
};

Subtitle.propTypes = {
  text: PropTypes.string,
};
