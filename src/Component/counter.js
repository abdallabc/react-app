import {Component} from 'react';
class Counter extends Component {
    constructor(){
        super();
        this.state={
            counter: 0,
        };
    }
    increment(){
        this.setState({
            counter: this.state.counter +1,
        })
    }
    reset(){
        this.setState({
            counter: 0,
        })
    }
    decriment(){
        this.setState({
            counter: this.state.counter -1,
        })
    }
    render(){
        return (
            <div>
                <h1>Counter value:{this.state.counter}</h1>
                <button onClick={()=>this.increment()}>Increment</button>
                <br></br>
                <button onClick={()=>this.reset()}>Reset</button>
                <br></br>
                <button onClick={()=>this.decriment()}>decriment</button>
            </div>
        )
    }
}
export default Counter;