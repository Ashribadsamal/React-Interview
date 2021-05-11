import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import { lastName, UserContext } from './ContextApp'

function ComponentB() {
    
    const firstName = useContext(UserContext)
    const lName = useContext(lastName)
    
    return (
        <div>
            <h4>By useContext hook {firstName} {lName}</h4>
            <ComponentC/>
        </div>
    )
}

export default ComponentB



//example for useContext  hook 