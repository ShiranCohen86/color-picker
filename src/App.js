import { ColorPicker } from "./cmps/ColorPicker";
import { Preview } from "./cmps/Preview/Preview";

export const App = () => {
  return (
    <div className="App main-layout">
      <ColorPicker />
      <Preview />
    </div>
  );
};
