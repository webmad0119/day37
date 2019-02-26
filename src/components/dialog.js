import React from "react";
import "./dialog.css"

export default class Dialog extends React.Component {
    render() {
        return (
            <div className="dialog">
                <h2>{this.props.title}</h2>
                <section>
                    {this.props.contents}
                </section>

                <nav>
                    {this.props.children}
                </nav>
            </div>
        )
    }
}
