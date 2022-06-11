import "../../styles/partials/global.scss";
import "./Nav.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import search from "../../assets/Icons/search.svg";
import upload from "../../assets/Icons/upload.svg";
import userImage from "../../assets/Images/Mohan-muruge.jpg";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <NavLink className="nav__link" to={`/`}>
        <img className="nav__logo" src={logo} alt="Home"></img>
      </NavLink>
      <div className="nav__search-container">
        <div className="nav__search-bar-container">
          <i src={search}></i>{" "}
          <input className="nav__search-bar" placeholder="Search"></input>
        </div>
        <div className="nav__avatar-container">
          <img className="nav__avatar" src={userImage} alt="Upload"></img>
        </div>
      </div>
      <NavLink className="nav__link" to={`/upload`}>
      <button className="nav__button">
        <img className="button__icon" src={upload} alt="Upload"></img>
        <p className="button__label">Upload</p>
      </button>
      </NavLink>
      <div className="nav__avatar-tablet-container">
        <img className="nav__avatar-tablet" src={userImage} alt="Upload"></img>
      </div>
    </nav>
  );
}

export default Nav;
