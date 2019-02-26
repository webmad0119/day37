import React from "react";
import "./myButton.css"

export default class MyButton extends React.Component {
    render() {
        return (
            <button style={{backgroundColor: this.props.color}}>{this.props.children}</button>
        )
    }
}
