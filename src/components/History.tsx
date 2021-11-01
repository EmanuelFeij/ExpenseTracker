import React from "react";
import { Transaction } from "../App";
import "./History.css";

interface Props {
  transactions: Transaction[];
}

const Income = (transaction: Transaction) => {
  return (
    <div className="historyItemContainerGreen">
    <div
      className="historyItem"
      key={transaction.description + "$transaction.value"}
    >
      <p className="description-span">{transaction.description}</p>
      <p className="value-span">+{transaction.value}€</p>
    </div>
  </div>
  )

}

const Expense = (transaction: Transaction) => {
  return (
    <div className="historyItemContainerRed">
    <div
      className="historyItem"
      key={transaction.description + "$transaction.value"}
    >
      <p className="description-span">{transaction.description}</p>
      <p className="value-span">{transaction.value}€</p>
    </div>
  </div>
  )

}

export const History = ({ transactions }: Props) => {
  return (
    <div>
      <h3>History</h3>
      <hr />

      <div className="history-container">
        {transactions.map((transaction: Transaction) => {
          if (transaction.value > 0){
            return Income(transaction)
          } else {
            return Expense(transaction)
          }
        })}
      </div>
    </div>
  );
};
