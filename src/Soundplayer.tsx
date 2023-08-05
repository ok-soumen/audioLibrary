import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import './SoundWave.css';


const Soundplayer: React.FC<{ audioURL: string }> = ({ audioURL }) => {
  const wavesurferRef = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple',
      barWidth: 1,
      barHeight: 1,
    })
    wavesurferRef.current.load(audioURL);

    wavesurferRef.current.on('interaction', () => {
      wavesurferRef.current?.play()
    })
   return () => wavesurferRef.current?.destroy();

}, [audioURL]);

  return (
    <div>
      <div id="waveform"></div>
    </div>
  );
};

export default Soundplayer;
