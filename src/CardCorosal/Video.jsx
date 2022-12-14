import {Composition} from 'remotion';
import {HelloWorld} from './TimeLine';
import {data} from '../data';
import {config} from './config';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={Math.round(
					data.length * config.fps * config.slideduration
				)}
				fps={config.fps}
				width={config.screen_width}
				height={config.screen_height}
				defaultProps={{
					titleText: config.title_text,
					titleColor: 'black',
				}}
			/>
		</>
	);
};
