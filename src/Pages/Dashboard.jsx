import React, { useState, useContext } from "react";
import "./dashboard.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Fav from "./Fav";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SearcArea from "./SearcArea";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { AllContext } from "../Context";
import Createclass from "../components/Createclass";
import DashboardArea from "../components/DashboardArea/DashboardArea";
import StudentJoinClass from "./StudentJoinClass";

const Dashboard = () => {
  let navigate = useNavigate();
  const { setCreate, SetALlstateFalse, SearcAreaa, DasboardArea, setDasboardArea, SetSearcArea, FavArea, setFavArea } = useContext(AllContext);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <>
      <div className="dashboard">
        <div className="user-profile">
          <div className="user-image">
            <img
              src={
                localStorage.getItem("role").toLowerCase() === "teacher"
                  ? "dashboard-teacher.jpg"
                  : "student.jpg"
              }
              alt="#"
              className="user-img"
            />
          </div>
          <div className="user-name">
            <h2>{localStorage.getItem("name").toUpperCase()}</h2>
            <div className="user-mail">
              {localStorage.getItem("userEmail").toLowerCase()}
            </div>
            <div className="user-joined">
              Member since :{" "}
              {localStorage.getItem("dateOfJoining").slice(0, 10)}
            </div>
          </div>
          <div className="navigation-list">
            <button
              onClick={() => {
                SetALlstateFalse();
                setDasboardArea(true);
              }}
            >
              <DashboardIcon />
              Dashboard
            </button>
            {/* {
              localStorage.getItem('role').toLowerCase() === "student" ? <button onClick={() => { SetALlstateFalse(); setFavArea(true) }}>
                <DashboardIcon />
                favourite
              </button> : <></>} */}
            {/* <button><MailIcon /> Mail</button>
            <button ><AutoStoriesIcon />Study Materials</button>
            <Link to='/createClass'> */}
            {localStorage.getItem("role").toLowerCase() === "teacher" ? (
              <button
                onClick={() => {
                  SetALlstateFalse();
                  setCreate(true);
                }}
              >
                {" "}
                <AutoStoriesIcon />
                Create class
              </button>
            ) : (
              <button
                onClick={() => {
                  SetALlstateFalse();
                  SetSearcArea(true);
                }}
              >
                {" "}
                <AutoStoriesIcon />
                Search class
              </button>
            )}

            {/* </Link> */}
            {/* <button><HelpCenterIcon />Help Centre</button> */}
            <button onClick={handleLogout}><LogoutIcon />Logout</button>
          </div>
        </div>
        <div className="user-dash">

          <Createclass />
          {DasboardArea && <DashboardArea />}
          <>{SearcAreaa && <SearcArea />}</>
          <>
            {FavArea && <Fav />}

          </>
        </div>
      </div >
    </>
  );
};

export default Dashboard;
