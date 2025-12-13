import { useRef, useState } from "react";
import "./MoodSongs.css";

const MoodSongs = ({ songs }) => {
  const audioRefs = useRef([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (index) => {
    const audio = audioRefs.current[index];

    if (currentSong === index) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    } else {
      if (currentSong !== null && audioRefs.current[currentSong]) {
        audioRefs.current[currentSong].pause();
        audioRefs.current[currentSong].currentTime = 0;
      }

      audio.play();
      setCurrentSong(index);
      setIsPlaying(true);
    }
  };

  return (
    <div className="mood-songs">
      <h2 className="recommended-title">Recommended Songs</h2>

      {songs.map((song, index) => (
        <div
          className={`song ${
            currentSong === index && isPlaying ? "active" : ""
          }`}
          key={index}
        >
          <div className="left-section">
            <div className="title">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          </div>

          <div className="play-section">
            <audio
              src={song.audio}
              ref={(el) => (audioRefs.current[index] = el)}
              onTimeUpdate={(e) => {
                const progress =
                  (e.target.currentTime / e.target.duration) * 100;
                document.getElementById(
                  `progress-${index}`
                ).style.width = `${progress}%`;
              }}
            />

            {currentSong === index && isPlaying && (
              <div className="equalizer">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}

            {currentSong === index && isPlaying ? (
              <i
                className="ri-pause-line"
                onClick={() => handlePlayPause(index)}
              ></i>
            ) : (
              <i
                className="ri-play-circle-fill"
                onClick={() => handlePlayPause(index)}
              ></i>
            )}
          </div>

          <div className="progress-container">
            <div id={`progress-${index}`} className="progress"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
