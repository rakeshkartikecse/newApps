import React, {Component} from 'react';

class Application extends Component{

    render(){
        let name="Kartike";
        return(
            <div>
                <h1>Hello World! {name}</h1>
            <span>This is the first page of the React Application.</span>
            </div>
            
        );
    }
    
}

export default Application;