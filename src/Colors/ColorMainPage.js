import React, { Component } from 'react';
import PaginationActive from '../Pagination/PaginationActive';
import Loader from '../Loader/Loader';
import FullColor from '../Colors/ColorFullSelector';
import axios from 'axios';
import './Color.css';

class ColorMainPage extends Component {
	state = {
		activePage: 0,
		searchSelected: false,
		searchInput: '',
		activeSelection: '',
		showEllipsis: true,
		showFirstAndLastNav: true,
		showPreviousAndNextNav: true,
		color: [],
	};
	handleSearch = () => {
		let url = `https://flask.colorand.design/colors/snippet/${this.state.searchInput}`;
		console.log(url);
		axios.get(url).then((results) => {
			this.setState({ color: results.data });
			console.log(this.state.color[0].id);
			console.log(results.data);
			console.log(`Post pagination active page change to ${this.state.activePage} URL is ${url}`);
		});
	};
	handleInput = (e) => {
		e.preventDefault()
        this.setState({ searchSelected: false, searchInput: e.target.value });
           
    };
    handleEnter = (e) => {
        // if (e.key === 'Enter') {
        //     this.handleSearch()
        //   }
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault()
            this.handleSearch()
          }
    }
	handlePaginationChange = (e, { activePage }) => {
		// e.preventDefault()
		let urlPage = activePage - 1;
		this.setState({ activePage: activePage, searchSelected: true });

		let url = `https://flask.colorand.design/colors/full/${urlPage}`;
		console.log(`before axios call active page change to ${this.state.activePage} URL is ${url}`);
		axios.get(url).then((results) => {
			this.setState({ color: results.data });
			console.log(this.state.color[0].id);
			console.log(results.data);
			console.log(`Post pagination active page change to ${this.state.activePage} URL is ${url}`);
		});
	};

	componentDidMount() {
		console.log('testing');
		let url = `https://flask.colorand.design/colors/full/${this.state.activePage}`;
		axios.get(url).then((results) => {
			this.setState({ color: results.data });
			console.log(`Post Mounted active page change to ${this.state.activePage} URL is ${url} `);
		});
	}

	render() {
		if (this.state.color.length == 0) {
			return (
				<div className="PageLoader">
					<Loader />
				</div>
			);
		} else {
			return (
				<div>
                    <div className="SearchFunction">
								<input type="text" onChange={this.handleInput} onKeyDown={this.handleEnter} />
							<button onClick={this.handleSearch}>Find the color!</button>
						</div>
					<div className="PaginationCenter">
						<PaginationActive
							activePage={this.state.activePage}
							handleInputChange={this.handleInputChange}
							handlePaginationChange={this.handlePaginationChange}
						/>
					</div>

					<FullColor activeSelection={this.state.activePage} color={this.state.color} />
				</div>
			);
		}
	}
}

export default ColorMainPage;
