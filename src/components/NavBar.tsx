import { useNavigate } from "react-router-dom";
import "./NavBar.css";

type Props = {
  isClicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavBar({ isClicked, setClicked }: Props) {
  //   const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div id="menu">
        <div
          id="menu-bar"
          onClick={() => setClicked(!isClicked)}
          className={isClicked ? "change" : ""}
        >
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className={isClicked ? "nav change" : "nav"} id="nav">
          <ul>
            <li>
              <a href="/homepage">Home</a>
            </li>
            <li>
              <a href="/infopage">Info Page</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={isClicked ? "menu-bg change-bg" : "menu-bg"}
        id="menu-bg"
      ></div>
    </nav>
  );
}
