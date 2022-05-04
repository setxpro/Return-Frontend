import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../svg/bug.svg'
import ideaImageUrl from '../../svg/ideia.svg'
import thoughtImageUrl from '../../svg/thought.svg'
import { useState } from "react";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        }

    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de uma lâmpada'
        }

    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

/** Object.entries(feedbackType) => [ 
     * ['BUG', {...object}], 
     * ['IDEA', {...object}], 
     * ['OTHER', {...object}] 
 * ]

*/ 

export type FeedbackType = keyof typeof feedbackTypes; // OBS

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    const [feedbackSended, setFeedbackSended] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSended(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> {/** Mobile w-[calc(100vw-2rem)] */}
            { feedbackSended ? (
                <FeedbackSuccessStep onFeedbackRestartRequest={() => handleRestartFeedback()}/>
            ) :  
            <>
                 {!feedbackType ? (

                    <FeedbackTypeStep 
                        onFeedbackTypeChanged={setFeedbackType}
                    />

                ) : 

                    <FeedbackContentStep 
                        feedbackType={feedbackType} 
                        onFeedbackRestartRequested={handleRestartFeedback}
                        onFeedbackSended={() => setFeedbackSended(true)}
                    />

                }
            </>
            }

           
           
           <footer className="text-xs text-neutral-400">
                Created by <a href="#" className="underline underline-offset-2">Patrick Anjos</a>
           </footer>
        </div>
    )
}