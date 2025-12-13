import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import "./FaceExpressionDetector.css";
import axios from "axios";

export default function FaceExpressionDetector({ setSongs }) {
  const videoRef = useRef(null);

  const detectMoodOnce = async () => {
    if (!videoRef.current) return;

    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    if (detections.length > 0) {
      const expressions = detections[0].expressions;
      const best = Object.entries(expressions).sort(
        (a, b) => b[1] - a[1]
      )[0][0];

      const result = await axios.get(
        `http://localhost:3000/songs?mood=${best}`
      );
      setSongs(result.data.songs);
    } else {
      console.log("No face detected");
    }
  };

  useEffect(() => {
    async function init() {
      // Start webcam
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      await videoRef.current.play();

      // Load models
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ]);
    }

    init();
  }, []);

  return (
  <div className="mood-element">

    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className="user-video-feed"
    />

    <div className="right-wrapper">
      <h1 className="moody-title-side">🎧 Moody Player</h1>

      <button className="detect-btn" onClick={detectMoodOnce}>Detect Mood</button>
    </div>

  </div>
);


}
