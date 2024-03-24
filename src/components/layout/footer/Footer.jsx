import style from "./Footer.module.css"
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  const {footerContainer, imgFooter, internalTextFooter, subDivFooter} = style;
  return <div className={footerContainer}>
    <img className={imgFooter} src="https://i.imgur.com/ZXvTMXz.png" alt="ZuelFrend" />
    <div className={internalTextFooter}><FaRegCopyright /> 
      <div className={subDivFooter}>ZuelFrend - Derechos reservados </div>
      <div className={subDivFooter}>Contáctanos: +54 11 3287-4847 / 16:00hs-19:00hs</div>
      <div className={subDivFooter}>zuelfrend3287@gmail.com</div>
    </div>
    <img className={imgFooter} src="https://i.imgur.com/ZXvTMXz.png" alt="ZuelFrend" />
  </div>
}
