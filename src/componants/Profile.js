import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reduxwork/UserSlice";
import "../AllCss/profile.css";
import { Button, Container } from "react-bootstrap";
import pic from "./Img/IMG_20240204_212856.jpg";
const Profile = () => {
  const { UserData } = useSelector((state) => state.user);
  const dispatcher = useDispatch();
  return (
    <div className="profile-div">
      <Container className="profile-container">
        <img className="pic-profile" src={pic} />
        <div className="text-pro">
          <h5 >Name:{UserData?.CustomerName}</h5>
          <h5>Email:{UserData?.CustomerEmail}</h5>
          <h5>Email:{UserData?.CustomerMobNo}</h5>
          <h5>Password:{UserData?.CustomerPassword}</h5>
          <h5>Address:{UserData?.CustomerAddress}</h5>
          <h5>City:{UserData?.CustomerCity}</h5>
          <h5>Pincode:{UserData?.CustomerPinCode}</h5>
        </div>
      </Container>
      <button className="btn-profile"onClick={() => dispatcher(logout())}>Logout</button>
    </div>
  );
};

export default Profile;
