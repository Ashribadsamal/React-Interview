import React, { Component } from 'react'


class ConditionalRendering extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn: true
        }
    }

    ChangeUi=()=>{
        this.setState({
            isLoggedIn: true
        })
        console.log(this.state)
    }
    ChangeUiOut=()=>{
        this.setState({
            isLoggedIn: false
        })
        console.log(this.state)
    }


    render(){
         
            //if/else

            // if(this.state.isLoggedIn){
            //     return <h2>you are Logged in</h2>
            // }else{
            //     return  <h2>You are not logged in</h2>
            // }

            //ElementVariable

            // let message
            // if(this.state.isLoggedIn){
            //     message = <h2>you are Logged in . this is element variable</h2>
            // }else{
            //     message= <h2>You are not logged in</h2>
            // }

            // return (
            //     <div>{message}</div>
            // )


            //Ternariy operator

             return(
                 <>
                {this.state.isLoggedIn ? <h4>you are Logged in</h4>:<h4>you are Logged out</h4>}
                 <button onClick={this.ChangeUi}>login</button>
                 <button onClick={this.ChangeUiOut}>logout</button>
                 </>
             )

            //shortcircuited operator
            // return(
            //     <>
            //         {this.state.isLoggedIn && <h2>you are Logged in</h2>}
            //         <button onClick={this.ChangeUi}>login</button>
            //     </>
            // )

    }
}

export default ConditionalRendering;