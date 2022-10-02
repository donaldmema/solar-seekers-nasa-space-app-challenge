import "./HomePage.css";
import backgroundVid from "../assets/background-solar-vid.mp4";
import { NavBar } from "../components/NavBar";

type Props = {
  isClicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export function HomePage({ isClicked, setClicked }: Props) {
  return (
    <div className="homepage-container">
      <NavBar isClicked={isClicked} setClicked={setClicked} />

      <video autoPlay loop muted>
        <source src={backgroundVid} type="video/mp4" />
      </video>
      {/* <img
        src="https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_0171.jpg"
        width={250}
        alt=""
      /> */}
    </div>
  );
}
