import { MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom";
import style from "./Checkout.module.css"
export const Checkout = ({sendForm, getInfo, orderId, copyText}) => {
  const {welcome, orden, seguirComp, final, divForm, first, last} = style;
  return (
    <>
      {
        orderId == "" ? <>
        <div className={welcome}>Checkout</div>
        <div className={divForm}>
          <form className={divForm} onSubmit={sendForm}>
            <input className={first} type="text" id="input1" placeholder="Ingrese su nombre" name="name" onChange={getInfo}/>
            <input type="tel" placeholder="Ingrese su número" name="phone" onChange={getInfo}/>
            <input type="email" placeholder="Ingrese su correo" name="email" onChange={getInfo}/>
            <button className={last}>Comprar</button>
          </form>
        </div>
      </> : <>
        <div className={final}>
          <div className={orden}>¡Gracias! Su orden de compra es {orderId}<button onClick={copyText}><MdContentCopy/></button></div>
          <Link to="/">
            <button className={seguirComp}>Seguir comprando</button>
          </Link>
        </div>
        </>
      }
    </>
  )
}
