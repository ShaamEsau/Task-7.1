/* Calls the React Library */
import React from "react";
import ReactDOM from "react-dom";
/* Calls images from specified directory */
import Control from "../Images/control.jpg";
import Creeper from "../Images/creeper.jpg";
import Chair from "../Images/chair.jpg";
import { Image } from "react-bootstrap";

/* Creates React Function Component */
const Products = () =>{
    /* Parses data to  a readable format on the HTML page */
    return(
            /* Creates a div box */
            <div id="prodList">
			{/* Converts text to format heading 2 */}
			<h2 id="Title">Product List</h2><br/>
			<div>
			{/* Inserts an image using imported data. Use react-bootstrap to style it */}
			<Image id="prodImg" src={Control} roundedCircle/>
			{/* Creates a paragraph to store text and adds a space */}
			<p>Assorted Gaming Controls</p><br/>
			<p>Price Range: R1000-1500</p>
			<Image id="prodImg" src={Creeper} roundedCircle/>
			<p>Custom Casing</p><br/>
			<p>Price Range: R2000-3000</p>
			<Image id="prodImg" src={Chair} roundedCircle/>
			<p>Gaming Chairs</p><br/>
			<p>Price Range: R2000-5000</p>
			</div>
			</div>
   		)
}


/* Enables the class to be imported to other Js files */
export default Products;