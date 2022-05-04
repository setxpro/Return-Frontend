import { ArrowLeft, Camera } from 'phosphor-react';
import React from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}



const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({feedbackType, onFeedbackRestartRequested}) => {

    const feedbackInfo = feedbackTypes[feedbackType];

  return (
    <>
    <header>
        <button type='button' className='absolute top-5 left-5 text-zinc-400 hover:text-zinc-100'>
            <ArrowLeft 
                weight='bold' 
                className='w-4 h-4' 
                onClick={onFeedbackRestartRequested}
            />
        </button>
        <span className="text-xl leading-6 flex align-items gap-2">
            <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt} className="w-6 h-6"/> 
            {feedbackInfo.title}  
        </span>

            <CloseButton/>
        </header>

        <form className='my-4 w-full'> 
            <textarea 
                className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
                placeholder='Conte com detalhes o que está acontecendo...'
            >
            </textarea>

            <footer className='flex gap-2 mt-2'>

                <button
                    type="button"
                    className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 '
                >
                     <Camera className='w-6 h-6 text-zinc-100'/>
                </button>

                <button
                    type='submit'
                    className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors'
                >
                        Enviar Feedback
                </button>
            </footer>
        </form>
</>
  );
}

export default FeedbackContentStep;