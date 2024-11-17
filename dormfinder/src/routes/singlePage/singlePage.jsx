import Slider from '../../components/slider/slider'
import './singlePage.scss'
import { singlePostData, userData } from "../../lib/dummydata"
import Map from '../../components/map/Map'
import { useLoaderData } from 'react-router-dom'
import DOMPurify from "dompurify";

const SinglePage = () => {
  const post = useLoaderData();


  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                  <h1>{post.title}</h1>
                  <div className="address">
                    <img src="/pin.png" alt="pin icon" />
                    <span>{post.address}</span>
                  </div>
                  <div className="price">₱ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="avatar of user" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom" dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.postDetail.desc)
              }}>
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
                  {
                    post.postDetail.utilities === "owner" ?
                    (<p>Owner is Responsible</p>) : (<p>tenant is Responsible</p>)
                  }
                </div>
              </div>
              <div className="feature">
                <img src="/pet.png" alt="" />
                <div className="featureText">
                  <span>Pet Policy</span>
                  {
                    post.postDetail.pet === "allowed" ?  <p>PETS ALLOWED</p> :  <p>NO PETS ALLOWED</p>
                  }
                </div>
              </div>
              <div className="feature">
                <img src="/fee.png" alt="" />
                <div className="featureText">
                  <span>Payment Policy</span>
                  <p>{post.postDetail.income}</p>
                </div>
              </div>
            </div>

            <p className='title'>sizes</p>
            <div className="sizes">
              <div className="size">
                <img src="/size.png" alt="" />
                <span>{post.postDetail.size} sqft</span>
              </div>
              <div className="size">
                <img src="/bed.png" alt="" />
                <span>{post.bedroom} bed</span>
              </div>
              <div className="size">
                <img src="/bath.png" alt="" />
                <span>{post.bathroom} common cr</span>
              </div>
            </div>

            <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school > 999 ? post.postDetail.school/1000 + "km" : post.postDetail.school + "m"} away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>

            <p className='title'>Location</p>
            <div className="mapContainer">
              <Map items={[post]}/>
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