import { SetStateAction } from "react";
import { NavBar } from "../components/NavBar";
import "./InfoPage.css";
import Sun from "../assets/sun1.png";
import Sun2 from "../assets/Untitled-2.png";
import Sun3 from "../assets/Untitled-3.png";
import Sun4 from "../assets/Untitled-4.png";
import Sun5 from "../assets/Untitled-5.png";
import Sun6 from "../assets/Untitled-6.png";
import Sun7 from "../assets/Untitled-7.png";

type Props = {
  isClicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};
export function InfoPage({ isClicked, setClicked }: Props) {
  return (
    <div className="infopage-container">
      <NavBar isClicked={isClicked} setClicked={setClicked} />
      <div className="card first">
        <div className="circle">
          <img className="image-init" src={Sun} alt="sun" width={250} />
        </div>
        <div className="content">
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            voluptates doloremque ducimus praesentium,
            <br />
          </h2>
          <a href="#">Explore</a>
        </div>
        <img src={Sun} className="product_img" />
      </div>

      <div className="card second">
        <div className="circle">
          <img className="image-init" src={Sun2} alt="sun" width={150} />
        </div>
        <div className="content">
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            voluptates doloremque ducimus praesentium,
            <br />
          </h2>
          <a href="#">Explore</a>
        </div>
        <img src={Sun2} className="product_img" />
      </div>

      <div className="card third">
        <div className="circle">
          <img className="image-init" src={Sun3} alt="sun" width={150} />
        </div>
        <div className="content">
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            voluptates doloremque ducimus praesentium,
            <br />
          </h2>
          <a href="#">Explore</a>
        </div>
        <img src={Sun3} className="product_img" />
      </div>

      <div className="card fourth">
        <div className="circle">
          <img className="image-init" src={Sun4} alt="sun" width={150} />
        </div>
        <div className="content">
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            voluptates doloremque ducimus praesentium,
            <br />
          </h2>
          <a href="#">Explore</a>
        </div>
        <img src={Sun4} className="product_img" />
      </div>

      <div className="card fifth">
        <div className="circle">
          <img className="image-init" src={Sun5} alt="sun" width={150} />
        </div>
        <div className="content">
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            voluptates doloremque ducimus praesentium,
            <br />
          </h2>
          <a href="#">Explore</a>
        </div>
        <img src={Sun5} className="product_img" />
      </div>

      <div className="card sixth">
        <div className="circle">
          <img className="image-init" src={Sun6} alt="sun" width={150} />
        </div>
        <div className="content">
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            voluptates doloremque ducimus praesentium,
            <br />
          </h2>
          <a href="#">Explore</a>
        </div>
        <img src={Sun6} className="product_img" />
      </div>

      <div className="card seventh">
        <div className="circle">
          <img className="image-init" src={Sun7} alt="sun" width={150} />
        </div>
        <div className="content">
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            voluptates doloremque ducimus praesentium,
            <br />
          </h2>
          <a href="#">Explore</a>
        </div>
        <img src={Sun7} className="product_img seventh" />
      </div>
    </div>
  );
}
