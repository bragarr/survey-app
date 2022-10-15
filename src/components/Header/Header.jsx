import { Link } from "react-router-dom";

import { RiMenuFill, RiSurveyLine, RiUser3Fill } from "react-icons/ri";

import "./Header.css";

const openCloseMenu = () => {
    document.querySelector(".side__menu").classList.toggle("menu__active");
}


export function Header() {
    return(
        <header className="survey__header">
            <RiMenuFill
                className="menu__icon"
                onClick={openCloseMenu}
            />
            <h1 className="app__tittle">Dev Survey<RiSurveyLine className="app__icon"/></h1>
            <article className="container__menu--user__icon">
                <nav className="side__menu">
                    <Link to={"/"}
                        className="menu__link"
                    >
                        Home
                    </Link>
                    <Link to={"signup"}
                        className="menu__link"
                    >
                        Sign Up
                    </Link>
                </nav>
                <RiUser3Fill className="user__icon"/>
            </article>
        </header>
    )
}