const Map=()=>{
//     let students = ['John', 'Mary','Samuel','Susan'];
//     return(
//       <div>
//         {students.map((student)=>(
//             <h1>{student}</h1>
//         ))}
//       </div>
// )
    let prices=[150, 120, 160, 45];
    return(
        <div>
            <h1>{prices.map((price) => price*0.1 + ', '
            )}</h1>
        </div>
    )
    // let students=[
    //     {id=1, Name='John', Course='Full-stack'}
    //     {id=2, Name='Mary', Course='Database'}
    //     {id=3, Name='Susan', Course='Software Dev'}
    //     {id=4, Name='Daniel', Course=''}
    //     {id=5, Name='Jace', Course='Full-stack'}
    // ]
}
export default Map;