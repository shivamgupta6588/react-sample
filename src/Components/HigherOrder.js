import React, { Component } from 'react'

const updatedcomp=OriginalComp=>
{
    class NewComp extends Component{
        render(){
            return <OriginalComp name="this is"/>;
    }
        
    }
    return NewComp;
}
export default updatedcomp;