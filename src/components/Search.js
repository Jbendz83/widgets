import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("cars");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 8000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const searchResults = results.map(r => (
    <div key={r.pageid} className="item">
      <div className="right floated content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${r.pageid}`}
          target="_blank"
          rel="noreferrer"
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">{r.title}</div>
        <span dangerouslySetInnerHTML={{ __html: r.snippet }} />
      </div>
    </div>
  ));

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{searchResults}</div>
    </div>
  );
};

export default Search;
