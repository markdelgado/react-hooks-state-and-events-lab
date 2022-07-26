import React,{useState} from "react";



function Item({ name, category }) {
  const[isInCart, setIsInCart] = useState(false)
  const handleIsInCart = () => {
    setIsInCart((isInCart) => !isInCart)
  }
  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleIsInCart} className={isInCart ? 'remove': 'add' }>{isInCart ? 'remove from': 'add to'} Cart</button>
    </li>
  );
}

export default Item;
