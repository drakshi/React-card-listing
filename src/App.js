import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import FilterDropdown from './components/FilterDropdown';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import mockData from './Data/mockData';
import Pages from './components/Pages';

import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);

  useEffect(() => {
    //fetching data on the first render(empty dependency array)
    //     //if there would have been an api the code would have been looked like:
    //     /*fetch('https://api_call')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setCards(data)
    //         setFilteredCards(data);
    //     }) */
    setCards(mockData.data);
    setFilteredCards(mockData.data);
  }, []);

  useEffect(() => {
    // Filtered cards based on search term (character that the user has entered to search) and card type

    const filtered = cards.filter((card) => {
      const nameMatch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
      const typeMatch = filterType === '' || card.card_type === filterType;
      return nameMatch && typeMatch;
    });
    setFilteredCards(filtered);
  }, [cards, searchTerm, filterType]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleTabChange = (tab) => {
    //assumption : the "your" cards are the ones with owner_id = 1;
    // Filtering cards based on owner_id when tab is clicked
    setActiveTab(tab);
    let filtered = [];
    if (tab === 'Your') {
      filtered = cards.filter((card) => card.owner_id === 1);
    } else if (tab === 'all') {
      filtered = cards;
    } else if (tab === 'blocked') {
      filtered = cards.filter((card) => card.status === 'blocked');
    }
    setFilteredCards(filtered);
  };

  // Get current cards based on pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);


  return (
    <div className="App">
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      <FilterDropdown filterType={filterType} onChange={handleFilterChange} />
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      {currentCards.length > 0 ? (
        <CardList cards={currentCards} />
      ) : (
        <p className="card-message">No cards found...</p>
      )}
      <Pages totalCards={mockData.data.length}
        perPage={mockData.per_page}
        filteredCards={filteredCards}
        onPageChange={handlePageChange} />
    </div>
  );
};

export default App;