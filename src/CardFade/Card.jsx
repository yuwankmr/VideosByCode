import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {config} from './config';
import './Reveal.css';
export const Card = (param) => {
	const frame = useCurrentFrame();

	const swipereveal = (val1, val2) => {
		return interpolate(frame, val1, val2, {
			easing: Easing.bezier(0.74, 0.06, 0.4, 0.92),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
	};

	const width = swipereveal([0, config.fps, config.fps * 2], [0, 100, 0]);
	const left = swipereveal([config.fps, config.fps * 2], [0, 100]);
	const opacity = interpolate(
		frame,
		[config.fps + config.fps / 2, config.fps * 2 + config.fps / 2],
		[0, 100],
		{
			extrapolateRight: 'clamp',
		}
	);

	const width2 = swipereveal(
		[config.fps * 2, config.fps * 3, config.fps * 4],
		[0, 100, 0]
	);
	const left2 = swipereveal([config.fps * 3, config.fps * 4], [0, 100]);
	const opacity2 = interpolate(
		frame,
		[config.fps * 3 + config.fps / 2, config.fps * 4 + config.fps / 2],
		[0, 100],
		{
			extrapolateRight: 'clamp',
		}
	);

	const opacity3 = interpolate(
		frame,
		[config.fps * 3 + config.fps / 2, config.fps * 4 + config.fps / 2],
		[0, 100],
		{
			extrapolateRight: 'clamp',
		}
	);

	const imagescale = interpolate(
		frame,
		[0, config.fps, config.fps * 2],
		[0, 1.3, 1],
		{
			easing: Easing.in(),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const imagerotate = interpolate(
		frame,
		[0, config.fps, config.fps * 2],
		[0, 2, 0],
		{
			easing: Easing.in(),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const img_values = param.img.split(',');

	return (
		<div>
			<div
				className="background-image"
				style={{
					position: 'fixed',
					left: '-50px',
					right: '-10',
					zIndex: 1,
					display: 'block',
					// backgroundImage: `url(${param.img})`,
					width: '200%',
					height: '200%',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					filter: 'blur(10px)',
				}}
			></div>

			{img_values.length > 0 ? (
				img_values.map((img_url, i) => {
					return (
						<img
							key={i}
							src={img_url}
							alt="..."
							style={
								i == 0
									? {
											transform: `scale(${imagescale}) rotate(-${imagerotate}deg)`,
									  }
									: {opacity: opacity3}
							}
						></img>
					);
				})
			) : (
				<img
					src={param.img}
					alt="..."
					style={{transform: `scale(${imagescale}) rotate(-${imagerotate}deg)`}}
				></img>
			)}
			<span className="position">{param.position} </span>
			{param.location !== undefined ? (
				<img className="location-position" src={param.location}></img>
			) : null}
			<div className="container">
				<div className="box">
					<div className="title">
						<span
							className="block"
							style={{
								width: width + '%',
								left: left + '%',
							}}
						></span>
						<h1
							style={{
								opacity: opacity + '%',
							}}
						>
							{param.title.match(/.{1,30}\w/g)[0]}
							{param.title.length > 30 && '...'}
						</h1>
					</div>
					<div className="role">
						<div
							className="block"
							style={{
								width: width2 + '%',
								left: left2 + '%',
							}}
						></div>
						<p
							style={{
								opacity: opacity2 + '%',
							}}
						>
							{param.value}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
