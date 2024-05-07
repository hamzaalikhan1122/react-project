import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";
import Display from "./components/Display";
function App() {
  const [inputData, setInputData] = useState({
    initial: "",
    annual: "",
    expected: "",
    duration: "",
  });
  console.log(inputData);
  const calculatedResult = calculateInvestmentResults({
    initialInvestment: Number(inputData.initial),
    annualInvestment: Number(inputData.annual),
    expectedReturn: 1 * inputData.expected,
    duration: 1 * inputData.duration,
  });

  const totalInvestment = 1 * inputData.initial + 1 * inputData.annual;
  return (
    <>
      <Header />
      <UserInput dataInput={inputData} setInputData={setInputData} />
      <Display
        calculatedResult={calculatedResult}
        investedCapital={1 * inputData.initial}
        totalInvestment={totalInvestment}
      />
    </>
  );
}

export default App;
