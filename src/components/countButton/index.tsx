import { useState } from "react";
import { CountButtonComponents, CountButtonQuantity, CountQuantity } from "./styled";


export function CountButton(){
  const [quantity, setQuantity] = useState(0)

  function handleDecreaseQuantity(){
    setQuantity(quantity - 1)
    if (quantity <= 0){
      setQuantity(quantity)
    }
  }

  function handleIncreaseQuantity(){
    setQuantity(quantity + 1)
  }

  return (
    <CountButtonComponents>
      <CountButtonQuantity onClick={handleDecreaseQuantity}>-</CountButtonQuantity>
      <CountQuantity>{quantity}</CountQuantity>
      <CountButtonQuantity onClick={handleIncreaseQuantity}>+</CountButtonQuantity>
    </CountButtonComponents>
  )
}