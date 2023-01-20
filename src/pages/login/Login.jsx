import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
//import Navbar from "../../components/Navbar/Navbar";
import { loGin } from "../../features/userSlice";

// import { toast } from "material-react-toastify";
// import "material-react-toastify/dist/ReactToastify.css";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { email: email, password: password };

    axios.post("http://localhost:4000/auth/login", data).then((response) => {
      // console.log(response.data);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
        toast.success("Logged-in Successfully", {
          position: "top-right",
          autoClose: 2500,
          theme: "dark",
        });
        navigate("/myAccount");
      }
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      loGin({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div>
      <Navbar />
      <div className="loginContainer">
        <div className="loginSection">
          <div className="leftSide-1">
            <div>
              <div className="logIN">
                <form onSubmit={(event) => handleSubmit(event)}>
                  <h1>Login</h1>
                  {/* <label>Email</label> */}
                  <input
                    placeholder="Email"
                    className="loginInput"
                    type="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />

                  {/* <label>Password:</label> */}
                  <input
                    placeholder="Password"
                    className="loginInput"
                    type="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <Link to="/auth/resetpassword">Forget Your Password?</Link>

                  <button onClick={login}> Login </button>
                  <div className="bottom">
                    <Link to="/auth/register">Create Account</Link>
                    <Link to="/">Return to Home</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="rightSide-2">
            <h1>this is right side</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
