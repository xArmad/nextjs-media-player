// pages/index.js
import { useState } from 'react';
import MediaPlayer from '../components/MediaPlayer';

const DEFAULT_URL = 'https://path/to/your/hls/playlist.m3u8';

export default function Home() {
  const [url, setUrl] = useState(DEFAULT_URL);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleReset = () => {
    setUrl(DEFAULT_URL);
  };

  return (
    <div>
      <h1>Next.js Media Player</h1>
      <input
        type="text"
        value={url}
        onChange={handleChange}
        style={{ width: '80%', padding: '10px', margin: '10px 0' }}
      />
      <button onClick={handleReset} style={{ padding: '10px', margin: '10px 0' }}>
        Reset to Default
      </button>
      <MediaPlayer url={url} />
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        input {
          font-size: 1.2rem;
        }
        button {
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}
