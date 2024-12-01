import React, { Children } from 'react'
import { createContext , useState } from 'react'

 export const PlayerContext = createContext()
 
 export const PlayerProvider =({Children})=>{
    const [currentSong , setcurrentSong]=useState(null);
    const [isPlaying , setisPlaying] = useState(false);

    return(
        <PlayerContext.Provider value={{currentSong , setcurrentSong , isPlaying , setisPlaying}}>
            {Children}
        </PlayerContext.Provider>
    )

 }
