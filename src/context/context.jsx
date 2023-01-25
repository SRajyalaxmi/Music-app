import { createContext, useState } from "react";

export const SongContext = createContext();
const SongContextProvider = ({children}) => {
    const [song, setSong] = useState({name: '',singer:'', image: '',isplaying: false});
    const value = {
        song,
        setSong,
    };
    return <SongContext.Provider value={value}>{children}</SongContext.Provider>
};

export default SongContextProvider;