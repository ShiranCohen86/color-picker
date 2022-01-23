import { useState } from "react";

export const ColorPicker = ({ changeLogoColor }) => {
  const [saturationPercentage, setSaturationPercentage] = useState(0);
  const [lightnessPercentage, setLightnessPercentage] = useState(0);

  const hslString = (saturation, lightness) =>
    `hsl(260, ${saturation}%, ${lightness}%)`;

  const pickColor = (ev) => {
    // location click of coordinate X (Saturation)
    const saturationLocation =
      (ev.clientX - ev.target.offsetLeft) / ev.target.offsetWidth;
    // location click of coordinate Y (Lightness)
    const lightnessLocation =
      (ev.clientY - ev.target.offsetTop) / ev.target.offsetHeight;
    // calculate the lightness percentage in range (0-50) in coordinate Y
    const lightnessPercentage = Math.round(50 * (1 - lightnessLocation));

    // calculate the saturation percentage in range (0-100) in coordinate X
    const saturationPercentage = Math.round(saturationLocation * 100);

    setSaturationPercentage(saturationPercentage);
    setLightnessPercentage(lightnessPercentage);
  };

  const onChangeLogoColor = (ev) => {
    ev.preventDefault();
    const color = hslString(saturationPercentage, lightnessPercentage);
    changeLogoColor(color);
  };

  return (
    <form className="color-picker-container" onSubmit={onChangeLogoColor}>
      <div className="bitmap" onClick={pickColor}></div>
      <div className="rectangle-color" style={{ backgroundColor: hslString(saturationPercentage || 50, lightnessPercentage || 60) }}></div>
      <input
        type="text"
        className="hsl"
        value={hslString(saturationPercentage || 50, lightnessPercentage || 60)}
        readOnly
      />

      <button className="btn-preview">PREVIEW</button>
    </form>
  );
};
