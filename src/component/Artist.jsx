import React from 'react'
import { useState } from 'react'
import { Howl } from 'howler'

const Artist = () => {
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
  return (
    <div className='mx-10 mt-10'>

        <div className=''><img className=' ' src="Artist.svg" alt="" /></div>
        <div className='flex justify-between font-medium mt-5 mx-4'>
            <p>Popular </p>
            <p>See All</p>
        </div>
        <div>
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() => playSong(song)}
            className={`p-3 rounded-lg cursor-pointer ${
              currentSong?.id === song.id ? " text-white" : ""
            }`}
          >
           
        </div>
        ))}
        </div>
        <div className='flex justify-between mt-3'>
            <div   key={songs.id}  onClick={() => playSong(songs)} className='flex gap-7'><p>{songs.id}</p>
            <img src="" alt="" />
            <p>{songs.title}</p>
            </div>
            <div className='flex gap-7'>
            <p>{songs.src}</p>
            <p>Time</p>
            </div>
            <p  className='mr-3'>Album</p>

        </div>
       
      

    </div>
  )
}

export default Artist
