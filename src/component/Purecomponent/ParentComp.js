import React, { PureComponent,Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component{

    //Use PureComponent in Parent so that it will not render again & again bcoz value is Same

   constructor(props){
       super(props)
       this.state = {
           name: "Ashribad"
       }
   }

   componentDidMount(){
       setInterval(()=>{
           this.setState({
               name: " Ashribad"
           })
       },2000)
   }
    
    render(){
        console.log(">>>>Parent Component<<<<")
        return(
            <div>
                Parent Component
                <RegComp name={this.state.name}/>
                <PureComp name = {this.state.name}/>
            </div>
        )
    }
}

export default ParentComp