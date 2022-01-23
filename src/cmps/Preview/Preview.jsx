import { LogoSvg } from "../LogoSvg";

export const Preview = ({color}) => {

  return (
    <div className="preview-container">
      <div className="checkerboard-svg"></div>
      <div className="shirt-svg"></div>
      <LogoSvg color={color} className="logo-svg" />
    </div>
  );
};
