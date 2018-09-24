import React from 'react';

export default class SizeSelector extends React.Component{
	render() {
		return (
				<div className="size-selector-container cell small-6 medium-4" data-equalizer-watch>
					<select>
						<option value="12">12</option>
						<option value="24">24</option>
					</select>
				</div>
		)
	}
}
