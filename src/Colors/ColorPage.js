import React, { Component } from 'react';
import Cards from "../Card/Card"
import axios from 'axios';
import "./Color.css"
class ColorPage extends Component {
    constructor(props){
        super(props)
        this.state={
          color:[]
        }
      }
    componentDidMount(){
    // console.log(this.props.match.params.pageNumber)
    console.log(this.props.location.pathname)
    console.log("testing")
    let url = `https://flask.colorand.design/colors/full/${this.props.match.params.pageNumber}`
        axios.get(url).then(
            results=> {
                this.setState({color:results.data})
                console.log(this.state.color)
                console.log(results.data)
                console.log("test")
            }
        )
    }

    render() {
        return (
            <div className="colorBase">
                {this.state.color.map((item, index)=>(
                    <Cards {...item} key={index}></Cards>
                ))}
            </div>
        );
    }
}


export default ColorPage;