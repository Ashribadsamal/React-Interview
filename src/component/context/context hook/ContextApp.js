import React from 'react'
import ComponentA from './ComponentA'

export const UserContext = React.createContext()
export const lastName = React.createContext()

function ContextApp() {

    return (
        <div>
            <UserContext.Provider value={'Ashribad'}>
                <lastName.Provider value = {'samal'}>
                  <ComponentA/>
                </lastName.Provider>
              
            </UserContext.Provider>
            
        </div>
    )
}

export default ContextApp
