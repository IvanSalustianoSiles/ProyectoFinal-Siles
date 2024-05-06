import style from "./Navbar.module.css"
import { CartWidget } from "../../common";
import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { SearchEngine } from "../../common/SearchEngine/SearchEngine";
import { links } from "../../../router/links";
export const Navbar = () => {
  const {logoHeader, backgroundUl, searchButton, logoContainer, navbarDiv1, navbarDiv2, navbarContainer, cartClass} = style;
  const showSearchEngine = () => {
    let searchForm = document.getElementById("searchEngine");
    let firstSearchButton = document.getElementById("firstSearchButton");
    firstSearchButton.classList.add("disabled");
    searchForm.classList.remove("disabled");
  }
  let lastButton;
  let aButtonIsClicked = false;
  const turningChecked = (id) => {
    lastButton = document.getElementsByClassName("active");
    if (aButtonIsClicked) {
      lastButton[0].classList.remove("active");
    }
    let myButton = document.getElementById(`${id}`);
    myButton.classList.add("active");
    aButtonIsClicked = true;  
  }
  return (
    <div className={navbarContainer}>
      <div className={navbarDiv1}>
      <Link className={logoContainer} to="/">
      <img src="https://i.imgur.com/Lva8yRT.png" className={logoHeader} alt="logo1" />
      </Link>
      <ul className={backgroundUl}>
        {   
          links.map(({id, path, textButton}) => {
            return <Link key={id} to={path}><button onClick={() => turningChecked(id)} id={id}>{textButton}</button></Link>
          })
        }
        <Link className={cartClass} to="/cart"><CartWidget/></Link>
      </ul>
      </div>
      <div className={navbarDiv2}>
        <button id="firstSearchButton" className={searchButton} onClick={showSearchEngine}><CiSearch color="white" size={22}/></button>
        <SearchEngine/>
      </div>
    </div>
  )
}
