import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
        role,
      });

      //display success notification
      toast.success("successfully registered!");

      // Store user role in localStorage
      localStorage.setItem("userRole", role);

       // Redirect based on role
       setTimeout(() => {
        if (role === "houseowner") {
          navigate("/homeowner");
        } else {
          navigate("/login");
        }
      }, 2000); // Add delay to allow users to see the toast
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      <ToastContainer />
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <select name="role" required>
            <option value="" disabled selected>
              Select Role
            </option>
            <option value="houseowner">House Owner</option>
            <option value="user">User</option>
          </select>
          <button disabled={isLoading}>Register</button>
          {error && <span className="">{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
