import React,{useState} from "react";
import './styles/app.scss';
import Player from "./components/Player";
import Song from "./components/Song";
import data from './util';



function App() {
  // state
  const[songs,setSongs]=useState(data());
  const [currentSong,setCurrentSong]=useState(songs[0]);
  const [isPlaying,setIsPlaying]=useState(false);
  return (
    <div className="App">
      <h1>Music App</h1>
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </div>
  );
}

export default App;
