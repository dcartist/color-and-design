import React, { Component } from 'react';
import Modal from "../Modal/Modal"
import Cards from "../Card/CardCusomDesign"
import axios from 'axios';
import "./Color.css"
class ColorPageAlphabet extends Component {
    constructor(props){
        super(props)
        this.state={
          color:[]
        }
      }
    componentDidMount(){
    console.log(this.props.match.params.pageNumber)
    console.log("testing")
    let url = `https://flask.colorand.design/colors/snippet/${this.props.match.params.snippet}`
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


export default ColorPageAlphabet;