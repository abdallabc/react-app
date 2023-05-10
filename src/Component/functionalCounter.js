import { useState } from "react";
const FunctionalCounter = ()=>{
    const [Counter, setCounter] = useState(0);

    const Increment = () => {
        setCounter(Counter +1);
    }
    const Decrement = () => {
        if (Counter > 0){
            setCounter(Counter -1);
        }
    }
    return(
        <div>
            <h1>The Counter Value is:{Counter}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}
export default FunctionalCounter;