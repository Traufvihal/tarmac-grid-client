import React from 'react';

export default class EmployeePic extends React.Component{
	render() {
		return (
				<div className="cell small-6 medium-4 large-1" data-equalizer-watch>
						<img src={this.props.employee.pictureUrl} alt={this.props.employee.name}></img>
				    <div >
				      <span>{this.props.employee.name}</span>
				      <span>{this.props.employee.role}</span>
				      <span>{this.props.employee.city}</span>
				    </div>
				</div>
		)
	}
}
