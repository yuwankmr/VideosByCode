import {useCurrentFrame} from 'remotion';
import {data} from '../data';
import {Card} from './Card';
import {config} from './config';

export const Content = () => {
	const frame = useCurrentFrame();
	const tranformX = frame * config.translate_x_per_frame;
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
	// console.log(data);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'bottom',
				alignItems: 'bottom',
				bottom: '40px',
				position: 'absolute',
				gap: `${config.card_gap}px`,
				margin: `0 ${config.screen_width}px`,
				transform: `translateX(-${tranformX}px)`,
				// background: 'gold',
			}}
		>
			{Object.keys(data).map((key_val, i) => (
				<Card
					rotation={rotation_start == i || rotation_end == i ? 0 : 25}
					position={Object.keys(data).length - i}
					title={data[key_val].name}
					value={data[key_val].price}
					img={data[key_val].image}
				/>
			))}
		</div>
	);
};
