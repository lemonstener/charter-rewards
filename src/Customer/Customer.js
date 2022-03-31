import { calculateMonthlyTotal } from "../helpers/helpers";
import Month from "../Month/Month";
import { v4 as uuidv4 } from "uuid";
import "./Customer.css";

const Customer = (info) => {
  let total = 0;
  return (
    <div className="Customer">
      <h2>{info.info.name}'s Rewards Points</h2>
      {info.info.transactions.map((month) => {
        const monthlyTotal = calculateMonthlyTotal(month.transactions);
        total += monthlyTotal;
        return (
          <Month key={uuidv4()} name={month.month} points={monthlyTotal} />
        );
      })}
      <div className="Customer-total">Total Points - {total}</div>
    </div>
  );
};

export default Customer;
