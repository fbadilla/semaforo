import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: ""
		};
	}
	render() {
		return (
			<div className="container">
				<div id="traffic">
					<div
						className={
							"red ligth " +
							(this.state.selected == "red" ? "selected" : "")
						}
						onClick={() => {
							this.setState({ selected: "red" });
						}}
					/>
					<div
						className={
							"yelow ligth " +
							(this.state.selected == "yelow" ? "selected" : "")
						}
						onClick={() => {
							this.setState({ selected: "yelow" });
						}}
					/>
					<div
						className={
							"green ligth " +
							(this.state.selected == "green" ? "selected" : "")
						}
						onClick={() => {
							this.setState({ selected: "green" });
						}}
					/>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	a: PropTypes.string,
	b: PropTypes.string,
	c: PropTypes.string
};
