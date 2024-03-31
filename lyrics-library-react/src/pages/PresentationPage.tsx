import { Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { PresentationData } from '../models/PresentationData';
import userSettings from '../models/UserSettings';

export default function PresentationPage() {

  const [fontSize, setFontSize] = React.useState(userSettings.presentationFontSize); // Initial font size
  const [presentationData, setPresentationData] = React.useState(new PresentationData());

  useEffect(() => {
    const handleMessage = (event: any) => {
      console.log('Received message in external tab:', event.data);
      const newPresentationData = event.data as PresentationData;
      setPresentationData(newPresentationData);
      setFontSize(newPresentationData.fontSize);
    };
    
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div id="fixedContainer" className='flex flex-col justify-center items-center m-8'>
      { presentationData.slideNumber === -1 && 
        <div>
          <Typography sx={{fontSize: `${fontSize}px`, textAlign: 'center'}} variant="body2">
            {presentationData.songNumber > 0 ? presentationData.songNumber+'. ' : ''}{presentationData.songName}
          </Typography>
          <Typography sx={{fontSize: `${fontSize/1.4}px`, textAlign: 'center'}} variant="body1">{presentationData.songBookName}</Typography>
        </div> 
      }
      <div id="versesTextId">
        { 
          presentationData.verses && presentationData.verses.map((line, index) =>
            <Typography sx={{fontSize: `${fontSize}px`, textAlign: 'center'}} variant="body2" key={index}>{line}</Typography>
          )
        }
      </div>

    </div>
  );
}
