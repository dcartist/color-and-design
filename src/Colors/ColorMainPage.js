import React, { Component } from 'react';
import PaginationActive from '../Pagination/PaginationActive'
import Modal from '../Modal/Modalboot'
import Loader from "../Loader/Loader"
import FullColor from '../Colors/ColorFullSelector'
import axios from 'axios';
import "./Color.css"

class ColorMainPage extends Component {
 state = { activePage: 0,
    activeSelection:"",
    color:[] }

  handlePaginationChange = (e, { activePage }) => {
    // e.preventDefault();
    let urlPage = activePage - 1
    this.setState({ activePage: activePage })
    
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
        }else {

            return (
                <div>
                    <div className="PaginationCenter">
                    <PaginationActive activePage={this.state.activePage} handleInputChange={this.handleInputChange} handlePaginationChange={this.handlePaginationChange} ></PaginationActive>
                    </div>
                    
                    <FullColor activeSelection={this.state.activePage} color={this.state.color}></FullColor>
    
                    {/* <Modal></Modal> */}
                </div>
            );
        }
    }
}


export default ColorMainPage;