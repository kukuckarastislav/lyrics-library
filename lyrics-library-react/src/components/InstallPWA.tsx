// InstallButton.tsx
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface InstallPWAProps {
  showButton: boolean;
}
export default function InstallPWA(props: InstallPWAProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (props.showButton) {
      handleInstallClick();
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      const promptEvent = deferredPrompt;

      promptEvent.prompt();
      promptEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleReloadApp = () => {
    window.location.reload();
  };

  return (
    <div id="installButtonPWA">
      {props.showButton &&
        <div className='flex gap-4'>
          <Button onClick={handleInstallClick} variant="outlined" >
            Install App
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleReloadApp}>
            Reload
          </Button>
        </div>
      }
    </div>
  );
}
