import React from "react";
import "./dialog.css"
import Dialog from "./dialog"
import MyButton from "./mybutton";
import RedMyButton from "../redButton";

export default class WelcomeDialog extends React.Component {
    render() {
        return (
            <div>
                <Dialog title="Welcome" contents={this.props.contents}>
                    <RedMyButton>Ok</RedMyButton>
                    <MyButton color="green">Cancel</MyButton>
                </Dialog>
            </div>
        )
    }
}
