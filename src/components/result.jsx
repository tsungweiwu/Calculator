import React, { Component } from "react";

class ResultComponent extends Component {
	render() {
		let { result } = this.props;
		return (
			<div>
				<input
					disabled
					className="form-control"
					id="panel"
					name="panel"
					value={result}
				/>
			</div>
		);
	}
}

export default ResultComponent;
