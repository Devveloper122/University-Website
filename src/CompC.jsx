import React, { useContext } from "react";
import { FirstName ,LastName} from "./App";

const CompC=()=>{
    // always use react hooks inside and at the top of Component 
    // function.
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <>
            <h1>My name is {fname} {lname} </h1>
        </>
    );
};

export default CompC;