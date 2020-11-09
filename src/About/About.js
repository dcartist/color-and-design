import React, { Component } from 'react';
import "./About.css"

class About extends Component {
    render() {
        return (
            <div className="aboutBase">
               <p>Color and Design is an app built with React for the front end and Flask for the backend. Out of millions of colors, this app only lists around 25,000 color names using a dataset(JSON).</p>
               <p>To view API via swagger: <a href="https://api.colorand.design/swagger/" rel="noopener noreferrer" target="_blank">https://api.colorand.design/swagger/</a>
</p>
               <p>Notes:
The Flask API was created in 6 hours during a hackathon by Paula Bannerman. It is deployed serverless on vercel.com.
</p>

            </div>
        );
    }
}


export default About;