/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React from "react";
import FaceExpressionDetector from "./components/FaceExpressionDetector.jsx";
import MoodSongs from "./components/MoodSongs.jsx";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {

  const [songs, setSongs] = useState([]);

  const getAllSongs = async () => {
    const result = await axios.get("http://localhost:3000/");
    setSongs(result.data.songs);
  }

  useEffect(() => {
    getAllSongs();
  }, []);

  return (
    <>
      <FaceExpressionDetector setSongs={setSongs} />
      <MoodSongs songs={songs} />
    </>
  );
}
export default App;
