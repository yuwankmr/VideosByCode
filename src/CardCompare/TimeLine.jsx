import {useEffect} from 'react';
import {Sequence} from 'remotion';
import {data} from '../data';
import {Card} from './Card';
import {config} from './config';
import {Title} from './Title';

export const HelloWorld = ({titleText, titleColor}) => {
	useEffect(() => {
		const imagesPreload = [...data.map((t) => t[0].img)];
		imagesPreload.forEach((image) => {
			const newImage = new Image();
			newImage.src = image;
			window[image] = newImage;
		});

		const imagesPreload2 = [...data.map((t) => t[1].img)];
		imagesPreload2.forEach((image) => {
			const newImage = new Image();
			newImage.src = image;
			window[image] = newImage;
		});
	}, []);
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div>
				<Sequence from={0} durationInFrames={config.fps * 5}>
					<h1
						className="title"
						style={{
							width: config.screen_width,
							height: config.screen_height,
							background: 'white',
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
					>
						30 Marvel and DC CopyCat Characters
					</h1>
				</Sequence>
				{Object.keys(data).map((key_val, i) => (
					<Sequence
						key={i}
						from={i * config.fps * config.slideduration + config.fps * 5}
						durationInFrames={config.fps * config.slideduration}
					>
						<Card
							position={Object.keys(data).length - i}
							title={data[key_val][0].title}
							value={data[key_val][0].value}
							img={data[key_val][0].img}
							title2={data[key_val][1].title}
							value2={data[key_val][1].value}
							img2={data[key_val][1].img}
						/>
					</Sequence>
				))}
				<Sequence
					from={
						data.length * config.fps * config.slideduration + config.fps * 5
					}
					durationInFrames={config.fps * 10}
				>
					<Title titleText={<h1>Thanks For Watching!</h1>} />
				</Sequence>
			</div>
		</div>
	);
};
