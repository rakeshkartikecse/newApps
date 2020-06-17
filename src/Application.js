import React, {Component} from 'react';

class Application extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(props,state)
    {

    }

    componentDidMount(props,state){
        console.log("Mounted with",props,state);
    }

    componentWillUpdate(props,state){
        if(this.props.name !==props.name){
            //do something
        }

    }

    componentDidUpdate(props,state){
        
    }

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