import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) Replace the hard-coded image, description, link, etc. With their property variable
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

// According to React Official Documentation:
// PropTypes aren’t commonly used in modern React. Use TypeScript for static type checking.
// https://legacy.reactjs.org/docs/typechecking-with-proptypes.html

BootstrapCard.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
	// 2) Add here the new properties into the proptypes object
};

const props = {
	title: "Bob Dylan",
	imageUrl: "https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true",
	description: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter.",
	buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
	buttonLabel: "Go to wikipedia",
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(<BootstrapCard {...props} />, document.getElementById("myDiv"));
