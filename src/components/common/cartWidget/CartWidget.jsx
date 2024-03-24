import { useContext, useEffect } from "react"
import { FaCartPlus } from "react-icons/fa"
import { CartContext } from "../../../context/CartContext"
import { Badge } from "@mui/material"
import { Link } from "react-router-dom"
import style from "./CartWidget.module.css"
const {cartNumber, cartSymbol} = style;
export const CartWidget = () => {
  const {getTotalProducts} = useContext(CartContext);
  return (
    <div>
      <Badge className={cartNumber} badgeContent={getTotalProducts()} color="warning" showZero>
        <FaCartPlus className={cartSymbol} color="#630B0A"/>
      </Badge>
    </div>
  )
}
