import React, { Component } from "react";

class KeypadComponent extends Component {
	render() {
		return (
			<div>
				<br />
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="7"
					value="7"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="8"
					value="8"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="9"
					value="9"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-danger bttn"
					type="button"
					name="DEL"
					value="DEL"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-danger bttn"
					type="button"
					name="CE"
					value="CE"
					onClick={e => this.props.onClick(e.target.name)}
				/>

				<br />
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="4"
					value="4"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="5"
					value="5"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="6"
					value="6"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-danger bttn"
					type="button"
					name="*"
					value="X"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-danger bttn"
					type="button"
					name="/"
					value="/"
					onClick={e => this.props.onClick(e.target.name)}
				/>

				<br />
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="1"
					value="1"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="2"
					value="2"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="3"
					value="3"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-danger bttn"
					type="button"
					name="+"
					value="+"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-danger bttn"
					type="button"
					name="-"
					value="-"
					onClick={e => this.props.onClick(e.target.name)}
				/>

				<br />
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="0"
					value="0"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="."
					value="."
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name="("
					value="("
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-default bttn"
					type="button"
					name=")"
					value=")"
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<input
					className="form-group btn btn-success bttn"
					type="button"
					name="="
					value="="
					onClick={e => this.props.onClick(e.target.name)}
				/>
				<br />
			</div>
		);
	}
}

export default KeypadComponent;
