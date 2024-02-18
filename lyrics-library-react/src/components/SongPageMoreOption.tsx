import { useState } from 'react';
import style from './SongPageMoreOption.module.scss';
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { ContentCopy } from '@mui/icons-material';
import library from '../libraryData';


interface SongPageMoreOptionProps {
  callbackFontSizeChange: (fontSize: number) => void;
  callbackTextAlignChange: (textAlign: string) => void;
  currentRepeatRefInVerses: boolean;
  callbackRepeatRefInVersesChange: (repeatRefInVerses: boolean) => void;
  currentFontSize: number;
  currentTextAlign: string;
  songId: number;
}

export default function SongPageMoreOption(props: SongPageMoreOptionProps) {

  const [verseFontSize, setVerseFontSize] = useState(props.currentFontSize);
  const [verseTextAlign, setVerseTextAlign] = useState(props.currentTextAlign);

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if(newAlignment === null) return;
    setVerseTextAlign(newAlignment!);
    props.callbackTextAlignChange(newAlignment!);
  };
  
  const handleIncreaseFontSize = () => {
    if (verseFontSize >= 128) return;
    props.callbackFontSizeChange(verseFontSize + 1);
    setVerseFontSize(verseFontSize + 1);
  }

  const handleDecreaseFontSize = () => {
    if (verseFontSize <= 1) return;
    props.callbackFontSizeChange(verseFontSize - 1);
    setVerseFontSize(verseFontSize - 1);
  }

  const handleInputFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 128) {
      props.callbackFontSizeChange(value);
    }
    setVerseFontSize(value);
  }


  const handleShare = () => {
    navigator.share({
      title: 'Song',
      text: 'Song',
      url: window.location.href
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }

  const handleCopySongText = () => {
    const song = library.getSongBySongId(props.songId)
    const songText = song?.getSongText();
    if(songText) {
      navigator.clipboard.writeText(songText);
    }
  }
  
  return (
    <div className={style.SongPageMoreOptionCss}>
      <div className=''>
        <MenuList>
          <MenuItem onClick={handleShare}>
            <ListItemIcon>
              <ShareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Share</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleCopySongText}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy Text</ListItemText>
          </MenuItem>
        </MenuList>
      </div>
      <Divider />
      <div className='mt-2'>
        <Typography id="discrete-slider" gutterBottom>
          Font Size
        </Typography>
        <div className='flex gap-4 items-center'>
          <RemoveRoundedIcon sx={{ fontSize: 36 }} className='iconButtonll cursor-pointer' onClick={handleDecreaseFontSize} />
          <input className='w-10' type="number" step="1" value={verseFontSize} onChange={handleInputFontSize} />
          <AddRoundedIcon sx={{fontSize: 36}} className='iconButtonll cursor-pointer' onClick={handleIncreaseFontSize} />
        </div>
      </div>
      <div className='mt-4'>
        <Typography id="discrete-slider" gutterBottom>
          Text Align
        </Typography>
        <ToggleButtonGroup
          value={verseTextAlign}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

     
      <div className='mt-2'></div>
      <Divider className='my-4' />
      <div>Song ID: {props.songId}</div>
    </div>
  );
}
