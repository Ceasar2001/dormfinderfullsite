import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({item, toggleChat}) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt="image of boarding houses or dormitory" />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`} >{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="pin icon" />
          <span>{item.address}</span>
        </p>
        <p className='price'>₱ {item.price}</p>

        <div className="bottom">
          <div className="features">
            <img src="/bed.png" alt="bed icon" />
            <span>{item.bedroom} bedroom</span>
          </div>
          <div className="features">
            <img src="/bath.png" alt="bath icon" />
            <span>{item.bathroom} bathroom</span>
          </div>

          <div className="icons">
            {/* <div className="icon">
              <img src="/save.png" alt="save icon" />
            </div> */}
            <div className="icon" onClick={toggleChat}>
              <img src="/chat.png" alt="chat icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card