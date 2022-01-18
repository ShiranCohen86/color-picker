import "./App.scss";
import { ColorPicker } from "./cmps/ColorPicker";
import { Preview } from "./cmps/Preview/Preview";

export const App = () => {
  return (
    <div className="App">
      <ColorPicker />
      <Preview />
    </div>
  );
};
