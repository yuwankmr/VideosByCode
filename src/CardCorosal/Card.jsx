import {data} from '../data';
import './Reveal.css';
export const Card = (param) => {
	return (
		<div className="container" key={param.i}>
			{parseInt(param.i) + 1 != data.length && (
				<div
					key={param.i}
					style={{
						width: 1000,
						left: param.i * 1200 + 700,
						height: 10,
						background: 'black',
						position: 'absolute',
						top: 70,
						zIndex: 100,
					}}
				></div>
			)}
			<h1 className="Value">{param.value}</h1>
			<img src={param.img} alt="..."></img>
			<h1>
				{param.title.match(/.{1,30}\w/g)[0]}
				{param.title.length > 30 && '...'}
			</h1>
		</div>
	);
};
