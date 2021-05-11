import React, { Component } from 'react'
import UpdatedComponent from './CountHoc'

class ClickCounter extends Component{
    render(){
        return(
            <div>
                {this.props.count} Number times clicked
                <button onClick={this.props.increment}>Clicked</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)