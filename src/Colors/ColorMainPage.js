import React, { Component } from 'react';
import PaginationActive from '../Pagination/PaginationActive'
import Modal from '../Modal/Modalboot'
import Loader from "../Loader/Loader"
import FullColor from '../Colors/ColorFullSelector'
import axios from 'axios';

import "./Color.css"

class ColorMainPage extends Component {
 state = { activePage: 0,
    searchSelected: false,
    searchInput: "",
    activeSelection:"",
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    color:[] }
  handleSearch = (e) =>{
      e.preventDefault()
      this.setState({ searchSelected: false })
      console.log(e.value)
  }
  handleInput = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    this.setState({ searchSelected: false, handleInput: e.target.value })
}
  handlePaginationChange = (e, { activePage }) => {
    // e.preventDefault();
    let urlPage = activePage - 1
    this.setState({ activePage: activePage, searchSelected:true })
    
    let url = `https://flask.colorand.design/colors/full/${urlPage}`
    console.log(`before axios call active page change to ${this.state.activePage} URL is ${url}`)
        axios.get(url).then(
            results=> {
                this.setState({color:results.data})
                console.log(this.state.color[0].id)
                console.log(results.data)
                console.log(`Post pagination active page change to ${this.state.activePage} URL is ${url}`)
                // console.log(this.state.activePage)
            }
        )

  }

  componentDidMount(){
    console.log("testing")
    let url = `https://flask.colorand.design/colors/full/${this.state.activePage}`
        axios.get(url).then(
            results=> {
                this.setState({color:results.data})
                console.log(`Post Mounted active page change to ${this.state.activePage} URL is ${url} `)
            }
        )
    }

    render() {
        if (this.state.color.length == 0){
            return(
                <div className="PageLoader">
                    <Loader></Loader>
                </div>
            )
        }else if (this.state.searchSelected) {
            return (
                <div>
                    
                    <div className="PaginationCenter">
                        {/* <form>
                            <input type="text" onChange={this.handleInput} value={this.state.searchInput}></input>
                        </form> */}
                    <PaginationActive activePage={this.state.activePage} handleInputChange={this.handleInputChange} handlePaginationChange={this.handlePaginationChange} ></PaginationActive>
                    </div>
                    
                    <FullColor activeSelection={this.state.activePage} color={this.state.color}></FullColor>
    
                </div>
            );
        } else{

            return (
                <div>
                    {/* This is false
                     <form>
                            <input type="text"></input>
                        </form> */}
                    <div className="PaginationCenter">
                    <PaginationActive activePage={this.state.activePage} handleInputChange={this.handleInputChange} handlePaginationChange={this.handlePaginationChange} ></PaginationActive>
                    </div>
                    
                    <div className="PaginationCenter">
                    <PaginationActive activePage={this.state.activePage} handleInputChange={this.handleInputChange} handlePaginationChange={this.handlePaginationChange} ></PaginationActive>
                    </div>
                    
                    <FullColor activeSelection={this.state.activePage} color={this.state.color}></FullColor>
    
                </div>
            );
        }
    }
}


export default ColorMainPage;