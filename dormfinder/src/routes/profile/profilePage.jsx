import { Await, Link, useLoaderData, useNavigate } from 'react-router-dom'
import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import apiRequest from '../../lib/apiRequest'
import './profilePage.scss'
import { Suspense, useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {

    const data = useLoaderData();
    const {updateUser, currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const [role, setRole] = useState(null);

    useEffect(() => {
        const storeRole = localStorage.getItem("userRole");
        setRole(storeRole);
    }, []);




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
               
                    <div className="houseOnwerUI">
                        <div className="title">
                        <h1>My List</h1>
                        <Link to='/add'>
                            <button>Create New Post</button>
                        </Link>
                    </div>
                        <Suspense fallback={<p>Please Wait Were Loading all data...</p>}>
                    <Await
                        resolve={data.postResponse}
                        errorElement={<p>Error loading posts!</p>}
                    >
                        {(postResponse) => <List posts = {postResponse.data.userPosts}/> }
                    </Await>
                    </Suspense>
                
                    </div>
                
                
                
                    <div className="userUI">
                         <div className="title">
                    <h1>Saved List</h1>
                </div>
                <Suspense fallback={<p>Please Wait Were Loading all data...</p>}>
                    <Await
                        resolve={data.postResponse}
                        errorElement={<p>Error loading posts!</p>}
                    >
                        {(postResponse) => <List posts = {postResponse.data.savedPosts}/> }
                    </Await>
                </Suspense>
                    </div>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
            <Suspense fallback={<p>Please Wait Were Loading all message data...</p>}>
                    <Await
                        resolve={data.chatResponse}
                        errorElement={<p>Error loading chats!</p>}
                    >
                        {(chatResponse) => <Chat chats={chatResponse.data}/> }
                    </Await>
            </Suspense>
            </div>
        </div>
    </div>
    )
}

export default ProfilePage