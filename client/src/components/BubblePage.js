// Get request for colors

import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(result => {
        console.log('GET request for colors bubble page', result)
        setColorList(result.data)
      })

      .catch(error => {
        console.log('Catch from bubbles color call error', error)
      })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
