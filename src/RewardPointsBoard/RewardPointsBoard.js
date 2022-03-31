import { useState, useEffect } from "react";
import { calculateMonthlyTotal } from "../helpers/helpers";
import { v4 as uuidv4 } from "uuid";
import Month from "../Month/Month";
import { transactionData } from "../transactionData/transactionData";
import "./RewardPointsBoard.css";

const RewardPointsBoard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  let total = 0;

  useEffect(() => {
    const fetchMockData = setTimeout(() => {
      setData(transactionData);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(fetchMockData);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="RewardPointsBoard">
      <h1>Your reward points</h1>
      {data.map((i) => {
        const monthlyTotal = calculateMonthlyTotal(i.transactions);
        total += monthlyTotal;
        return (
          <Month
            key={uuidv4()}
            name={i.month}
            points={calculateMonthlyTotal(i.transactions)}
          />
        );
      })}
      <div className="RewardPointsBoard-total">Total Points - {total}</div>
    </div>
  );
};

export default RewardPointsBoard;
