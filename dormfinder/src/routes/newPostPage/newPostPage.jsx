import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const inputs = Object.fromEntries(formData)

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate("/"+res.data.id)
    } catch (err) {
      console.log(err);
      setError(error);
    }
  }

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value}/>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Available Bedroom</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item test" >
              <label
              title="you have to go to google map to get your exact latitude and longitude for location"
              htmlFor="latitude">Location Latitude</label>
              <input
                title="use this for testing"
                id="latitude"
                name="latitude"
                type="text" 
                placeholder="for test 8.955433764845855"
                value={8.955433764845855}
                />
            </div>
            <div className="item">
              <label
              title="you have to go to google map to get your exact latitude and longitude for location"
              htmlFor="longitude">Location Longitude</label>
              <input
              title="use this for testing"
              id="longitude"
              name="longitude"
              type="text" 
              value={125.59790132209585}
              />
            </div>
            <div className="item">
              <label htmlFor="type">Stay Type</label>
              <select name="type">
                <option value="longterm" defaultChecked>LongTerm</option>
                <option value="shortterm">ShortTerm</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property Type</label>
              <select name="property">
                <option value="apartment">Apartment</option>
                <option value="boardinghouse">Boarding House</option>
                <option value="dormitory">Dormitory</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Payment Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">School Distance (m)</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">Bus Distance (m)</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant Distance (m)</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Add New Post</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer" title="double click, upload 4 pictures only">
        {
          images.map((image, index) => (
            <img src={image} key={index} alt="" />
          ))
        }
        <UploadWidget
            uwConfig={{
              multiple: true,
              cloudName: "drm5bmcip",
              uploadPreset: "dormfinder",
              folder: "posts",
            }}
            setState={setImages}
          />
      </div>
    </div>
  );
}

export default NewPostPage;