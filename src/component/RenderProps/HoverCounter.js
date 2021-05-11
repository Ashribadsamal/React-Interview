import React, { Component } from "react"

class HoverCounter extends Component{

    styles={
        background: "red"
    }

    render(){
        return(
            <div>
            <h4 onMouseOver={this.props. incrementCount} style={this.styles}>Hovered on Me</h4>
            {this.props.count} Number times Hovered
         </div>
        )
    }
}

export default HoverCounter