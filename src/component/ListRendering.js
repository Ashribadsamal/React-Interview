import React, { Component } from 'react';

class ListRendering extends Component{
    //const name=['Bruce', 'Clark', 'Ashribad']

    render(){
        const name=['Bruce', 'Clark', 'Ashribad']
        return(
            <>
            
            <div>
            {
                name.map((n,i)=>(
                    <h4 key={i}>{n}</h4>
                ))
            }
            </div>
            </>
        )
    }
}

export default ListRendering;