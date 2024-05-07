import "./expenseItem.css";
export default function ExpenseItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      <h2>{title}</h2>
      <p className="expense-item__description">{title}</p>
      <p className="expense-item__description">{amount}</p>
      <p>
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
