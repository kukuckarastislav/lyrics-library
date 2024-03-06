import { Typography } from '@mui/material';
import React, { useEffect } from 'react'

export default function PresentationPage() {

  const [slide, setSlide] = React.useState([] as string[]);

  useEffect(() => {
    const handleMessage = (event: any) => {
      console.log('Received message in external tab:', event.data);
      setSlide(event.data);
    };
    
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div>
      {slide.map((line, index) =>
        <Typography sx={{fontSize: '100px', textAlign: 'center'}} variant="body2" key={index}>{line}</Typography>
       
      )
      }
    </div>
  );
}
