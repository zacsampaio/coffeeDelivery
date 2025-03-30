import { useDispatch } from "react-redux";
import { RemoveButtonComponents, RemoveButtonStyled} from "./styled";
import { Trash } from "phosphor-react";
import { removeProduct } from "../../redux/cart/action";
import { ProductsType } from "../../redux/cart/action-types";

interface RemoveButtonProps {
  product: ProductsType
}

export function RemoveButton({ product }: RemoveButtonProps){
  const dispatch = useDispatch()

  function handleRemoveProduct(){
    dispatch(removeProduct(product))
  }

  return (
    <RemoveButtonComponents>
      <RemoveButtonStyled onClick={handleRemoveProduct}>
        <Trash size={16}/>
        <h5>Remover</h5>
      </RemoveButtonStyled>
    </RemoveButtonComponents>
  )
}