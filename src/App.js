import React, {Component} from 'react';
import EmployeeGrid from './components/EmployeeGrid.js';
import './App.css';
import $ from 'jquery';
import { Foundation } from '../node_modules/foundation-sites/js/foundation.core';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pageNumber: 0,
      size: 12,
      role: '',
      sort: '',
      employeeList: [],
      isLoading: true,
      shouldUpdate: true
    };
    this.changePageNumber = this.changePageNumber.bind(this);
    this.changePageSize = this.changePageSize.bind(this);
    this.filterByRole = this.filterByRole.bind(this);

  }

  changePageNumber(pageNumber) {
    this.setState(() => ({pageNumber: pageNumber, shouldUpdate: true}));
  }
  changePageSize(pageSize) {
    this.setState(() => ({size: pageSize, shouldUpdate: true}));
  }

  filterByRole(role) {
    this.setState(() => ({role: role, shouldUpdate: true}));
  }

  componentDidMount() {
    // this.setState({isLoading: true});
    if (this.state.shouldUpdate) this.getData(this.componentDidMount.name);
    Foundation.addToJquery($);
    $(document).foundation();
  }

  getData(methodName) {

    const URL_ROOT = "http://localhost:8080/api/employees/";
    var urlToCall = URL_ROOT;

    if (this.state.role !== undefined && this.state.role !== null && this.state.role !== '') {
      urlToCall = URL_ROOT + `search/findByRoleContainingIgnoreCase?role=${this.state.role}`;
      urlToCall += `&page=${this.state.pageNumber}`;
      urlToCall += `&size=${this.state.size}`;
    } else {
      if (this.state.pageNumber !== undefined && this.state.pageNumber !== null) {
        urlToCall += `?page=${this.state.pageNumber}`;
      }
      if (this.state.size !== undefined && this.state.size !== null && this.state.size > 0) {
        urlToCall += `&size=${this.state.size}`;
      }
    }

    console.log("[ getData ] urlToCall", urlToCall);
    fetch(urlToCall).then(res => res.json()).then(json => {
      this.setState({
        pageNumber: json.page.number,
        size: json.page.size,
        employeeList: json._embedded.employees,
        totalPages: json.page.totalPages,
        isLoading: false,
        shouldUpdate: false
      });
      console.log(json);
    });
    console.log("[AFTER REST CALL]this.state", this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.pageNumber !== this.state.pageNumber) ||
      (prevState.size !== this.state.size) ||
      (prevState.role !== this.state.role)
      ) {
      this.getData(this.componentDidUpdate.name);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (<div className="App">
        <h2>Loading...</h2>
      </div>)
    }
    return (<div className="App">
      <EmployeeGrid
        changePageNumber={this.changePageNumber.bind(this)}
        changePageSize={this.changePageSize.bind(this)}
        filterByRole={this.filterByRole.bind(this)}
        employeeList={this.state.employeeList}
        pageNumber={this.state.pageNumber}
        totalPages={this.state.totalPages}
        size={this.state.size}
      />
    </div>);
  }
}

export default App;
