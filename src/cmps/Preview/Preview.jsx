import "./Preview.scss";
import { ReactComponent as Logo } from "../../assets/reallygood.svg";

export const Preview = () => {
  return (
    <div className="preview-container">
      <div className="checkerboard-svg"></div>
      <div className="shirt-svg"></div>
      <Logo className="logo-svg" />
    </div>
  );
};
