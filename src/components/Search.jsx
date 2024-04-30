import React, { useState } from 'react';

export default function Search({ transactions, setFilteredTransactions }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filteredTransactions = transactions.filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(query) ||
        transaction.category.toLowerCase().includes(query)
    );
    
    setFilteredTransactions(filteredTransactions);
  };

  return (
    <div>
      <input
        className='search-bar'
        type="text"
        placeholder='Search your Recent Transactions'
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}
