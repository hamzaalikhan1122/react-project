import { formatter } from "../util/investment";
function Display({ calculatedResult, totalInvestment, investedCapital }) {
  let cumulativeInterest = 0; // Initialize cumulative interest
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedResult.map((result) => {
          cumulativeInterest += result.interest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(Math.floor(result.valueEndOfYear))}</td>
              <td>{formatter.format(result.interest.toFixed(2))}</td>
              <td>{formatter.format(cumulativeInterest)}</td>
              <td>
                {formatter.format(
                  investedCapital + result.annualInvestment * result.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Display;
