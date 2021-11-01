import React, { useEffect, useState } from "react";
import { Transaction } from "../App";
import Balance from "./Balance";
import { History } from "./History";
import { NewTransaction } from "./NewTransaction";
import './Container.css'

const getSum = (total: number , track: number) => {
    return total + track
}

export const Container = () => {
  const [balance, setBalance] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const onAddNewTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction])
  }

  useEffect(()=>{
    let incomeTemp = 0
    let expenseTemp = 0
    if (transactions.length !== 0 ){
      incomeTemp = transactions.map(el => el.value > 0 ? el.value : 0).reduce(getSum)
      expenseTemp = transactions.map(el => el.value < 0 ? el.value : 0).reduce(getSum)
    }


    setBalance(expenseTemp + incomeTemp)
    setExpense(expenseTemp)
    setIncome(incomeTemp)

  }, [transactions])

  return (
    <div className="mainContainer">
      <Balance balance={balance} income={income} expense={expense}/>
      <NewTransaction onAddNewTransaction={onAddNewTransaction} />
      <History transactions={transactions} />
    </div>
  );
};

