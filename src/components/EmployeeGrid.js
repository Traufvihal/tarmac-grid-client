import React from 'react';
import EmployeePic from './EmployeePic.js';
import Pagination from './Pagination.js';
import SizeSelector from './SizeSelector.js';
import RoleFilter from './RoleFilter.js';


export default class EmployeeGrid extends React.Component {

  generateRows(employeeComponentList) {
    var employeeList = this.props.employeeList.map(employee => <EmployeePic key={employee.id} employee={employee}/>);
    var rows = [];
    var rowsLength = employeeComponentList.length/4;

    for (var i = 0; i < rowsLength; i++) {
      var row = (
        <div className="grid-x medium-10 large-8 align-center" data-equalizer id="employee__eq">
          {employeeList.slice(i * 4, i * 4 + 4 )}
        </div> );
        rows.push(row);
    }
    return rows;
  }
  render() {
    var employeeList = this.props.employeeList.map(employee => <EmployeePic key={employee.id} employee={employee}/>);
    var rows = this.generateRows(employeeList);

    return (
      <div className="grid-container">
      <div className="grid-x medium-10 large-8 align-center">
        <SizeSelector changePageSize={this.props.changePageSize.bind(this)}/>
        <RoleFilter filterByRole={this.props.filterByRole.bind(this)}/>
      </div>
      <div>
        {rows}
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
