import React, { useState } from 'react';
import './App.css'
import Button from './components/Button'
import DictionaryCard from './components/DictionaryCard';
import InputBox from './components/InputBox'
import data from '../src/components/data'

const DictionaryList = ({ data, searchTerm }) => {
  const filteredData = data.filter(
    item => item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='diction'>
      {filteredData.map(item => (
        <DictionaryCard key={item.id} title={item.title} desc={item.description} />
      ))}
    </div>
  );
};


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };
  return (
    <>
      <div className="main-container">
        <div className="content">
        <h1>Village Dictionary</h1>
        <p>Search for any word and get the meaning of it.</p>
        <div className="search-menu">
          <div className="search-container">
            <InputBox onSearchChange={handleSearchChange}/>
            <Button buttonText={"Search Word"} />
          </div>
          <div className="add">
          <Button buttonText={"Add New Words"} />
          </div>
        </div>

        <div className="cards-content">
          <div className="cards-container">
            <DictionaryList data={data} searchTerm={searchTerm} />  
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App
