import { useState } from "react";
import { RemoveButtonComponents, RemoveButtonStyled} from "./styled";
import { Trash } from "phosphor-react";


export function RemoveButton(){
  const [quantity, setQuantity] = useState(0)

  function handleRemoveItem(){
    setQuantity(quantity - 1)
    if (quantity <= 0){
      setQuantity(quantity)
    }
  }


  return (
    <RemoveButtonComponents>
      <RemoveButtonStyled onClick={handleRemoveItem}>
        <Trash size={16}/>
        <h5>Remover</h5>
      </RemoveButtonStyled>
    </RemoveButtonComponents>
  )
}