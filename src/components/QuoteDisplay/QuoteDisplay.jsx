import "./QuoteDisplay.css";
import React, { useMemo } from "react";

const QuoteDisplay = React.memo(({ content, author }) => {
  console.log("quote display");

  const memoizedComponent = useMemo(() => {
    if (content && author) {
      return (
        <blockquote>
          <p>{content}</p>
          <footer>- {author}</footer>
        </blockquote>
      );
    }
    return (
      <>
        <p>Click the button to generate a random quote!</p>
      </>
    )
  }, [content, author]);

  return memoizedComponent;
});

export default QuoteDisplay;
