import { MapPinLine } from "phosphor-react"
import { CheckoutForm, CheckoutFormInputs, CheckoutFormTitles } from "./styled"


export function Form(){

  return (
  <CheckoutForm>
    <CheckoutFormTitles>
      <MapPinLine size={22} />
      <h4>Endereço de Entrega</h4>
    </CheckoutFormTitles>
    <p>Informe o endereço onde deseja receber seu pedido</p>
    <CheckoutFormInputs>
      <input placeholder="CEP" required/>
    </CheckoutFormInputs>
    <input placeholder="Rua"  required/>
    <CheckoutFormInputs>
      <input placeholder="Número" required/>
      <input placeholder="Complemento" required={false}/>
    </CheckoutFormInputs>
    <CheckoutFormInputs>
      <input placeholder="Bairro" required/>
      <input placeholder="Cidade" required/>
      <input placeholder="UF"required />
    </CheckoutFormInputs>
  </CheckoutForm>
  )
}