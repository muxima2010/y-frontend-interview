import PropTypes from "prop-types";
import "./style.css";

export const Button = ({ text, onClick }) => {
  return (
    <button className={"button"} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "New Button",
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
