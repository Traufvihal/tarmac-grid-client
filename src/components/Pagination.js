import React from 'react';

export default class Pagination extends React.Component{

	constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
  }

  nextPage(e) {
		// if (this.props.pageNumber !== this.props.totalPages - 1) {
		if (this.hasNext()) {
			this.props.changePageNumber(this.props.pageNumber + 1);
		}
    console.log("NEXT PAGE CLICKED")
  }
	prevPage(e) {
		// if (this.props.pageNumber > 0) {
		if (this.hasPrev()) {
			this.props.changePageNumber(this.props.pageNumber - 1);
		}
    console.log("PREV PAGE CLICKED")
  }

	hasNext(){
		return this.props.pageNumber !== (this.props.totalPages - 1) && (this.props.pageNumber < this.props.totalPages);
	}
	hasPrev(){
		return this.props.pageNumber > 0;
	}

	render() {
		return (
				<div className="tarmac__pagination">
					<nav>
						<ul className="pagination text-center">
							<li className="pagination-previous"><a onClick={this.prevPage}>Previous</a></li>
							<li className="current">{this.props.pageNumber + 1}</li>
							<li className="pagination-next"><a onClick={this.nextPage}>Next</a></li>
						</ul>
					</nav>
				</div>
		)
	}}
