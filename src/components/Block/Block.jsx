import React from "react";
import "./Block.css";

export const Block = () =>{
    return(
        <div className="block">
            <p className="title">Welcome to the<br/><b>Frontend Quiz!</b></p>
            <p className="text">Pick a subject to get started</p>
        </div>
    );
};