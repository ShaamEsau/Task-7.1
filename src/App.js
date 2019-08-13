/* Imports React Library to be used on the page */
import React from 'react';
/*Import Style Sheets to style its corresponding elements*/
import './App.css';
import "./StoreStyles.css";
/* Calls JS files to be used on the page */
import Login from "./Components/Header.js";
import TextFileReader from "./Components/Landing.js"
import Products from "./Components/Product.js"


/* Creates function */
function App() {
    return (
        /* Creates div box */
        <div>
		{/* Calls the components to execute and display its information */}
		<Login/>
		<TextFileReader/><br/>
		<Products/>
 
	</div>
    )
}

/* Makes file able to be imported to other files */
export default App;