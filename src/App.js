import './App.css';
import GenerateQuoteButton from './components/Buttons/GenerateQuoteButton';
import QuoteDisplay from './components/QuoteDisplay/QuoteDisplay';
import { useState } from 'react';

function App() {
  const [quote, setQuote] = useState({ content: "", author: "" });

  return(
    <>
      <div className="MainDiv">
      <div className='Display'>
        <QuoteDisplay content={quote.content} author={quote.author}/>
        </div>
        <div>
        <GenerateQuoteButton setQuote={setQuote}/>
        </div>
      </div>
    </>
  )
  
}

export default App;
