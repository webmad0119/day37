import React from "react";
import MyButton from "./components/mybutton";

export default class RedMyButton extends React.Component {
    render() {
        return (
            <MyButton color="red">{this.props.children}</MyButton>
        )
    }
}
