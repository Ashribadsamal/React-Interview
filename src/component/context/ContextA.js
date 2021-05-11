import React, { Component } from 'react'
import ContextB from './ContextB';
import { UserProvider } from './UserContext';

class ContextA extends Component{

    render(){
        return(
            <>
                <UserProvider value = "Ashribad">
                    <ContextB/>
                </UserProvider>
            </>
        )
       
    }
}

export default ContextA;