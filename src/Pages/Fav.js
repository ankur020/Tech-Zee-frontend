import React, { useState, useEffect, useContext } from 'react'
import ClassBox from '../components/classBox';
import { AllContext } from "../Context";

const Fav = () => {

  const [Favlist, setfavList] = useState();

  const { GetUser, GetParticular_Cls } = useContext(AllContext);


  const getFavList = async () => {
    const data = await GetUser();

    const array_ID = data.favClass
    let dataN = [];

    array_ID.map(async f => {
      let n = await GetParticular_Cls(f);
      dataN.push(n.classData);
    })
    console.log(dataN);
    setfavList(dataN);
  }

  useEffect(() => {
    getFavList();
  }, [])

  return (
    <div>


      {
        (Favlist) ?
          (Favlist.map((note) => {
            return <ClassBox key={note._id} data={note} />

          }))
          :
          (<div>
            <h1>nothing found</h1>
          </div>)
      }
    </div>
  )
}

export default Fav