const Func =()=>{
    const fcomp =()=>{
        console.log (`This is function component`)
    }
    
    return (
        <div>
            <button onClick={fcomp}>Click Me</button>
        </div>
    )
}
export default Func;