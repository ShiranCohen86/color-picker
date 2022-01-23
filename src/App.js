import { useState } from 'react';
import { ColorPicker } from './cmps/ColorPicker';
import { Preview } from './cmps/Preview/Preview';

export const App = () => {
	const [ color, setColor ] = useState(0);

	const changeLogoColor = (color) => {
		setColor(color);
	};

	return (
		<div className="App main-layout">
			<ColorPicker changeLogoColor={changeLogoColor} />
			<Preview color={color} />
		</div>
	);
};
