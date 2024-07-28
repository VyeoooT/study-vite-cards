import './style.css'
import images from '../../../assets/images'

import { useState } from 'react'

function Card2() {
    const [moreLess, setMoreLess] = useState("View More")
    const [showDesc, setShowDesc] = useState(false)

    const handleMoreLess = () => {
        setShowDesc(!showDesc)

        if (moreLess === "View More") {
            setMoreLess("View Less")
            // console.log("view more")
        }
        else {
            setMoreLess("View More")
            // console.log("view less")
        }
    }

    return (
        // console.log("render card2"),

        // card
        <div className="w-64 rounded-3xl overflow-hidden shadow-neutral-500/50 shadow-lg">
            {/* top */}
            <div className="w-full bg-white">
                {/* bg-top-blue */}
                <div className="w-full bg-blue-600 flex justify-center py-5 rounded-bl-3xl">
                    {/* avatar */}
                    <div className="w-1/2 rounded-full bg-white padding-2px">
                        <img className="w-full rounded-full bg-blue-600 padding-2px" src={images.avt} alt="" />
                    </div>
                </div>
            </div>

            {/* bottom */}
            <div className="w-full bg-blue-600">
                {/* bg-bottom-white */}
                <div className="w-full flex flex-col items-center bg-white rounded-tr-3xl pt-2 pb-4 px-2 gap-y-3">
                    {/* info */}
                    <p className="text-2xl font-medium">David Dell</p>
                    <p className={`text-center text-sm text-neutral-600 ${showDesc ? "line-clamp-none" : "line-clamp-2"}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam maiores suscipit iste nihil magni quam reiciendis voluptatum, placeat fugit asperiores non sequi quis accusamus repudiandae iure tempora voluptates sunt!
                    </p>

                    {/* button */}
                    <div>
                        <button className="bg-blue-600 py-2 px-5 rounded-lg text-white text-sm transition-shadow hover:shadow-blue-500/50 hover:shadow-lg active:shadow-blue-400 active:shadow-inner" onClick={handleMoreLess}>{moreLess}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2
