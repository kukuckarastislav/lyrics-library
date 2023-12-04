import { useState } from 'react';
import style from './SongPageMoreOption.module.scss';
import { Divider, Switch, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';


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
  const [repeatRefInVerses, setRepeatRefInVerses] = useState<boolean>(props.currentRepeatRefInVerses);

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

  const handleRepeatRefInVerses = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatRefInVerses(e.target.checked);
    props.callbackRepeatRefInVersesChange(e.target.checked);
  }

  
  return (
    <div className={style.SongPageMoreOptionCss}>
      <div>
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

      <div className='mt-4'>
        <Typography id="discrete-slider" gutterBottom>
          Repeat First Ref
        </Typography>
        <Switch checked={repeatRefInVerses} onChange={handleRepeatRefInVerses} />
      </div>

      <Divider className='mt-4' />
      <div>Song ID: {props.songId}</div>
    </div>
  );
}
