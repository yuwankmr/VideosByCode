import './Reveal.css';
export const Card = (param) => {
	return (
		<div className="container" key={param.i}>
			<h1 className="Value">{param.value}</h1>
			<img src={param.img} alt="..."></img>
			<h1 className="name">
				{param.title.match(/.{1,30}\w/g)[0]}
				{param.title.length > 30 && '...'}
			</h1>
		</div>
	);
};
