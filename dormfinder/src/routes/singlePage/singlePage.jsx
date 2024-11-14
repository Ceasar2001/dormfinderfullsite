import Slider from '../../components/slider/slider'
import './singlePage.scss'
import { singlePostData, userData } from "../../lib/dummydata"
import Map from '../../components/map/Map'

const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                  <h1>{singlePostData.title}</h1>
                  <div className="address">
                    <img src="/pin.png" alt="pin icon" />
                    <span>{singlePostData.address}</span>
                  </div>
                  <div className="price">₱ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="avatar of user" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
            <p className='title'>General</p>
            <div className="listVertical">
              <div className="feature">
                <img src="/utility.png" alt="" />
                <div className="featureText">
                  <span>Utility</span>
                  <p>Renter is Responsible</p>
                </div>
              </div>
              <div className="feature">
                <img src="/pet.png" alt="" />
                <div className="featureText">
                  <span>Pet Policy</span>
                  <p>NOPETSALLOWD</p>
                </div>
              </div>
              <div className="feature">
                <img src="/fee.png" alt="" />
                <div className="featureText">
                  <span>Property Fees</span>
                  <p>Must have 1 month advance and 1 month deposit</p>
                </div>
              </div>
            </div>

            <p className='title'>sizes</p>
            <div className="sizes">
              <div className="size">
                <img src="/size.png" alt="" />
                <span>80 sqft</span>
              </div>
              <div className="size">
                <img src="/bed.png" alt="" />
                <span>2 bed</span>
              </div>
              <div className="size">
                <img src="/bath.png" alt="" />
                <span>2 common cr</span>
              </div>
            </div>

            <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

            <p className='title'>Location</p>
            <div className="mapContainer">
              <Map items={[singlePostData]}/>
            </div>

            <div className="buttons">
              <button>
                <img src="/chat.png" alt="" />
                Send A Message
              </button>
              <button>
                <img src="/save.png" alt="" />
                Save The House
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage