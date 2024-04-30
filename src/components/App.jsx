import React, { useState } from 'react'
import Header from './Header'
import Search from './Search'
import Transaction from './Addtransaction'
import TransactionsTable from './TransactionsTable'
import transactionsData from './data'

export default function App() {
 
  const [filteredTransactions, setFilteredTransactions] = useState(transactionsData);
  const [transactions, setTransactions] = useState(transactionsData);
console.log(filteredTransactions)
  
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction] );
    setFilteredTransactions()
    
  };
 

  return (
    <div className='container'>
        <Header />
        <Search transactions={transactionsData} setFilteredTransactions={setFilteredTransactions} />
        <Transaction addTransaction={addTransaction} />
        <TransactionsTable transactions={transactions} />
    </div>
  )
}
