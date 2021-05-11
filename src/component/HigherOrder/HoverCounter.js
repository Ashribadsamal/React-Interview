import React, { Component } from 'react'
import UpdatedComponent from './CountHoc'

class HoverCounter extends Component{
     styles={
        background :"red"
    }
    render(){
        return(
         <div>
            <h4 onMouseOver={this.props.increment} style={this.styles}>Hovered on Me</h4>
            {this.props.count} Number times Hovered
         </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)