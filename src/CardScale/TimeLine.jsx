import {useEffect} from 'react';
import {Sequence} from 'remotion';
import {data} from '../data';
import {config} from './config';
import {Content} from './Container';
import './style.css';
// import endcard from '../assets/endcard.mp4';

export const HelloWorld = () => {
	useEffect(() => {
		const imagesPreload = [...data.map((t) => t.img)];
		imagesPreload.forEach((image) => {
			const newImage = new Image();
			newImage.src = image;
			window[image] = newImage;
		});
	}, []);
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div>
				<Sequence
					from={0}
					durationInFrames={config.fps * config.slideduration * 2}
				>
					<h1
						className="title"
						style={{
							width: config.screen_width,
							height: config.screen_height,
							padding: 10,
							fontFamily: 'Poppins',
							fontSize: 150,
							fontWeight: 'bold',
							textAlign: 'center',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textTransform: 'uppercase',
						}}
					></h1>
				</Sequence>
				<Sequence
					from={0}
					durationInFrames={
						(config.slideduration + 1) * config.fps * data.length
					}
				>
					<Content />
				</Sequence>
			</div>
		</div>
	);
};
