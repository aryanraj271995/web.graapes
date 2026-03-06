import { useState } from "react";
import "./search.css";

export default function SearchBox() {

  const [query,setQuery] = useState("");

  const suggestions = [
    "Best hospitals in Patna",
    "Electrician near me",
    "Hotels in Patna"
  ];

  return (

    <div className="search-container">

      <input
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Search for city, area & more"
      />

      {query && (

        <div className="suggestions">

          {suggestions
          .filter((item)=>
            item.toLowerCase().includes(query.toLowerCase())
          )
          .map((item,i)=>(
            <div key={i} className="suggestion-item">
              {item}
            </div>
          ))}

        </div>

      )}

    </div>

  );
}