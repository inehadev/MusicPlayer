import React from "react";
import { Play, RefreshCw } from 'lucide-react';
import { SkipBack } from 'lucide-react';
import { SkipForward } from 'lucide-react';
import { useState

 } from "react";

const Player = () => {

const [currentSong , setcurrentSong]=useState(null)
const [howlinstance , sethowlinstance]=useState(null);

const playSong = (song)=>{
  if(howlinstance) howlinstance.stop();
  const sound = new Howl({src: [song.src]});
  sound.play()
  sethowlinstance(song);
  setcurrentSong(song);
}

const handlePrevious = ()=>{
  const currentIndex = songs.findIndex((s)=>s.id===currentSong.id);
  const prevIndex = (currentIndex - 1 + songs.length)% songs.length;
  playSong(songs[prevIndex])
}
const nextSong = ()=>{
  const currentIndex= songs.findIndex((s)=>s.id===currentSong.id);
  const nextindex = (currentSong + 1)% songs.length;
  playSong(songs[nextindex]);
}

  return (
    <div className="w-[260px] rounded-md flex flex-col justify-center items-center  mt-[55vh] mb-[20vh] h-[280px] bg-custon1">
      <p className="font-medium "> Now Playing </p>
      <div className="h-36 w-44 mt-4">
        <img className=" h-fit  " src="Pic.svg" alt="" />
        <p className="mt-2 text-center">Beat it</p>
        <p className="text-sm text-center">Michael Jacksonn</p>
      </div>

      <div className=" w-[150px] flex  flex-col justify-between text-center mt-4 rounded-full ">
        <div className="flex justify-between gap-2 text-sm">
          <p>0.00</p>

          <div className="bg-white flex mt-2  justify-between h-1  w-full rounded-full transition-all duration-300 ease-in-out">
            <input className="" type="range"  min={0} max={100} value={0}/>
          </div>
          <p className="text-sm"> 1.36</p>
        </div>
      </div>

      <div className="flex gap-5">
       <button ><RefreshCw className="size-4 "/></button>
        <button onClick={handlePrevious}><SkipBack className="size-4 fill-white"/></button>
        <button  onClick={()=>howlinstance?.Play()} ><Play className="size-4 fill-white" /></button>
        <button onClick={nextSong}><SkipForward className="size-4 fill-white"/></button>


      </div>
    </div>
  );
};

export default Player;
