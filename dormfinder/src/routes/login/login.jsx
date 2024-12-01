import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
  
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
  
    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
  
      // Update global user state
      updateUser(res.data);
  
      // Display success notification
      toast.success("Successfully logged in!");
  
      // Store role in localStorage for reference
      const { role } = res.data || {};
      if (!role) {
        throw new Error("User role not found in response");
      }
      localStorage.setItem("userRole", role);
  
      // Redirect based on role
      setTimeout(() => {
        if (role === "houseowner") {
          navigate("/profile");
        } else {
          navigate("/");
        }
      }, 2000);
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="login">
      <ToastContainer />
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span className="">{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
