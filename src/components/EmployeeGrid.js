import React from 'react';
import EmployeePic from './EmployeePic.js';
import Pagination from './Pagination.js';
import SizeSelector from './SizeSelector.js';

export default class EmployeeGrid extends React.Component {

  render() {

    var employeeList = this.props.employeeList.map(employee => <EmployeePic key={employee.id} employee={employee}/>);
    var firstRow = (
      <div className="grid-x medium-10 large-8 align-center" data-equalizer id="employee__eq">
        {employeeList.slice(0,4)}
      </div> );
    var secondRow = (
      <div className="grid-x medium-10 large-8 align-center" data-equalizer id="employee__eq">
        {employeeList.slice(4,8)}
      </div> );
    var thirdRow = (
      <div className="grid-x medium-10 large-8 align-center" data-equalizer id="employee__eq">
        {employeeList.slice(8,12)}
      </div> );
    return (
      <div className="grid-container">
      <div className="grid-x medium-10 large-8 align-center">
        <SizeSelector/>
      </div>
      <div>
        {firstRow}
        {secondRow}
        {thirdRow}
      </div>

      <div >
        <Pagination
          changePageNumber={this.props.changePageNumber.bind(this)}
          pageNumber={this.props.pageNumber}
          totalPages={this.props.totalPages}
        />
      </div>
    </div>)
  }
}
