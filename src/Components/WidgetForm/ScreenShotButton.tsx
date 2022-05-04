import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import Loading from '../Loading';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

const ScreenshotButton: React.FC<ScreenshotButtonProps> = ({onScreenshotTook, screenshot}) => {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    // Now create a function to screenshot...
    // Lib npm install html2canvas
    async function handleTakeScreenShot() {

      setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!); // screenshot
        const base64image = canvas.toDataURL('image/png'); // Convert in png

        onScreenshotTook(base64image); // get image

        setIsTakingScreenshot(false);
    }


    if (screenshot) {
      return (
        <button 
        type='button' 
        onClick={() => onScreenshotTook(null)}
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom', // Remove after implements in landing page 
          backgroundSize: 180, // Remove after implements in landing page
        }}
        >
          <Trash weight='fill'/>
        </button>
      )
    }

  return (
    <button
    type="button"
    onClick={handleTakeScreenShot}
    className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 '
>
    {isTakingScreenshot ? <Loading/> : <Camera className='w-6 h-6 text-zinc-100'/>}
     
    </button>
  );
}

export default ScreenshotButton;