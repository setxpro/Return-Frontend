import html2canvas from 'html2canvas';
import { Camera } from 'phosphor-react';
import React from 'react';

// import { Container } from './styles';

const ScreenShotButton: React.FC = () => {

    // Now create a function to screenshot...
    // Lib npm install html2canvas
    async function handleTakeScreenShot() {
        const canvas = await html2canvas(document.querySelector('html')!); // screenshot
        const base64image = canvas.toDataURL('image/png'); // Convert in png

        console.log(base64image);
    }

  return (
    <button
    type="button"
    onClick={handleTakeScreenShot}
    className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 '
>
     <Camera className='w-6 h-6 text-zinc-100'/>
    </button>
  );
}

export default ScreenShotButton;