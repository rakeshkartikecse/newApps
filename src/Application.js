import React, {Component} from 'react';

class Application extends Component{
    constructor(props){
        super(props);

        this.state={
            count:0
        }
    }


    handleClick=()=>{

    }
   /* componentWillMount(props,state)
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
    */

    render(){
        let {count}=this.state;
        let name="Kartike";
        return(
            <div>
                <h1>YOu have clicked the button {count} times</h1>
            <span>This is the first page of the React Application.</span>
            <span>
                <button onClick={(e)=> this.handleClick()}>click me</button>
            </span>
            </div>
            
        );
    }
    
}

export default Application;