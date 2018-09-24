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
      sort: null,
      employeeList: [],
      isLoading: true,
      shouldUpdate: true
    };
    this.changePageNumber = this.changePageNumber.bind(this);
    this.changePageSize = this.changePageSize.bind(this);
  }

  changePageNumber(pageNumber) {
    this.setState(() => ({pageNumber: pageNumber, shouldUpdate: true}));
  }
  changePageSize(pageSize) {
    this.setState(() => ({pageSize: pageSize, shouldUpdate: true}));
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

    if (this.state.pageNumber !== undefined && this.state.pageNumber !== null) {
      urlToCall += `?page=${this.state.pageNumber}`;
    }
    if (this.state.size !== undefined && this.state.size !== null && this.state.size > 0) {
      urlToCall += `&size=${this.state.size}`;
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
    });
    console.log("["+ methodName +" -> getData]this.state", this.state);
    this.state.employeeList.forEach(function(element) {
      console.log(element);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNumber !== this.state.pageNumber) {
      this.getData(this.componentDidUpdate.name);
    }
  }

  render() {
    console.log("[render]this.state", this.state);
    if (this.state.isLoading) {
      return (<div className="App">
        <h2>Loading...</h2>
      </div>)
    }
    return (<div className="App">
      <EmployeeGrid
        changePageNumber={this.changePageNumber.bind(this)}
        employeeList={this.state.employeeList}
        pageNumber={this.state.pageNumber}
        totalPages={this.state.totalPages}
      />
    </div>);
  }
}

export default App;
