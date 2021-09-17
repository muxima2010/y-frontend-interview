import "./style.css";

export const Link = ({ linkTo, text }) => {
  return (
    <a className="link" href={linkTo}>
      {text}
    </a>
  );
};
