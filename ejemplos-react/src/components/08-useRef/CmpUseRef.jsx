import Video from '../../assets/video.mp4'

const CmpUseRef = () => {
  return (
    <div>
      <h2>useRef</h2>

      <video src={Video} width="300"></video>

      <button>Play</button>
      <button>Pause</button>
      <input type="range" />
      <button>Fullscreen</button>
    </div>
  )
}

export default CmpUseRef