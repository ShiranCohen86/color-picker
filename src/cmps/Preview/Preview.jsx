import { ReactComponent as Logo } from "../../assets/imgs/reallygood.svg";
import ReactLogo from '../../assets/imgs/reallygood.svg';
import { LogoSvg } from "../LogoSvg/LogoSvg";

export const Preview = ({color}) => {

  return (
    <div className="preview-container">
      <div className="checkerboard-svg"></div>
      <div className="shirt-svg"></div>
      <LogoSvg color={color} className="logo-svg" />
    </div>
  );
};
