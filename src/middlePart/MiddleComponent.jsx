import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import './style.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { SongContext } from '../context/context';
import { useContext } from 'react';


export default function MiddleComponent({song}) {
  const songContext = useContext(SongContext);
  const {setSong} = songContext;
  return (
    <Card className="card-image" style={{minWidth: '125px'}} sx={{ maxWidth: 130 }}>
      <CardActionArea>       
       <div style={{position: 'relative'}}>
       <CardMedia
          component="img"
          height="100"
          image="https://images.herzindagi.info/image/2023/Jan/baby-girl-names-on-goddess-saraswati.jpg"
          alt="green iguana"/>
       <div className='play-button' ><PlayCircleOutlineIcon style={{position:"bottomright"}} onClick={() => setSong({name: 'Bhakti songs',singer:'Prasant Signh', isplaying: true, img: 'https://images.herzindagi.info/image/2023/Jan/baby-girl-names-on-goddess-saraswati.jpg'})}/>
        
        </div>      
       <MoreHorizIcon className="horizon-button" />
       <FormControlLabel className="favourite-button" control={<Checkbox icon={<FavoriteBorder />}
				checkedIcon={<Favorite />} name="checkedH" />}/>
       </div>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          Bkakti songs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Prasant Singh
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}