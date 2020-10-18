import React, { Component } from 'react'
import Picker from "../Picker/Picker"
import "../Picker/Picker.css"
export default class ColorPicker extends Component {
    render() {
        return (
            <div className="pickerbody">
                <Picker></Picker>
            </div>
        )
    }
}
