import React, { Component } from 'react';
import Modal from "../Modal/Modal"
import Cards from "../Card/CardCusomDesign"
import axios from 'axios';
import "./Color.css"

class Colors extends Component {
    constructor(){
        super()
        this.state={
          color:[]
        }
      }
    componentDidMount(){
    console.log("testing")
    let url = "https://flask.colorand.design/colors/full/0"
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


export default Colors;