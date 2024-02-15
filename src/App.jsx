import './App.css'
import Button from './components/Button'
import DictionaryCard from './components/DictionaryCard';
import InputBox from './components/InputBox'
import abbrv from '../src/components/data'


function App() {


  return (
    <>
      <div className="main-container">
        <h1>Village Dictionary</h1>
        <div className="search-menu">
          <div className="search-container">
            <InputBox />
            <Button buttonText={"Search Word"} />
          </div>
          <Button buttonText={"Add New Words"} />
        </div>
        <div className="cards-content">
          <div className="cards-container">
            {abbrv.map((item) => (
            <DictionaryCard 
            title={item.title}
            desc={item.description}
              />

            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App
