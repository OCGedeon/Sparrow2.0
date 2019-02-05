import React from "react";
import sparrowImg from "../../assets/img/sparrow2.png";
import "./style.css";

function SparrowLogo(){
	return(
		<div className="imgContainer">
            <img src={sparrowImg} alt="Sparrow" className="avatar"/>
        </div>
        )
};

export default SparrowLogo;