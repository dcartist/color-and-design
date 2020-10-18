import React, { Component } from 'react'
import PaginationActive from '../Pagination/PaginationActive'
import FullColor from '../Colors/ColorFullSelector'
import Loader from '../Loader/Loader'
import axios from 'axios'
import './Color.css'

class ColorMainPage extends Component {
    
	state = {
		activePage: 0,
		searchSelected: false,
        searchInput: '',
        errorMessage:"",
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
            if (results.data.length == 0 && this.state.searchSelected == false){
                this.setState({errorMessage: "Sorry but no color found", searchSelected: true})
            } else if (results.data.length == 0 && this.state.searchSelected ) {
                this.setState({errorMessage: "", searchSelected:false})
            }
             else {
                this.setState({errorMessage: "", searchSelected:false})
            }
			// console.log(this.state.color[0].id);
			console.log(results.data.length);
			console.log(`Post pagination active page change to ${this.state.activePage} URL is ${url}`);
		});
	};
	handleInput = (e) => {
		e.preventDefault()
        this.setState({ searchSelected: false, searchInput: e.target.value });
           
    };
    handleEnter = (e) => {
       
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault()
            if (this.state.searchInput.length == 0){
                this.setState({searchSelected: true, errorMessage: "", activePage:0})
                let url = `https://flask.colorand.design/colors/full/${this.state.activePage}`;
		axios.get(url).then((results) => {
			this.setState({ color: results.data });
			console.log(`Post Mounted active page change to ${this.state.activePage} URL is ${url} `);
		});
            } else{
                this.handleSearch()
            }
           
          }
    }
	handlePaginationChange = (e, { activePage }) => {
		// e.preventDefault()
		let urlPage = activePage - 1;
		this.setState({ activePage: activePage, searchSelected: true, errorMessage: "" });

		let url = `https://flask.colorand.design/colors/full/${urlPage}`;
		console.log(`before axios call active page change to ${this.state.activePage} URL is ${url}`);
		axios.get(url).then((results) => {
			this.setState({ color: results.data });
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
		if (this.state.color.length == 0 && this.state.searchSelected == false) {
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
                    <div className="ErrorSearch">

                        <h2>{this.state.errorMessage}</h2>
                    </div>
                  
					<FullColor {...this.state} />
				</div>
			);
		}
	}
}

export default ColorMainPage;
