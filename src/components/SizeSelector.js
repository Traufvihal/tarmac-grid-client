import React from 'react';

export default class SizeSelector extends React.Component{
	constructor() {
		super();
		this.selectSize = this.selectSize.bind(this);
	}

	selectSize(e) {
		console.log("SIZE SELECTED", e.target.value);
		this.props.changePageSize(parseInt(e.target.value));
	}
	//changePageSize
	render() {
		return (
				<div className="size-selector-container cell small-3 medium-2" data-equalizer-watch>
					<label for="size-selector">Page size</label>
					<select id="size-selector" onChange={this.selectSize}>
						<option value="12">12</option>
						<option value="16">16</option>
						<option value="20">20</option>
					</select>
				</div>
		)
	}
}
