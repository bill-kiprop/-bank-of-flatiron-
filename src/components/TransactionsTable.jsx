import React from 'react'
import Tabledata from './tableData'



export default function TransactionsTable({transactions}) {
  const transTable = transactions.map((transacts) => {
    return <Tabledata key={transacts.id} date={transacts.date} description={transacts.description} category={transacts.category} amount={transacts.amount}/>
  })  

  return (
    <div className='container1'>
    <table className='table'>
    <tbody>
    <tr>
          <th>
            <h3 className="table th">Date</h3>
          </th>
          <th>
            <h3 className="table th">Description</h3>
          </th>
          <th>
            <h3 className="table th">Category</h3>
          </th>
          <th>
            <h3 className="table th">Amount</h3>
          </th>
        </tr>
       {transTable}
    </tbody>
  </table>
  </div>
  )
}
