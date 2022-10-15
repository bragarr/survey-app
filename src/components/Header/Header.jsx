import { RiMenuFill, RiSurveyLine, RiUser3Fill } from "react-icons/ri";

import "./Header.css";

export function Header() {
    return(
        <header className="survey__header">
            <RiMenuFill className="menu__icon" />
            <h1 className="app__tittle">Dev Survey<RiSurveyLine className="app__icon"/></h1>
            <RiUser3Fill className="user__icon"/>
        </header>
    )
}