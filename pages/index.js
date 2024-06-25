import Head from 'next/head';
import MediaPlayer from '../components/MediaPlayer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>HLS Media Player</title>
        <meta name="description" content="A simple HLS media player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to HLS Media Player</h1>
        <MediaPlayer />
      </main>
    </div>
  );
}
