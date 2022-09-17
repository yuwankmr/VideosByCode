import {useEffect} from 'react';
import {Sequence} from 'remotion';
import {data} from '../data';
import {Card} from './Card';
import {config} from './config';
import {Content} from './Container';
import {Title} from './Title';

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
				<Sequence from={0} durationInFrames={config.fps * (data.length + 10)}>
					<Title
						titleText={
							<h1>
								The Evalution
								<br></br> of iPhones <br></br> 2007 - 2022
							</h1>
						}
					/>
				</Sequence>
				<Sequence
					from={config.fps * data.length}
					durationInFrames={
						config.slideduration * config.fps * (data.length - 3)
					}
				>
					<Content />
				</Sequence>
				<Sequence
					from={
						(data.length - 1) * config.fps * config.slideduration +
						config.fps * 1
					}
					durationInFrames={config.fps * 30}
				>
					<Title titleText={<h1>Thanks For Watching!</h1>} />
				</Sequence>
			</div>
		</div>
	);
};
