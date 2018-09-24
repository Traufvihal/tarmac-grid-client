import React from 'react';

export default class EmployeePic extends React.Component{
	render() {
		return (
				<div className="cell small-6 medium-4 large-2 employee-container" data-equalizer-watch>
						<img className="employee-image" src={this.props.employee.pictureUrl} alt={this.props.employee.name}></img>
				    <div className="employee-overlay">
							<div className="employee-text-block">
								<span className="employee-text">{this.props.employee.name}</span>
								<span className="employee-text role">{this.props.employee.role}</span>
								<span className="employee-text">{this.props.employee.city}</span>
							</div>
				    </div>
				</div>
		)
	}
}
