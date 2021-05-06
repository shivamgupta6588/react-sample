import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    update=()=>{
        this.setState({count:this.state.count+1})
    }
    render() { const{count}=this.state;
        return (
            <div>
                 <button onMouseEnter={this.update}> 
                 {this.name} hoveres {count} times
                </button>
            </div>
        )
    }
}
