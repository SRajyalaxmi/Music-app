import Component from '../Header/component'
import Left from '../LeftComponent/Left'
import MiddleComponent from '../middlePart/MiddleComponent'
import './Home.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import RefreshIcon from '@mui/icons-material/Refresh';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { useState, useContext } from 'react';
import { SongContext } from '../context/context';
import PauseIcon from '@mui/icons-material/Pause';

const defaultSongs = [
  { name: 'New Releases', songs: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11"] },
  { name: 'Top Playlists', songs: ["S1", "S2"] },
  { name: 'Podcats', songs: ["S1", "S2", "S3", "S4", ] },
];

function Home() {
  const songContext = useContext(SongContext);
  const { song } = songContext;
  const [songs, setSongs] = useState(defaultSongs);
  return (
    <div>
      <Component /><br /><br /><br />
      <div className='first-div'>
        <Left setSongs={setSongs} />
        <div className='second-div right' style={{ position: 'relative', left: '200px', marginBottom: '80px', overflowX: 'hidden', padding: "30px 10px 10px 20px" }}>
          {songs.map(category => {
            return <div className="third-div"><h2>{category.name}</h2>
              <div className="fourth-div example" style={{ overflowX: 'scroll', display: "flex", gap: '1rem' }}>
                {category.songs.map(song => {
                  return <MiddleComponent />
                })}
              </div></div>
          })}

        </div>
      </div>
      <div className="queue"
        style={{
          backgroundColor: '#eee',
          position: 'fixed',
          top: '200px',
          transform: 'translateX(150px)',
          scrollbarWidth: 'none', right: '0',
          minWidth: '300px', minHeight: '500px',
          boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)'
        }}>
        <h2>Queue</h2>
      </div>
      <div className="play">
        <div className="song-img"><img src={song.img}
          alt={song.name} width="90" height="90" />
          <span>{song.name}<br />{song.singer}</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <RefreshIcon style={{ height: "40", width: "40", }} />
          <SkipPreviousIcon style={{ height: "40", width: "40" }} />
          {!song.isplaying ? <PlayArrowIcon style={{ height: "40", width: "40" }}
            onClick={() => songContext.setSong(song => ({ ...song, isplaying: true }))} /> :
            <PauseIcon style={{ height: "40", width: "40" }} 
            onClick={() => songContext.setSong(song => ({ ...song, isplaying: true }))} />}
          <SkipNextIcon style={{ height: "40", width: "40" }} />
          <ShuffleIcon style={{ height: "40", width: "40" }} />
        </div>
        <div >
          <MoreHorizIcon style={{ height: "40", width: "40" }} />&nbsp;&nbsp;&nbsp;&nbsp;
          <VolumeUpIcon style={{ height: "40", width: "40" }} />&nbsp;&nbsp;&nbsp;&nbsp;
          <OpenInFullIcon style={{ height: "40", width: "40" }} />&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  )
}

export default Home