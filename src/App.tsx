import React from 'react';
import  './App.css';
import Soundplayer from './Soundplayer';

const App: React.FC = () => {
  const audioURL = 'https://dosenv2storage.blob.core.windows.net/articles/1690731074752_file-example-MP3-700KB.mp3';

  return (
    <div className='sounddiv'>
      <h1>My WaveSurfer.js Sound Wave Design</h1> 
      <Soundplayer audioURL={audioURL} />
    </div>
  );
};

export default  App;
