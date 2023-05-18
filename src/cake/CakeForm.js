import { useState } from "react";

const CakeForm = ({ addCake }) => {
    const [cakeName, setCakeName] = useState("");
    const [rating, setRating] = useState("");
    const [ingredientsInput, setIngredientsInput] = useState("");
    const [price, setPrice] = useState("");
   

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // split input to an array 

    const ingredients = ingredientsInput.split(", ")

    //make new cake object
    const newCake = {
        cakeName,
        rating,
        ingredients,
        price
      }; 

      addCake(newCake);

        setCakeName("");
        setRating("");
        setIngredientsInput("");
    };

    

      return (
        <>
          <h2>Cake Form</h2>
          <form onSubmit={handleFormSubmit}>
            <input 
              type="text"
              name="cakeName"
              placeholder="Cake Name"
              value={cakeName}
              onChange={(e) => setCakeName(e.target.value)}/>
            <input 
              type="number"
              name="rating"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}/>
            <input 
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}/>
            <input
              type="text"
              name="ingredients"
              placeholder="Ingredients (e.g flour, sugar,)"
              value={ingredientsInput}
              onChange={(e) => setIngredientsInput(e.target.value)} />
            <input type="submit" value="Submit"/>
         </form>
        </>


);
};



  export default CakeForm;