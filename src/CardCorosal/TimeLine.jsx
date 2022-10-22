import {useEffect} from 'react';
import {AbsoluteFill, Sequence, Video} from 'remotion';
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
		<div style={{flex: 1, backgroundColor: '#050c18'}}>
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
					durationInFrames={config.slideduration * config.fps * data.length}
				>
					<Content />
				</Sequence>
				{/* <Sequence }
					from={config.slideduration * config.fps * (data.length - 3) - 0}
					 durationInFrames={config.fps * 15}
					 <h1
						style={{
							width: config.screen_width,
							height: config.screen_height,
							fontFamily: 'poppins',
							fontSize: 120,
							fontWeight: 'bold',
							textAlign: 'center',
							display: 'flex',
							// alignItems: 'center',
							justifyContent: 'center',
							textTransform: 'uppercase',
							backgroundRepeat: 'no-repeat',
							backgroundSize: '1920px 1080px',
							// backgroundImage: `url(${endcard})`,
						}}
					>
						<div
							style={{
								backgroundColor: 'darkred',
								width: 500,
								paddingTop: 120,
								height: config.screen_height,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<div
								style={{
									backgroundColor: 'white',
									height: 300,
									width: 300,
									borderRadius: 300,
								}}
							></div>
							<h6 style={{color: 'white'}}>SUBSCRIBE</h6>
						</div>

						<div
							style={{
								backgroundColor: '#222222',
								width: 1420,
								height: config.screen_height,
								display: 'flex',
								padding: '120px 130px 120px 20px',
								justifyContent: 'space-between',
							}}
						>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									paddingRight: 30,
								}}
							>
								<h6 style={{color: 'white'}}>CHECKOUT THESE VIDEOS</h6>
							</div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<div
									style={{
										backgroundColor: 'white',
										height: 360,
										width: 640,
									}}
								></div>
								<div
									style={{
										backgroundColor: 'white',
										height: 360,
										width: 640,
									}}
								></div>
							</div>
						</div>
					</h1> 
				</Sequence> */}
			</div>
		</div>
	);
};
