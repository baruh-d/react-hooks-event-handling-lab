// // Code Keypad Component Here

// function Keypad(){
//     function handleEvent(e){
//         console.log(`Entering password...${e}`)
//     }
//     return (
//         <div>
//             <input type="password" onChange={handleEvent}/>
//         </div>
//     )
// }

// export default Keypad;

function Keypad(){
    return(
        <input type="password" onChange={(e)=>{console.log("Entering password...", e.target.value)}}/>
    )
}

export default Keypad;