import { Typography } from '@mui/material';
import React, { useEffect } from 'react'

export default function PresentationPage() {

  const [slide, setSlide] = React.useState([] as string[]);
  const [_text, setText] = React.useState(''); 
  const [fontSize, _setFontSize] = React.useState(60); // Initial font size

  useEffect(() => {
    const handleMessage = (event: any) => {
      console.log('Received message in external tab:', event.data);
      setSlide(event.data);
      setText(convertToText(event.data)); 
    };
    
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const convertToText = (texts: []) => {
    let text = '';
    texts.forEach((line) => {
      text += line + ' ';
    });
    return text;
  }
  

  return (
    <div id="fixedContainer" className='flex flex-col justify-center items-center m-8'>
      {slide.map((line, index) =>
        <Typography sx={{fontSize: `${fontSize}px`, textAlign: 'center'}} variant="body2" key={index}>{line}</Typography>
      )
      }
    </div>
  );
}
