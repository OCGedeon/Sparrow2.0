import React from "react";
import sparrowVideo from "../../assets/img/Sparrow2_0.mp4";
import "./style.css";




function SparrowVideo(){
	return(
		

			<video className="videoContainer" id="background-video" loop muted controls>
	                <source src={sparrowVideo} type="video/mp4" />
	                
	                Your browser does not support the video tag.
	         </video> 
         

)
}

export default SparrowVideo;