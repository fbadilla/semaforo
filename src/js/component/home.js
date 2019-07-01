import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			red: true,
			yelow: true,
			green: true
		};
	}
	render() {
		return (
			<div className="container">
				<div id="traffic">
					<div
						className={
							"red ligth " + (this.state.red ? "selected" : "")
						}
					/>
					<div
						className="yelow ligth "
						onclick={() => (this.state.yelow ? "selected" : "")}
					/>
					<div
						className="green ligth "
						onclick={() => (this.state.yelow ? "selected" : "")}
					/>
				</div>
			</div>
		);
	}
}
