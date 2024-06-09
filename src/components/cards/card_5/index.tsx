import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

function Card_5() {
    //handle react heart
    const [iconHeart, setIconHeart] = useState(faHeartRegular)

    const handleTypeHeart = () => {
        if (iconHeart === faHeartRegular) {
            setIconHeart(faHeartSolid)
        }
        else {
            setIconHeart(faHeartRegular)
        }
    }

    return (
        // card
        <div className="w-36rem flex flex-row justify-center space-x-14 pe-14 rounded-3xl bg-white shadow-neutral-500 shadow-2xl overflow-hidden">
            {/* left */}
            <div className="relative basis-2/5">
                {/* avatar */}
                <div className="absolute w-3/4 top-5 right-0 translate-x-1/2">
                    <img className="w-full bg-white p-2 rounded-full" src={images.avtCard5} alt="" />
                </div>

                {/* bg */}
                <img className="w-full h-full object-cover" src={images.bgCard5} alt="" />
            </div>

            {/* right */}
            <div className="w-full basis-auto flex flex-col mt-20 space-y-8">
                {/* collect */}
                <div className="text-end">
                    <p className="text-base font-bold text-green-800">Ant Collector</p>
                </div>

                {/* info */}
                <div className="space-y-3">
                    {/* title */}
                    <p className="text-3xl font-bold">Morgan Sweeney</p>

                    {/* description */}
                    <p className="leading-5 text-base">
                        Morgan has collected ants since they were six years old and now has many dozen ants but none in their plants.
                    </p>
                </div>

                {/* icons */}
                <div className="w-full flex flex-row justify-around pb-6">
                    <button onClick={handleTypeHeart}>
                        <FontAwesomeIcon className="hover:cursor-pointer" icon={iconHeart} size="xl" style={{color: "#8CC14D"}}/>
                    </button>

                    <a href="https://vyeoo289@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#8CC14D"}}/>
                    </a>
                    <a href="https://www.group.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faUserGroup} size="xl" style={{color: "#8CC14D"}}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card_5
