import React, { FormEvent, useState } from 'react';
import { ArrowLeft } from 'phosphor-react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import ScreenshotButton from '../ScreenShotButton';
import { api } from '../../../lib/api';
import Loading from '../../Loading';

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSended: () => void;
}



const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({ 
    feedbackType, 
    onFeedbackRestartRequested, 
    onFeedbackSended
}) => {

    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');

    const feedbackInfo = feedbackTypes[feedbackType];

    const [isSendingFeedback, setIsSendingFeedback] = useState(false);


    async function handleSubmitFeedback(e: FormEvent) {
        e.preventDefault();
        setIsSendingFeedback(true);
        // console.log({
        //     screenshot,
        //     comment
        // })

        await  api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot
        })

        setComment('');
        onFeedbackSended(); // rendenizar para outra página
    
    }

    

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

        <form className='my-4 w-full' onSubmit={handleSubmitFeedback}> 
            <textarea 
                className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
                placeholder='Conte com detalhes o que está acontecendo...'
                onChange={e => setComment(e.target.value)}
                value={comment}
            >
            </textarea>

            <footer className='flex gap-2 mt-2'>
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                    
                        <button
                        disabled={comment.length === 0 || isSendingFeedback}
                        type='submit'
                        className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:bg-brand-500'
                        >
                            {isSendingFeedback ? <Loading/> : 'Enviar Feedback'}
                        </button>
                
            </footer>
        </form> 
</>
  );
}

export default FeedbackContentStep;