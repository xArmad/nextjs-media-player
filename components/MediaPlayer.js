import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const MediaPlayer = () => {
  const videoRef = useRef(null);
  const defaultVideoUrl = 'https://prod-ec-eu-central-1.video.pscp.tv/Transcoding/v1/hls/dk0l_P-AN2j9WOl7VFi7-XR8VKAlo5vnQpiD2D1UeOypzcAO1Bv8KSAZ5OIT6gUYwWKf10m5o2739tlcHcU47Q/transcode/eu-central-1/periscope-replay-direct-prod-eu-central-1-public/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsInZlcnNpb24iOiIyIn0.eyJFbmNvZGVyU2V0dGluZyI6ImVuY29kZXJfc2V0dGluZ183MjBwMzBfMTAiLCJIZWlnaHQiOjcyMCwiS2JwcyI6Mjc1MCwiV2lkdGgiOjEyODB9.ldktM4fCFRfkP4ZEBfZPKtlAUNAcTPkoz994YJAzWpE/dynamic_playlist.m3u8?type=live';
  const [videoUrl, setVideoUrl] = useState(defaultVideoUrl);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = videoUrl;
    }
  }, [videoUrl]);

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const resetToDefault = () => {
    setVideoUrl(defaultVideoUrl);
  };

  return (
    <div>
      <video ref={videoRef} controls width="100%" />
      <div>
        <input
          type="text"
          value={videoUrl}
          onChange={handleVideoUrlChange}
          placeholder="Enter HLS video URL"
        />
        <button onClick={resetToDefault}>Reset to Default</button>
      </div>
    </div>
  );
};

export default MediaPlayer;
