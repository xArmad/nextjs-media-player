// components/MediaPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

const MediaPlayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        playing
        controls
        width="100%"
        height="100%"
      />
      <style jsx>{`
        .player-wrapper {
          position: relative;
          padding-top: 56.25%; /* 16:9 aspect ratio */
        }
        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default MediaPlayer;
