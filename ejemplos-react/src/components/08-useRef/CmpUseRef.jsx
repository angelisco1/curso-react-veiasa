import { useEffect, useRef, useState } from 'react';
import Video from '../../assets/video.mp4';

const CmpUseRef = () => {
  const videoRef = useRef()
  const [volumen, setVolumen] = useState(0)

  useEffect(() => {
    setVolumen(videoRef.current.volume * 100)
  }, [])

  return (
    <div>
      <h2>useRef</h2>

      <video src={Video} width="300" ref={videoRef}></video>

      <button type="button" onClick={() => videoRef.current.play()}>Play</button>
      <button type="button" onClick={() => videoRef.current.pause()}>Pause</button>
      <button type="button" onClick={() => videoRef.current.requestFullscreen()}>Fullscreen</button>
      <input type="range" min="0" max="100" value={volumen} onChange={(e) => {
        const volumenInput = e.target.value
        videoRef.current.volume = volumenInput / 100
        setVolumen(volumenInput)
      }} />
    </div>
  )
}

export default CmpUseRef