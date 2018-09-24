import React from 'react';
import EmployeePic from './EmployeePic.js';
import Pagination from './Pagination.js';
import SizeSelector from './SizeSelector.js';

export default class EmployeeGrid extends React.Component {

  generateRows(employeeComponentList) {
    var employeeList = this.props.employeeList.map(employee => <EmployeePic key={employee.id} employee={employee}/>);
    console.log("employeeComponentList.length", employeeComponentList.length);

    var rows = [];
    var rowsLength = employeeComponentList.length/4;

    for (var i = 0; i < rowsLength; i++) {
      console.log("push fila", i * 4);
      console.log("amount", (i * 4)+4);

      var row = (
        <div className="grid-x medium-10 large-8 align-center" data-equalizer id="employee__eq">
          {employeeList.slice(i * 4, i * 4 + 4 )}
        </div> );
        rows.push(row);
    }
    console.log("rows", rows);
    return rows;
  }
  render() {
    console.log("this.props.size", this.props.size);
    var employeeList = this.props.employeeList.map(employee => <EmployeePic key={employee.id} employee={employee}/>);
    var rows = this.generateRows(employeeList);
    // var firstRow = (
    //   <div className="grid-x medium-10 large-8 align-center" data-equalizer id="employee__eq">
    //     {employeeList.slice(0,4)}
    //   </div> );
    // var secondRow = (
    //   <div className="grid-x medium-10 large-8 align-center" data-equalizer id="employee__eq">
    //     {employeeList.slice(4,8)}
    //   </div> );
    // var thirdRow = (
    //   <div className="grid-x medium-10 large-8 align-center" data-equalizer id="employee__eq">
    //     {employeeList.slice(8,12)}
    //   </div> );

    // var filitas = [];
    // filitas.push(firstRow);
    // filitas.push(secondRow);
    // filitas.push(thirdRow);

    // console.log("filitas", filitas);
    return (
      <div className="grid-container">
      <div className="grid-x medium-10 large-8 align-center">
        <SizeSelector changePageSize={this.props.changePageSize.bind(this)}/>
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
