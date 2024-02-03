// // Code EyesOnMe Component Here

function EyesOnMe() {
    return (
        <button 
            onFocus={(e) => {
                console.log("Good!", e);
            }}
            onBlur={(e) => {
                console.log("Hey! Eyes on me!", e);
            }}
        >
            Eyes on me
        </button>
    );
}

export default EyesOnMe;
