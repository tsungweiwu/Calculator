import React, { Component } from "react";
import ResultComponent from "./result";
import KeypadComponent from "./keypad";

class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			result: ""
		};
	}

	render() {
		// or instead of using result.jsx you can include it into this page
		// let { result } = this.props; // sets variable result as the prop's value
		return (
			<div className="container center_div">
				<h1 className="text-center padding">Calculator</h1>
				<div className="row saleh">
					<div className="calcontainer">
						<form name="form">
							<ResultComponent result={this.state.result} />

							{/* ^ OR
								<input
								disabled
								className="form-control"
								id="panel"
								name="panel"
								value={this.state.result}
							/> */}

							<KeypadComponent onClick={this.onClick} />
						</form>
					</div>
				</div>
			</div>
		);
	}

	onClick = button => {
		if (button === "=") {
			this.calculate();
		} else if (button === "CE") {
			this.reset();
		} else if (button === "DEL") {
			this.backspace();
		} else {
			this.setState({
				result: this.state.result + button
			});
		}
	};

	calculate = () => {
		try {
			this.setState({
				// eslint-disable-next-line
				// evaluates the string or output blank
				result: (eval(this.state.result) || "") + ""
			});
		} catch (e) {
			this.setState({
				result: "error"
			});
		}
	};

	reset = () => {
		this.setState({
			result: ""
		});
	};

	backspace = () => {
		this.setState({
			result: this.state.result.slice(0, -1)
		});
	};
}

export default Calculator;
