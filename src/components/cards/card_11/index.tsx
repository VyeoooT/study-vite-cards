import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

import { useState } from 'react'

function Card11() {
    // rating
    const starQty = 5
    const stars = Array.from({ length: starQty })
    const arrayFill = Array(starQty).fill(true)
    
    const [checked, setChecked] = useState(arrayFill)
    const [lastChecked, setLastChecked] = useState(0)
    
    const handleRating = (index: number) => {
        setLastChecked(index)

        setChecked(prevChecked => {
            const newRate  = [...prevChecked]
            const currentRate = prevChecked[index]

            if (currentRate) {
                for (let i = index + 1; i < starQty; i++) {
                    newRate[i] = false
                }
            }
            else {
                for (let i = lastChecked + 1; i <= index; i++) {
                    newRate[i] = true
                }
            }

            return newRate
        })
    }

    // read more
    const [readMore, setReadMore] = useState(false)
    const [btnMore, setBtnMore] = useState("Read More")

    const handleReadMore = () => {
        setReadMore(!readMore)
        
        if (btnMore === "Read More") {
            setBtnMore("Hide")
        }
        else {
            setBtnMore("Read More")
        }
    }

    // subscribe
    const [subscriber, setSubscriber] = useState(false)
    const [btnSubscribe, setBtnSubscribe] = useState("Subscribe")

    const handleSubscribe = () => {
        setSubscriber(!subscriber)

        if (btnSubscribe === "Subscribe") {
            setBtnSubscribe("Unsubscribe")
        }
        else {
            setBtnSubscribe("Subscribe")
        }
    }

    return (
        // card
        <div className="w-72 rounded-md pt-7 pb-5 space-y-4 bg-white shadow-neutral-500/50 shadow-xl overflow-hidden">
            {/* top */}
            <div className="relative">
                {/* carpentry */}
                {subscriber &&
                <div className="absolute bottom-5 right-3 px-5 py-1 border border-blue-800 -rotate-12">
                    <p className="text-xl text-blue-800 uppercase">Subscribe</p>
                </div>}

                {/* avatar */}
                <div className="w-1/2 mx-auto bg-purple-600 padding-2px rounded-full">
                    <img className="w-full bg-white padding-2px rounded-full" src={images.avt} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="flex flex-col items-center px-5 space-y-3">
                {/* info */}
                <div className="space-y-1">
                    {/* name */}
                    <p className="text-xl text-purple-600 font-medium text-center">David Chrish</p>

                    {/* rate */}
                    <div className="flex flex-row flex-wrap justify-center space-x-1">
                        {stars.map((_, idx) => (
                            <button key={idx} onClick={() => handleRating(idx)}>
                                <FontAwesomeIcon icon={checked[idx] ? faStarSolid : faStarRegular} style={{ color: "#9340AA" }} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* description */}
                <div className={`text-base text-justify font-light ${readMore ? "line-clamp-none" : "line-clamp-3"}`}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere culpa dignissimos quod officia hic natus quam nisi soluta, ipsam, distinctio corporis quia, ex nam nihil libero sit sapiente sunt eaque.
                </div>

                {/* button */}
                <div className="w-full flex flex-row flex-wrap justify-between">
                    <button className="w-32 px-1 py-2 rounded-md border-2 border-purple-600 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white transition-colors" onClick={handleReadMore}>{btnMore}</button>
                    <button className="w-28 px-1 py-2 rounded-md bg-purple-600 text-white border-2 border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 transition-colors" onClick={handleSubscribe}>{btnSubscribe}</button>
                </div>
            </div>
        </div>
    )
}

export default Card11
