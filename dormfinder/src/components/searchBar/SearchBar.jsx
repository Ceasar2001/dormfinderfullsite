import { useState } from 'react'
import "./SearchBar.scss"

const types = ["LongTerm", "ShortTerm"]

const SearchBar = () => {
    const [query, setQuery] = useState({
        type: "LongTerm",
        location:"",
        minPrice:0,
        maxPrice:0,
    });

    const switchType = (val) => {
        setQuery((prev) => ({...prev,type:val}))
    }

  return (
    <div className='searchBar'>
        <div className="type">
            {types.map((type) => (
                <button
                    key={type}
                    onClick={() => switchType(type)}
                    className={query.type === type ? "active" : ""}
                >
                        {type}
                </button>
            ))}
        </div>
        <form action="">
            <input type="text" name='Location' placeholder='Address'/>
            <input type="number" name='minPrice' min={0} max={4000} placeholder='Min Price'/>
            <input type="number" name='maxPrice' min={0} max={4000} placeholder='Max Price'/>

            <button>
                <img src="/search.png" alt="search icon" />
            </button>
        </form>

    </div>
  )
}

export default SearchBar