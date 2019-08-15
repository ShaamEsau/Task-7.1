/* Calls the React Library */
import React from "react";
import ReactDOM from "react-dom";
/* Calls images from specified directory */
import Control from "../Images/control.jpg";
import Creeper from "../Images/creeper.jpg";
import Chair from "../Images/chair.jpg";
import { Image } from "react-bootstrap";


const prodList = [
				[Control,"Assorted Gaming Controls","R1000 - R1500"],
				[Creeper, "Custom Cases", "R2000-R3000"],
				[Chair , "Assorted Gaming Chairs", "R2000-R5000"]
			]

/* Creates React Function Component */
const Products = () =>{
    /* Parses data to  a readable format on the HTML page */
    return(
            /* Creates a div box */
            <div id="prodList">
			{/* Converts text to format heading 2 */}
			<h2 id="Title">Product List</h2><br/>
			<div>

			{/* Retrieves data from an array and inserts it into the element */}
			{prodList.map((item) => 
			<div>
					{/* Creates a paragraph to store text and adds a space */}
					<p>{item[1]}</p>
					<p>{item[2]}</p>
					{/* Inserts an image using imported data. Use react-bootstrap to style it */}
					<Image id="prodImg" src= {item[0]} roundedCircle/>
			</div>)}
			</div>
			</div>
   		)
}


/* Enables the class to be imported to other Js files */
export default Products;