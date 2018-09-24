import React from 'react';

export default class RoleFilter extends React.Component{
	constructor() {
		super();
		this.filterByInput = this.filterByInput.bind(this);
	}

	filterByInput(e) {
		if (e.key === 'Enter') {
      this.props.filterByRole(e.target.value);
    }
	}

	render() {
		return (
				<div className="size-selector-container cell small-3 medium-2">
					<label htmlFor="filter">Filter by role</label>
					<input id="filter" type="text" name="role" placeholder="DevOps"
					onKeyPress={this.filterByInput}></input>
				</div>
		)
	}
}
