import React, { Component } from "react"

class ClickCounter extends Component{
    render(){
        return(
            <div>
                 {this.props.count} Number times clicked
                <button onClick={this.props. incrementCount}>Clicked</button>
            </div>
        )
    }
}

export default ClickCounter