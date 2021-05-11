import React from 'react'
import { lastName, UserContext } from './ContextApp'

function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <lastName.Consumer>
                                {
                                     userlastName =>{
                                       return <h4>Use context api Value {user}{userlastName} </h4>
                                   }
                                }
                               
                                   
                            </lastName.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC


//example of context  api which is complex