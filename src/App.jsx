import React, { useState } from "react";
import { useEffect } from "react";

const App =()=>{
    const [score ,Setscore] = useState(0);
    
    // this 'useEffect' will automatically be called after render 
    // method is called.
    useEffect(()=>{
        // alert('I am Clicked');
        document.title = `you clicked me ${score} times.`;
    } ,[score]);

    return(
        <>
            <button onClick={()=>{Setscore(score+1)}}> Click me {score} </button>;
        </>
    );

};

export default App;