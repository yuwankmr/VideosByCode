import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {config} from './config';
import './Reveal.css';
export const Card = (param) => {
	const frame = useCurrentFrame();
	const tranformX = interpolate(frame, [0, 40], [50, 0], {
		extrapolateLeft: 'ease',
	});

	return (
		<div style={{display: 'flex'}}>
			<div
				className="container"
				// style={{transform: `translateX(-${tranformX}%)`}}
			>
				<h1 className="Value" style={{background: 'red'}}>
					{param.value}
				</h1>
				<img src={param.img} alt="..."></img>
				<h1 className="name">{param.title}</h1>
			</div>
			<div
				className="container"
				// style={{transform: `translateX(-${tranformX}%)`}}
			>
				<h1 className="Value" style={{background: 'royalblue'}}>
					{param.value2}
				</h1>
				<img src={param.img2} alt="..."></img>
				<h1 className="name">{param.title2}</h1>
			</div>
		</div>
	);
};
