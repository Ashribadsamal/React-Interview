import React, { Component } from 'react'
import ContextC from './ContextC';
import UserContext from './UserContext';

class ContextB extends Component{
    render(){
        return(
            <div>
                <ContextC/>
                By another way of Context {this.context}
            </div>
            
        )
    }
}

Component.contextType = UserContext

export default ContextB;