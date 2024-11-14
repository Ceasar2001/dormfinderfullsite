import './filter.scss'

const Filter = () => {
  return (
    <div className="filter">
      <h1>Search result for <b>Ampayon</b></h1>
        <div className='top'>
          <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" id='city' name='city' placeholder='City Location'/>
          </div>
        </div>
        <div className="bottom">
          <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type" id="type">
                <option value="">any</option>
                <option value="longTerm">long term</option>
                <option value="shortTerm">short term</option>
                <option value="solo">solo</option>
              </select>
          </div>
          <div className="item">
              <label htmlFor="property">BH type</label>
              <select name="property" id="property">
                <option value="">any</option>
                <option value="apartment">Apartment</option>
                <option value="dormitory">Dormitory</option>
                <option value="boardinghouse">Boarding House</option>
              </select>
          </div>
          <div className="item">
              <label htmlFor="minPrice">Min Price</label>
              <input
                type="number"
                id='minPrice'
                name='minPrice'
                placeholder='any'
              />
          </div>
          <div className="item">
              <label htmlFor="maxPrice">Max Price</label>
              <input
                type="number"
                id='maxPrice'
                name='maxPrice'
                placeholder='any'
              />
          </div>
          <div className="item">
              <label htmlFor="bed">Bed</label>
              <input
                type="text"
                id='bed'
                name='bed'
                placeholder='Bed Capacity'
              />
          </div>
          <button>
            <img src="/search.png" alt="search icon" />
          </button>
        </div>
    </div>
  )
}

export default Filter