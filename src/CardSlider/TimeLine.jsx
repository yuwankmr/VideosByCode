import {Sequence} from 'remotion';
import {Content} from './Container';
import {Title} from './Title';

export const HelloWorld = ({titleText, titleColor}) => {
	return (
		<div style={{flex: 1, backgroundColor: 'gold'}}>
			<div>
				<Sequence from={0}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={0}>
					<Content />
				</Sequence>
			</div>
		</div>
	);
};
