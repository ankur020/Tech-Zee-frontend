import React, { createContext, useState, useRef, useEffect } from 'react';

const AllContext = createContext();



const ContextProvider = ({ children }) => {
  const host = process.env.REACT_APP_HOST
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


  const GetRepel = async () => {

    const Response = await fetch(`${host}/api/fetchItems`, {
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
  return (
    <AllContext.Provider value={{
      createCLass, setCreate, SetALlstateFalse, DasboardArea, setDasboardArea, SetSearcArea, GetRepel, host, SearcAreaa, FavArea, setFavArea, ShowAlert, SetAlert, ActivateAlert
    }}
    >
      {children}
    </AllContext.Provider>
  );
};

export { ContextProvider, AllContext };