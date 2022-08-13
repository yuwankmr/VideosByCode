export const Title = ({titleText, titleColor}) => {
	return (
		<h1
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bolder',
				fontSize: 100,
				textAlign: 'center',
				position: 'absolute',
				top: 400,
				width: '100%',
				color: titleColor,
			}}
		>
			{titleText}
		</h1>
	);
};
