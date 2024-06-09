import './style.css'
import images from '../../../assets/images'

import { useState } from 'react'

function Card15() {
    const [btnViewMore, setBtnViewMore] = useState("View More")
    const [viewMore, setViewMore] = useState(false)
    
    const handleViewMore = () => {
        if (btnViewMore === "View More") {
            setBtnViewMore("Hide")
            setViewMore(true)
        }
        else {
            setBtnViewMore("View More")
            setViewMore(false)
        }
    }

    return (
        // card
        <div className="w-80 rounded-3xl shadow-neutral-500/50 shadow-lg overflow-hidden">
            {/* top */}
            <div className="w-full pt-10 bg-linear-gradient-card15">
                {/* avatar */}
                <div className="w-1/2 -mb-1 mx-auto">
                    <img className="w-full" src={images.avtCard15} alt="" />
                </div>
            </div>
    
            {/* bottom */}
            <div className="w-full">
                {/* bg - sub */}
                <div className="w-full bg-orange-300">
                    {/* bg - main */}
                    <div className="bg-custom-card15 flex flex-col items-center rounded-tl-xl rounded-tr-xl py-6 px-2 space-y-7">
                        {/* info */}
                        <div className="text-center space-y-4">
                            {/* name */}
                            <p className="text-teal-600 text-2xl font-semibold">Lotw Fox</p>
    
                            {/* description */}
                            <p className={`text-white text-base ${viewMore ? "line-clamp-none" : "line-clamp-3"} `}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ab mollitia maiores magni aspernatur fuga corrupti, odio doloremque reiciendis repellendus modi itaque aut ut nostrum voluptatem cum adipisci perspiciatis laborum.
                            </p>
                        </div>

                        {/* button */}
                        <div>
                            <button
                                className="w-32 px-2 py-3 bg-yellow-500 rounded-md hover:shadow-yellow-800 hover:shadow-md transition-shadow active:shadow-yellow-300 active:shadow-inner"
                                onClick={handleViewMore}
                            >
                                {btnViewMore}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card15
