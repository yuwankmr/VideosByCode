import {useCurrentFrame} from 'remotion';
import {data} from '../data';
import {Card} from './Card';
import {config} from './config';

export const Content = () => {
	const frame = useCurrentFrame();
	const tranformX = frame * 8;
	return (
		<div
			style={{
				display: 'flex',
				margin: `0 ${config.screen_width}px`,
				transform: `translateX(-${tranformX}px)`,
				background: '#0e0f40',
				// borderLeft: '10px solid black',
			}}
		>
			{/* <div
				style={{
					width: 1200 * (data.length - 1),
					left: 600,
					height: 10,
					background: 'black',
					position: 'absolute',
					top: 70,
				}}
			></div> */}
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
