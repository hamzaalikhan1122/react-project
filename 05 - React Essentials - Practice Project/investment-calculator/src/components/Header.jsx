import headerImg from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <div id="header">
      <img src={headerImg} alt="Header Image" />
      <h1>Investment Calculator</h1>
    </div>
  );
}

export default Header;
