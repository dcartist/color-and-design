import React, { Component } from 'react'
import Cards from "../Card/CardCusomDesign"
import Loader from "../Loader/Loader"
import BackToTop from 'react-easy-back-to-top'
import "./Color.css"
class ColorPage extends Component {
    constructor(props){
        super(props)
        this.state={
         activeSelection:"",
          color:[]
        }
      }
  

    render() {
        if (this.props.color.length == 0){
return(
<Loader></Loader>
)
        }else {
            return (
                <div className="colorBase">
                  
                    {this.props.color.map((item, index)=>(
                        <Cards {...item} key={index}></Cards>
                    ))}
                      <BackToTop
      backgroundColor="grey"
      position={{ right: "5%", bottom: "10%" }}
      hover={{ backgroundColor: "red", color: "white" }}
      transition="all 0.5s"
      showOnDistance={0}
      borderRadius={16}
      icon="fas fa-arrow-up"
      text=" Top"
      opacity=".8"
      color="white"
      fontSize="14px"
    />
                </div>
            );
        }
        
    }
}


export default ColorPage;