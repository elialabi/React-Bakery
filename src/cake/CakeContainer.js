import { useState } from "react";
import Cake from "./Cake.js";
import CakeForm from "./CakeForm";



const CakeContainer = () => {

	
    const [cakes, setCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				   rating: 5
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5
			} 
		  ]
		);

		const addCake= newCake => {
			setCakes([...cakes, newCake]);
			alert("Thank you! Cake has been added.");
		}

		const deleteCake = (cakeToDelete) => {
			//filter through cake array and keep the ones not deleted
			const updatedCakes = cakes.filter((cake) => cake !== cakeToDelete);
			setCakes(updatedCakes);
			alert("Cake has been deleted");
			
		}

	


  return (
    <> 

	 {cakes.map((cake, index) => (
        <Cake key={index} cake={cake} onDelete={deleteCake} />
	  ))}
	  
	  <CakeForm addCake={addCake} />
    </>
  )
}

export default CakeContainer;