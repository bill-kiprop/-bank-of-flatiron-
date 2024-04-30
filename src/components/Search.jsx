import React, { useState } from 'react';

export default function Search({ transactions, setFilteredTransactions }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    // Filter transactions based on description or category containing the search query
    const filteredTransactions = transactions.filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(query) ||
        transaction.category.toLowerCase().includes(query)
    );
    // Update the filtered transactions in the parent component
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
