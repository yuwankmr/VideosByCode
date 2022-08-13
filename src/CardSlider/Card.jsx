import {config} from './config';
import './style.css';
// import {continueRender, delayRender} from 'remotion';
// import {useEffect, useCallback, useState} from 'react';
export const Card = (param) => {
	const styles = {
		card: {
			height: `${config.card_height}px`,
			width: `${config.card_width}px`,
			objectFit: 'cover',
			background: 'pink',
			WebkitBoxReflect:
				'below 2px linear-gradient(transparent, transparent, #0004)',
			transformOrigin: 'center',
			// transform: `perspective(800px) rotateY(${param.rotation}deg) scale(${
			// 	param.rotation == 0 ? 1 : 0.75
			// })`,
			transition: '0.5s',
			border: '5px solid black',
			borderRadius: '24px',
			fontFamily: 'Helvetica, Arial',
			textAlign: 'center',
			// opacity: param.rotation == 0 ? 1 : 0.5,
		},
		img: {
			objectFit: 'contain',
			width: '1000px',
			height: 'auto',
			boxShadow: '10px 10px 20px black',
			borderRadius: 12,
			marginTop: '100px',
			// border: '10px solid black',
		},
		value: {
			fontSize: 80,
			fontWeight: 'bolder',
			color: 'white',
			background: 'maroon',
			paddingTop: '40px',
			paddingBottom: '40px',
			margin: '0 0 -50px',
			borderRadius: '24px 24px 0 0',
		},
		value_key: {
			fontSize: 70,
			margin: '70px 0',
			textTransform: 'Uppercase',
			padding: '0 10px',
			fontWeight: 'bolder',
		},
	};

	// const [img, setimg] = useState('');
	// const [handle] = useState(() => delayRender());

	// const fetchData = useCallback(async () => {
	// 	const response = await fetch(
	// 		`https://restcountries.com/v3.1/name/${param.title.trim()}?fullText=true`
	// 	)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			try {
	// 				setimg(data[0].flags.png);
	// 			} catch (error) {
	// 				console.log(param.title.trim());
	// 			}
	// 		});
	// 	continueRender(handle);
	// }, [handle]);

	// useEffect(() => {
	// 	fetchData();
	// }, [fetchData]);
	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<span
					style={{
						textAlign: 'center',
						padding: '10px 20px',
						borderRadius: '24px',
						background: 'black',
						fontSize: 50,
						color: 'white',
						fontWeight: 'bold',
						position: 'absolute',
						top: '-40px',
						width: '150px',
						textAlign: 'center',
						zIndex: '5',
					}}
				>
					{param.position}
				</span>
			</div>
			<div style={styles.card} className={'card'}>
				<div style={styles.value}>${param.value}M</div>
				<img style={styles.img} src={param.img} />
				<div style={styles.value_key}>{param.title}</div>
			</div>
		</div>
	);
};
