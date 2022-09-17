import {useCurrentFrame} from 'remotion';
import {data} from '../data';
import {Card} from './Card';
import {config} from './config';

export const Content = () => {
	const frame = useCurrentFrame();
	const tranformX = frame * 8;
	const rotation_start = Math.floor(
		(frame - config.card_width / config.translate_x_per_frame) /
			((config.card_width + config.card_gap) / config.translate_x_per_frame)
	);
	const rotation_end = Math.floor(
		(frame -
			config.card_width / config.translate_x_per_frame -
			(config.card_width + config.card_gap) / config.translate_x_per_frame) /
			((config.card_width + config.card_gap) / config.translate_x_per_frame)
	);
	return (
		<div
			style={{
				display: 'flex',
				margin: `0 ${config.screen_width}px`,
				transform: `translateX(-${tranformX}px)`,
				background: 'white',
			}}
		>
			{Object.keys(data).map((key_val, i) => {
				return (
					<Card
						i={key_val}
						title={data[key_val].title}
						value={data[key_val].value}
						img={data[key_val].img}
					/>
				);
			})}
		</div>
	);
};
