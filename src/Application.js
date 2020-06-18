import React, {Component} from 'react';
import HighScore from './HighScore';
class Application extends Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            overTen: false
        }
    }


    handleClick=()=>{

        console.log("Clicked");
        this.setState({count: this.state.count+1});
    }

    componentDidUpdate(props,state){
       // console.log("Updated from",state,"to",this.state);

        //this.setState({count: this.state.count+1});
        if(this.state.count>10 && this.state.count !== state.count && !this.state.overTen){
            console.log("waiting for Update over10");
            this.setState({overTen: true});
        }
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
        //let name="Kartike";
        return(
            <div>
                <h1>YOu have clicked the button {count} times</h1>
            <span>This is the first page of the React Application.</span>
            <HighScore />
            <span>
                <button onClick={() => this.handleClick()}>click me</button>
            </span>
            </div>
            
        );
    }
    
}

export default Application;