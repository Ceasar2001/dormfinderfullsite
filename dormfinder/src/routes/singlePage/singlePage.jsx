import Slider from '../../components/slider/slider'
import './singlePage.scss'
import Map from '../../components/map/Map'
import { useNavigate, useLoaderData } from 'react-router-dom'
import DOMPurify from "dompurify";
import { useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthContext"
import apiRequest from "../../lib/apiRequest"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SinglePage = () => {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const  {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const [rating, setRating] = useState(0); // Current rating
  const [comment, setComment] = useState(""); // Current comment
  const [comments, setComments] = useState([]); // List of comments

  toast.success("property successfully saved");

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }

    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments((prev) => [...prev, { rating, text: comment }]);
      setComment("");
      setRating(0);
    }
  };


  return (
    <div className='singlePage'>
      <ToastContainer />
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

             <br /> <hr />

        <div className="ratingComments">
        <div className="wrapper">
          <h2>Rate & Comment</h2>
          <div className="rating">
            <p>Rate this post:</p>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={value <= rating ? "star selected" : "star"}
                  onClick={() => handleRating(value)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button onClick={handleAddComment}>Submit</button>

          <div className="commentsList">
            <h3>Comments</h3>
            {comments.length > 0 ? (
              comments.map((c, index) => (
                <div className="comment" key={index}>
                  <div className="commentHeader">
                    <span>{'★'.repeat(c.rating).padEnd(5, '☆')}</span>
                  </div>
                  <p>{c.text}</p>
                </div>
              ))
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
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
              <button onClick={handleSave} style={{
                backgroundColor: saved ? "green" : "white",
              }}>
                <img src="/save.png" alt="" />
                {saved ? "Place Saved" : "Save"}
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage