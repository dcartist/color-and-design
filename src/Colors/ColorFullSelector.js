import React, { Component } from 'react';
import Cards from "../Card/CardCusomDesign"
import Loader from "../Loader/Loader"
import axios from 'axios';
import "./Color.css"
class ColorPage extends Component {
    constructor(props){
        super(props)
        this.state={
         activeSelection:"",
          color:[]
        }
      }
    componentDidMount(){
    // console.log(this.props.match.params.pageNumber)
    // console.log(this.props.location.pathname)
    console.log("testing")
    let url = `https://flask.colorand.design/colors/full/${this.props.activeSelection}`
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
        if (this.state.color.length == 0){
return(
<Loader></Loader>
)
        }else {
            return (
                <div className="colorBase">
                    {this.props.color.map((item, index)=>(
                        <Cards {...item} key={index}></Cards>
                    ))}
                </div>
            );
        }
        
    }
}


export default ColorPage;