import { useState } from "react";
import "./Cake.css";

const Cake = ({ cake, onDelete}) => {
  const { cakeName, rating, price, ingredients } = cake;

  const handleOnDelete = () => {
    onDelete(cake);
  }
  
  // const ingredientLis = cake.ingredients.map((ingredient)) => {
  //   return <li>{ingredient}</li>


  return (
    <div>
      <h2>{cakeName}</h2>
        <p>Rating: {rating}</p>
        <p>Price: £{price}</p>

        <ul>
          {/* <ul> and <li> anchor with {ingredients passed through}*/}
          <h3>Ingrediants</h3>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li> 
          ))}
          <p>ingredients</p>
          <button onClick={handleOnDelete}>Delete</button>
        </ul>

    </div>
  )
}

export default Cake;