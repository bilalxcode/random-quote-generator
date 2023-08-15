import "./GenerateQuoteButton.css";
import { useState, useEffect,useCallback } from "react";

function GenerateQuoteButton({ setQuote }) {
  const [fetchQuote, setFetchQuote] = useState(false);

  useEffect(() => {
    if (fetchQuote) {
      fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
          setQuote({ content: data.content, author: data.author });
        })
        .catch((error) => {
          console.error("Error fetching quote:", error);
        });

      setFetchQuote(false);
    }
  }, [fetchQuote]);

  const quoteGenerator = useCallback(() => {
    setFetchQuote(true);
  }, []);

  return (
    <div>
      <button onClick={quoteGenerator} className="generate-button">
        Generate Quote
      </button>
    </div>
  );
}

export default GenerateQuoteButton;
