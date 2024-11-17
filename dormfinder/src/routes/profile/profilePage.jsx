import { Link, useNavigate } from 'react-router-dom'
import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import apiRequest from '../../lib/apiRequest'
import './profilePage.scss'
import { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
    const {updateUser, currentUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await apiRequest.post("/auth/logout");
            updateUser(null)
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

  return (
        <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    {/* <Link to="/profile/update">
                        <button>Update Profile</button>
                    </Link> */}
                </div>
                <div className="info">
                    <span className='avatar'>Avatar:
                        <img
                            src={currentUser.avatar || "/noavatar.png"}
                            alt="profile picture"
                        />
                    </span>
                    <span className='uname'>Username: <b>{currentUser.username}</b></span>
                    <span className='email'>Email: <b>{currentUser.email}</b></span>
                    <div className='btn_container'>
                        <Link to="/profile/update">
                            <button className='updateBtn'>Update Profile</button>
                        </Link>
                        <button onClick={handleLogout}>logout</button>
                    </div>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <Link to='/add'>
                        <button>Create New Post</button>
                    </Link>
                </div>
                <List />

                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List />
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat />
            </div>
        </div>
    </div>
    )
}

export default ProfilePage