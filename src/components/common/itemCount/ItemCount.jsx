import { useState } from "react";
import style from "./ItemCount.module.css"
export const ItemCount = ({decrement, increment, count = 1, stock, varQuantity, onAdd}) => {
  const {counterButton, addButton} = style;
  return (
    <div>
      <div>
        <button className={counterButton} disabled = {count === 0 ? true : false} onClick={decrement}>-</button>
        <span>{count}</span>
        <button className={counterButton} disabled = {count === stock ? true : false} onClick={increment}>+</button>
      </div>
      <button className={addButton} onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}