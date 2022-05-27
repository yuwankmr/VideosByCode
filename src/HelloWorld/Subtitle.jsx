import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1} from './config';

export const Subtitle = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div
			style={{
				fontFamily: 'Helvetica, Arial',
				fontSize: 40,
				textAlign: 'center',
				position: 'absolute',
				bottom: 140,
				width: '100%',
				opacity,
			}}
		>
			Edit{' '}
			<code
				style={{
					color: COLOR_1,
				}}
			>
				src/Video.jsx
			</code>{' '}
			and save to reload.
		</div>
	);
};
