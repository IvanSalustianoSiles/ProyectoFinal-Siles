import { Item } from "../../common/item/Item"
import styles from "./ItemList.module.css"
import { AgregarDocs } from "../../../AgregarDocs"
export const ItemList = ({products}) => {
const {allItems, containerItems} = styles;
  return (
    <div className={containerItems}>
      <div className={allItems}>
        {
          products.map(({id, title, description}) => {
            return (
              <Item 
                key={id} 
                id={id}
                title={title} 
                description={description} 
              />
            )
          })
        }
      </div>
    </div>
    )
}


