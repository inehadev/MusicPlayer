import React, { useState } from 'react'
import { Howl } from 'howler'

const Musics = () => {
    const [songs , setsongs]=useState([
        { id: 1, title: "Song 1", src: "/Lover.mp3" },
        { id: 2, title: "Song 2", src: "/MereMehboob.mp3" },
        { id: 3, title: "Song 3", src: "/Omeredilkchain.mp3" },
    ])
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
    <div >
      
    </div>
  )
}

export default Musics
