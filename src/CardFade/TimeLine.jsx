import {useEffect} from 'react';
import {Sequence} from 'remotion';
import {data} from '../data';
import {Card} from './Card';
import {config} from './config';
import {Title} from './Title';

export const HelloWorld = ({titleText, titleColor}) => {
	useEffect(() => {
		const imagesPreload = [...data.map((t) => t.image)];
		imagesPreload.forEach((image) => {
			const newImage = new Image();
			newImage.src = image;
			window[image] = newImage;
		});
	}, []);
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div>
				<Sequence from={0} durationInFrames={config.fps * 5}>
					<Title
						titleText={
							<h1>
								TOP 40
								<br></br> Most Expensive Books <br></br> IN THIS PLANET.
							</h1>
						}
					/>
				</Sequence>
				{Object.keys(data).map((key_val, i) => (
					<Sequence
						key={i}
						from={i * config.fps * config.slideduration + config.fps * 5}
						durationInFrames={config.fps * config.slideduration}
					>
						<Card
							position={Object.keys(data).length - i}
							title={data[key_val].name}
							value={data[key_val].price}
							img={data[key_val].image}
						/>
					</Sequence>
				))}
				<Sequence
					from={
						data.length * config.fps * config.slideduration + config.fps * 5
					}
					durationInFrames={config.fps * 10}
				>
					<Title
						titleText={
							<h1>
								Thanks For <br></br> Watching!
							</h1>
						}
					/>
				</Sequence>
			</div>
		</div>
	);
};
