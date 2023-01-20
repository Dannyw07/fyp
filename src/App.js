import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Review from "./pages/review/Review";
import News from "./pages/news/News";
import ContactUs from "./pages/contactUs/ContactUs";
import Golfclub from "./pages/golfclub/Golfclub";
//import Login from "./components/login/Login";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
//import ValidationSchemaExample from "./pages/validate/ValidationSchemaExample";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword";
import NewsOne from "./pages/news/NewsOne";
import { ToastContainer } from "react-toastify";
// import myAccount from "./pages/account/myAccount";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./components/Orders/Orders";
import Booking from "./pages/booking/Booking";
import Post from "./pages/post/Post";
import AvailableTime from "./pages/availableTime/AvailableTime";
import Confirmation from "./pages/confirmation/Confirmation";

// import { useSelector } from "react-redux";

// import { selectUser } from "./features/userSlice";
// import Logout from "./components/Logout/Logout";

function App() {
  // const user = useSelector(selectUser);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/golfclubs" element={<List />} /> */}
        <Route path="/availableTime" element={<AvailableTime />} />
        {/* <Route path="/golfclub" element={<Golfclub />} */}
        <Route path="/golfclub/:id" element={<Golfclub />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookingConfirmation" element={<Confirmation />} />
        <Route path="/review" element={<Review />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsOne />} />
        <Route path="/news/post/:id" element={<Post />} />
        <Route path="/contactUs" element={<ContactUs />} />
        {/*route should be /account/login */}
        <Route path="/auth/login" element={<Login />} />
        {/*route should be /account/register */}
        <Route path="/auth/register" element={<Register />} />
        {/* <Route path="/myAccount" element={<myAccount />} /> */}
        {/* route should be change to /myAccount later... */}
        <Route path="/myAccount" element={<NewsOne />} />
        <Route path="/myAccount/orders/" element={<Orders />} />
        <Route path="/auth/resetpassword" element={<ForgetPassword />} />

        {/*<Route path="/register" element={<ValidationSchemaExample />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
