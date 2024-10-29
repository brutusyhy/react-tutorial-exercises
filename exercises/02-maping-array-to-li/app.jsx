import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * Change the content inside the map function
 **/
const animalsInHTML = animals.map((singleAnimal) => {
	return <li>{singleAnimal}</li>;
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
