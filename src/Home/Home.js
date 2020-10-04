import React, { Component } from 'react';
import "./Home.css"
const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

class Home extends Component {
    
    render() {
        // console.log(randomColor)
        return (
            <div className="homeBase" style={{backgroundColor: randomColor}}>
                <h1>COLOR AND DEISGN</h1>
            </div>
        );
    }
}

export default Home;