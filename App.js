import React, { useState } from "react";

export default function App() {
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  
  function submit() {
    const newWords = [...words, word];
    setWords(newWords);
    setWord("");
  }

  function search() {
    let found = false;
    for (let i = 0; i < words.length; ++i) {
      if (word === words[i]) {
        found = true;
        break;
      }
    }
    setSearchResult(found ? "exists" : "notexists");
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>Dictionary</h1>
          </div>
        </div>
        <div className="input-group">
          <input 
            onChange={(e) => setWord(e.target.value)} 
            value={word} 
            type="text" 
            className="form-control" 
            placeholder="Enter the word here" 
            aria-label="Recipient's username with two button addons" 
          />
          <button className="btn btn-primary" type="button" onClick={submit}>Submit</button>
          <button className="btn btn-success" type="button" onClick={search}>Search</button>
        </div>
        {searchResult === "exists" && (
          <div className="card text-bg-success mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">The word already exists</h5>
            </div>
          </div>
        )}
        {searchResult === "notexists" && (
          <div className="card text-bg-danger mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">The word doesn't exist</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
