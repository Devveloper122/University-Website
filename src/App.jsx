import React, { useState } from "react";
import { useEffect } from "react";

const App =()=>{
    const [score ,Setscore] = useState(0);
    const [score2 ,Setscore2] = useState(0);
    
    // this 'useEffect' will automatically be called after render 
    // method is called.
    useEffect(()=>{
        alert('I am Clicked');
    } ,[score]);

    return(
        <>
            <button onClick={()=>{Setscore(score+1)}}> Click me {score} </button>;
            <br/>;
            <button onClick={()=>{Setscore2(score2+1)}}> Click me {score2} </button>;
        </>
    );

};

export default App;