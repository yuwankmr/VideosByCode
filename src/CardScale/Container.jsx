import {interpolate, useCurrentFrame} from 'remotion';
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
				background: 'white',
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
				}} [0,4,8,12]
					 [1,1,0.5,0.25]
			></div> */}
			{Object.keys(data).map((key_val, i) => {
				const divider = (i, ii) => {
					return (
						Number(data[i].value.replace(' m', '')) /
						Number(data[ii].value.replace(' m', ''))
					);
				};

				const scale =
					i + 1 >= data.length
						? 1
						: interpolate(
								frame,
								[
									0 * config.fps + i * config.fps * 5,
									4.8 * config.fps + i * config.fps * 5,
									5 * config.fps + i * config.fps * 5,
									9.8 * config.fps + i * config.fps * 5,
									10 * config.fps + i * config.fps * 5,
								],
								[
									1,
									1,
									divider(i, i + 1 >= data.length ? i : i + 1),
									divider(i, i + 1 >= data.length ? i : i + 1),
									divider(i, i + 2 >= data.length ? i + 1 : i + 2),
								],
								{
									extrapolateRight: 'clamp',
								}
						  );
				return (
					<div
						style={{
							width: 960,
						}}
					>
						<div
							style={{
								transform: `scale(${scale})`,
								transformOrigin: 'bottom',
							}}
						>
							<Card
								i={key_val}
								title={data[key_val].title}
								value={data[key_val].value}
								img={data[key_val].img}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};
