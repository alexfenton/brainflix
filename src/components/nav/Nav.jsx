import "../../styles/partials/global.scss";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <img
        className="nav__logo"
        src="./src/assets/Logo/BrainFlix-logo.svg"
        href="./src/assets/Logo/BrainFlix-logo.svg"
        alt="Home"
      ></img>
      <div className="nav__search-container">
        <input className="nav__search-bar" placeholder="Search"></input>
        <img
          className="nav__avatar"
          src="../../assets/Images/Mohan-muruge.jpg"
          alt="User"
        ></img>
      </div>
      <button className="nav__button">
        <img className="button__icon" src="#" alt=""></img>Upload
      </button>
    </nav>
  );
}

export default Nav;
