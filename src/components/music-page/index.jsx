import { MusicPagePart } from "./styled";
import Music from "../../assets/vectors/music.png";
import Song from "../../assets/audio/song.mp3";
import { useRef, useState, useEffect } from "react";

export const MusicPage = () => {
  const audioRef = useRef(null);
  const [showTip, setShowTip] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const hideTip = () => {
    setIsFading(true);
    setTimeout(() => setShowTip(false), 350);
  };

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 134;
      audioRef.current.play();
    }
    hideTip();
  };

  useEffect(() => {
    const audio = audioRef.current;
    const tryAutoPlay = () => {
      if (!audio) return;
      audio.currentTime = 134;
      const playPromise = audio.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(() => {
          // Autoplay may be blocked by browser; user can still tap to start.
        });
      }
    };

    if (audio) {
      if (audio.readyState >= 1) {
        tryAutoPlay();
      } else {
        audio.addEventListener("loadedmetadata", tryAutoPlay, { once: true });
      }
    }

    const timeout = setTimeout(hideTip, 4000);
    return () => {
      clearTimeout(timeout);
      if (audio) {
        audio.removeEventListener("loadedmetadata", tryAutoPlay);
      }
    };
  }, []);

  return (
    <MusicPagePart onClick={handleClick}>
      <img loading="lazy" src={Music} alt="music" />
      <audio ref={audioRef} src={Song} loop autoPlay playsInline />
      {showTip && (
        <div
          onClick={handleClick}
          className={`tip ${isFading ? "fade-out" : ""}`}
        >
          Սեղմեք այստեղ
        </div>
      )}
    </MusicPagePart>
  );
};
