import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/video1.mp4'

const Videoplayer = ({play,setplay}) => {

  const player =useRef(null);

  const closeplayer=(e)=>{
    if(e.target===player.current){
      setplay(false);
    }
  }


  return (
    <div className={`video-player ${play ? '' : 'hide'}`} ref={player} onClick={closeplayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
