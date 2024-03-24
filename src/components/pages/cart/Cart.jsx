import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { CartProduct } from "../../common"
import style from "./Cart.module.css"
export const Cart = () => {
  const {buttonCart} = style;
  const {cart, clearCart, removeById, settingQuantity, getTotalPrice, getProductPrice} = useContext(CartContext);
  let total = getTotalPrice();
  return (
    <>
      { cart.length != 0 ? <>
        {
          cart.map((product) => {
            return (
              <CartProduct 
                {...product} 
                removeById={removeById} 
                settingQuantity={settingQuantity} 
                getProductPrice={getProductPrice} 
                key={product.id}
              />
          )})
        }
        <button className={buttonCart} onClick={clearCart}>Limpiar carrito</button>
        <div>Total: ${total}</div>
        <Link to="/checkout">
          <button className={buttonCart}>Finalizar compra</button>
        </Link>
      </> : <>
          <div>Oops! Parece que tu carrito se encuentra vacío.</div>
          <Link to="/">
            <button>Agregar productos</button>
          </Link>
        </> }
    </>
  )
}
