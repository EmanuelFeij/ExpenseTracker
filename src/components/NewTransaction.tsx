import React, { useState } from "react";
import { Transaction } from "../App";
import "./NewTransaction.css";

const validateNumberField = (myNumber: string) => {
  const numberRegEx = /\d*\.?\d{1,2}/;
  return numberRegEx.test(myNumber.toLowerCase());
};

interface Props {
  onAddNewTransaction: (transaction: Transaction) => void;
}

export const NewTransaction = ({ onAddNewTransaction }: Props) => {
  const [text, setText] = useState<string>("");
  const [amountText, setAmountText] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const onChangeTextHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
  };

  const onChangeAmountHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const previousAmount = target.value;
    if (validateNumberField(previousAmount)) {
      setAmount(parseInt(previousAmount));
      setAmountText(previousAmount);
    } else {
      setAmount(undefined);
      setAmountText("");
    }
  };

  const onPressHandlerIncome = () => {
    if (amount !== undefined && text !== "") {
      onAddNewTransaction({ description: text, value: amount });
      setAmount(undefined);
      setAmountText("");
      setText("");
    }
  };
  const onPressHandlerExpense = () => {
    if (amount !== undefined && text !== "") {
      onAddNewTransaction({ description: text, value: -amount });
      setAmount(undefined);
      setAmountText("");
      setText("");
    }
  };

  return (
    <>
      <h3>Add New Transaction</h3>
            <hr />
      <div className="newTransaction">
        <div className="description">
          <hr />
          {/*Description */}
          <p>Transaction Description:</p>
          <input
            placeholder="Add New Transaction"
            value={text}
            onChange={onChangeTextHandler}
            className="inputs"
          />
        </div>
        {/*Amount */}
        <div className="amount">
          <p>Transaction Amount:</p>
          <input
            placeholder="Add New Transaction"
            value={amountText}
            onChange={onChangeAmountHandler}
            className="inputs"
          />
          <br />
        </div>
        <div className="btn-container">
          <button onClick={onPressHandlerExpense} className="btn-add-expense">
            Add Expense
          </button>
          <button onClick={onPressHandlerIncome} className="btn-add-income">
            Add Income
          </button>
        </div>
      </div>
    </>
  );
};
