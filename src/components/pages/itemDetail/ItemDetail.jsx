
import style from "./ItemDetail.module.css"
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer";

export const ItemDetail = ({imageUrl, title, price, description, stock, category, onAdd, error, varQuantity}) => {
  const {divImage, divDescAndCat, divDescription, divDetailContainer, buttonClass, grid, imgItem} = style;
  return (
    <>
      {error ? <div>{error}</div> : <div className={divDetailContainer}>
        <div className={divImage}>
          <Link className={grid} to="/">
            <button className={buttonClass}><IoArrowUndoOutline/>Volver al menú principal</button>
          </Link>
          <img className={imgItem} src={imageUrl} alt={title} />
        </div>
          <div className={divDescAndCat}>
            <Link className={grid} to={`/category/${category}`}>
            <button className={buttonClass}>Visitar categoría<IoArrowRedoOutline/></button>
            </Link>
            <div className={divDescription}>
              <h3>{title}</h3>
              <h3>${price}</h3>
              <h3>{description}</h3>
              <h3>{`(${stock} disponibles)`}</h3>
              <ItemCountContainer stock={stock} varQuantity={varQuantity} onAdd={onAdd}/>
            </div>
          </div>
      </div>}
    </>
  )
}
