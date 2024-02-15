import './App.css'
import Button from './components/Button'
import DictionaryCard from './components/DictionaryCard';
import InputBox from './components/InputBox'

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
            <DictionaryCard />
            <DictionaryCard />
            <DictionaryCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
