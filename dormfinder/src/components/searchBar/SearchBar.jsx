import { useState } from 'react'
import "./SearchBar.scss"
import { Link } from 'react-router-dom';

const types = ["longterm", "shortterm"]

const SearchBar = () => {
    const [query, setQuery] = useState({
        type: "longterm",
        location:"",
        minPrice:0,
        maxPrice:0,
    });

    const switchType = (val) => {
        setQuery((prev) => ({...prev,type:val}));
    };

    const handleChange = e => {
        setQuery((prev) => ({...prev, [e.target.name]: e.target.value }));
    };

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
            <input type="text" name='Location' placeholder='Address' onChange={handleChange}/>
            <input type="number" name='minPrice' min={0} max={4000} placeholder='Min Price' onChange={handleChange}/>
            <input type="number" name='maxPrice' min={0} max={4000} placeholder='Max Price' onChange={handleChange}/>

            <Link
                to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
            >
                <button>
                    <img src="/search.png" alt="search icon" />
                </button>
            </Link>
        </form>

    </div>
  )
}

export default SearchBar