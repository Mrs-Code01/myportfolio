// src/components/PlayAudioOnLoad.jsx
import React, { useRef, useEffect } from "react";

const PlayAudioOnLoad = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try autoplay immediately
    audio.play().catch(() => {
      console.log("Autoplay blocked. Waiting for first user action...");

      const enableAudio = () => {
        audio.muted = false;
        audio.play();
        // remove listeners after first play
        window.removeEventListener("click", enableAudio);
        window.removeEventListener("keydown", enableAudio);
        window.removeEventListener("touchstart", enableAudio);
      };

      window.addEventListener("click", enableAudio);
      window.addEventListener("keydown", enableAudio);
      window.addEventListener("touchstart", enableAudio);
    });
  }, []);

  return (
    <audio ref={audioRef} src="/audio/tune.mp3" preload="auto" autoPlay muted />
  );
};

export default PlayAudioOnLoad;
