import React, { Component } from 'react';
import notsubs from './notsubs.png';
import sub from './sub.png';

 class NewComp extends Component {
     constructor(props) {
         super(props)
         this.state={
             message:"subscribe  please abc",
             sub:"subscribe",
             imgurl:notsubs
            
         };
         
     }
     updateb=()=>
     {  
         this.setState(
         {
        message:"thank you",
        sub:"subscribed",
        imgurl:sub
         }
)
     }
     

    render() {
        return (
            <div >
           <h1 style={{display: 'flex', justifyContent: 'center'}}> {this.state.message}</h1>   
         <center><button  onClick={this.updateimg}>{this.state.sub}</button> 
           </center>
           <p style={{display: 'flex', justifyContent: 'center'}}>
               <img style={{height:"40px" ,width:"40px"}}src={this.state.imgurl} alt=""  onClick={this.updateimg}/>
           </p>
            </div>
        )
    }
}

export default NewComp
