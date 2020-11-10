import React,{useRef,useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong,isPlaying,setIsPlaying}) => {

  // ref
  const audioRef=useRef(null)
  // event handler
  const playSongHandler=()=>{
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }
  

  const timeUpdateHandler=(e) =>{
            const current=e.target.currentTime;
            const duration=e.target.duration;

            setSongInfo({...songInfo,currentTime:current,duration:duration})
  };

  const getTime=(time)=>{
  return (
   Math.floor(time/60)+":"+("0"+Math.floor(time % 60)).slice(-2)
   )
  }

  // state
  const[songInfo,setSongInfo]=useState({
    currentTime:null,
    duration:null
  })

  return (
    <div className="player">
     <div className="time-control">
  <p>{getTime(songInfo.currentTime)}</p>
       <input type="range"/>
  <p>{getTime(songInfo.duration)}</p>
     </div>
     <div className="play-control">
        <FontAwesomeIcon className="left" size="2x" icon={faAngleLeft}/>
        <FontAwesomeIcon onClick={playSongHandler} className="play"  size="2x" icon={faPlay}/>
        <FontAwesomeIcon className="right"  size="2x" icon={faAngleRight}/>
     </div>
     <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player
