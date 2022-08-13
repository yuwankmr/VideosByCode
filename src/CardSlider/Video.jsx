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
					Object.keys(data).length *
						((config.card_width + config.card_gap) /
							config.translate_x_per_frame) +
						config.screen_width / config.translate_x_per_frame
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
