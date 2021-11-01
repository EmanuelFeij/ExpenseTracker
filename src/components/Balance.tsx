import React from "react";
import './Balance.css'

interface Props {
  balance: number;
  income: number;
  expense: number;
}

const Balance = ({ balance, income, expense }: Props) => {
  return (
    <div className="balance-container">
      <div className="balance">
        <h3>Your balance:</h3>
        <h3>{balance}€</h3>
        <hr />
      </div>
      <div className="board">
        <div className="income">
          <p>INCOME</p>
          <p>{income}€</p>
        </div>
        <div className="expense">
          <p>EXPENSE</p>
          <p>{expense}€</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
