import React from "react";
import { useNavigate } from "react-router";
// import { NavLink } from "react-router-dom";
// import Header from "./Header";
// import { Outlet } from "react-router";

const About=()=>{

    const navigate111 = useNavigate();

    const gotoContact =() =>{
        navigate111("/Contact");
    }
    return (
        <>
            <h1>I am About page</h1>
            <button onClick={() => gotoContact()}> Go to contact page</button>

            {/* This is bulid to navigate to previous page. */}
            <button onClick={()=> {navigate111(-1);}}>Go to previous page</button>
            

        </>
    );
};

export default About;