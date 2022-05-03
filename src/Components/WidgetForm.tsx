import { CloseButton } from "./CloseButton";

import bugImageUrl from '../svg/bug.svg'
import ideaImageUrl from '../svg/ideia.svg'
import thoughtImageUrl from '../svg/thought.svg'
import { useState } from "react";

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes; // OBS

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> {/** Mobile w-[calc(100vw-2rem)] */}
            <header>

            <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton/>
            </header>
            
            {!feedbackType ? (
                <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => setFeedbackType(key as FeedbackType)}
                        >
                            <img src={value.image.source} alt={value.image.alt}/>
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
            ) : 
                <p>Hello World!</p>
            }
           
           <footer className="text-xs text-neutral-400">
                Created by <a href="#" className="underline underline-offset-2">Patrick Anjos</a>
           </footer>
        </div>
    )
}