import React, { createContext, useState, useRef, useEffect } from 'react';
// import dotenv from 'dotenv';
const AllContext = createContext();
// dotenv.config();
const ContextProvider = ({ children }) => {

  const host = process.env.REACT_APP_HOST
  // const host = 'http://localhost:5000'
console.log(host);
  const SetALlstateFalse = () => {
    setCreate(false);
    setDasboardArea(false);
    SetSearcArea(false);
  };

  const [ShowAlert, SetAlert] = useState({
    status: false,
    message: "",
    signal: "",

  })


  const ActivateAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 3000);
  }


  const [createCLass, setCreate] = useState(false);
  const [DasboardArea, setDasboardArea] = useState(true);
  const [SearcAreaa, SetSearcArea] = useState(false);
  const [FavArea, setFavArea] = useState(false);

  const GetUser = async () => {

    const Response = await fetch(`${host}/api/GetUser`, {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('authToken')
      }
    });
    const res = await Response.json();
    return res
  }
  const GetParticular_Cls = async (id) => {

    const Response = await fetch(`${host}/api/getOne/${id}`, {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('authToken')
      }
    });
    const res = await Response.json();
    console.log(res);
    return res
  }
  const GetRepel = async () => {

    const Response = await fetch(`${host}/api/fetchItems`, {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('authToken')
      }
    });
    const res = await Response.json();
    // console.log(res);
    return res
  }
  return (
    <AllContext.Provider value={{
      GetParticular_Cls,
      createCLass, setCreate, SetALlstateFalse, DasboardArea, setDasboardArea, SetSearcArea, GetRepel, host, SearcAreaa, FavArea, setFavArea, ShowAlert, SetAlert, ActivateAlert, GetUser,host
    }}
    >
      {children}
    </AllContext.Provider>
  );
};

export { ContextProvider, AllContext };