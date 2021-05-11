import React, { Component } from 'react'

class RegComp extends Component{
    render(){
        console.log(">>>>REgular Component<<<<")
        return(
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp