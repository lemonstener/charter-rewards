import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { transactionData } from "../transactionData/transactionData";
import "./RewardPointsBoard.css";
import Customer from "../Customer/Customer";

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
      {data.map((entry) => {
        return <Customer key={uuidv4()} info={entry} />;
      })}
    </div>
  );
};

export default RewardPointsBoard;
