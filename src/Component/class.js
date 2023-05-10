import { Component } from "react";

class ClassComponent extends Component {
    constructor(){
        super();
        this.state={
            color : 'red',
        };
    }
    car (){
        console.log (`This car is ${this.state.color}`)
    }
    render(){
        return (
            <div>
                <button onClick={()=>this.car()}>Find Out</button>
            </div>
        )
    }
}
export default ClassComponent;