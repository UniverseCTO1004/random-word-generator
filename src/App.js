import React, { useState, useEffect } from "react";

const App = () => {
  const [numWords, setNumWords] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [randomWords, setRandomWords] = useState("");
  const [occurrenceCount, setOccurrenceCount] = useState(0);

  const generateRandomWords = () => {
    const words = Array.from({ length: numWords }, () =>
      Math.random().toString(36).substring(2, 15)
    ).join(" ");
    setRandomWords(words);
  };

  useEffect(() => {
    generateRandomWords();
  }, [numWords]);

  useEffect(() => {
    const regex = new RegExp(searchText, "gi");
    const count = (randomWords.match(regex) || []).length;
    setOccurrenceCount(count);
  }, [searchText, randomWords]);

  return (
    <div className="flex flex-col items-center p-10 space-y-4">
      <h1 className="text-2xl font-bold">Random Word Generator</h1>
      <div className="space-x-4">
        <label>
          Number of words:
          <input
            type="number"
            value={numWords}
            onChange={(e) => setNumWords(e.target.value)}
            className="border p-2 ml-2"
          />
        </label>
        <label>
          Search text:
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border p-2 ml-2"
          />
        </label>
      </div>
      <div className="mt-4">
        <p className="text-lg">Generated Text:</p>
        <p className="border p-2 mt-2">{randomWords}</p>
        <p className="text-lg mt-2">Occurrences: {occurrenceCount}</p>
      </div>
    </div>
  );
};

export default App;
