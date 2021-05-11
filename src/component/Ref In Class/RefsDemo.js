import React, { Component } from 'react'

class RefsDemo extends Component{    
        
        constructor(){
            super()
            this.state={
                value: ""
            }
            this.inputRef = React.createRef()
            this.cbRef = null
            this.setCbRef = element =>{
                this.cbRef = element
            }
        }

        componentDidMount(){
            if(this.cbRef){
                alert(this.cbRef.focus)
            }
        }

        clickHandeler=()=>{
            alert(this.inputRef.current.value)
        }
        clickCbHandeler=()=>{
            alert(this.cbRef.value)
        }
        render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHandeler}>Click</button>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickCbHandeler}>Cb Click</button>
               
            </div>
        )
    }
}

export default RefsDemo;