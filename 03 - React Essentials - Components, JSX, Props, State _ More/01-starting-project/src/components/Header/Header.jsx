import reactImg from "../../assets/react-core-concepts.png";
import reactImg2 from "../../assets/jsx-ui.png";
import reactImg3 from "../../assets/state-mgmt.png";
import "./header.css";
const reactDescription = ["Fundamental", "Crucial", "Core"];

const reactImages = [reactImg, reactImg2, reactImg3];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const description = reactDescription[getRandomInt(2)];
  const images = reactImages[getRandomInt(2)];
  return (
    <header>
      <img src={images} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
