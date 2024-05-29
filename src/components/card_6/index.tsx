import './style.css'
import images from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

function Card6() {
    return (
        // card
        <div className="w-64 flex flex-col items-center rounded-custom bg-white shadow-neutral-500/50 shadow-xl overflow-hidden">
            {/* top */}
            <div className="relative w-full flex flex-col items-center">
                {/* bg */}  
                <div>
                    <img className="w-full aspect-video object-cover" src={images.bgCard6} alt="" />
                </div>
                
                {/* avatar */}
                <div className="absolute w-1/2 top-1/2 shadow-gray-400 shadow-xl rounded-full">
                    <img className="w-full" src={images.avtCard5} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="w-full px-4 space-y-6">
                {/* more button */}
                <div className="w-full flex flex-col items-end mt-5">
                    <button>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>

                {/* info */}
                <div className="w-full text-center mt-8">
                    {/* name */}
                    <p className="text-2xl text-gray-800 font-semibold">Morgan Sweeney</p>

                    {/* position */}
                    <p className="text-sm text-gray-500 mt-1">Ant Collector</p>
                </div>

                {/* social */}
                <div className="w-full flex flex-row flex-wrap items-center justify-around">
                    {/* follower */}
                    <div className="text-center">
                        <p className="text-2xl font-bold text-cyan-500">12</p>
                        <p className="text-xs text-gray-500">Followers</p>
                    </div>

                    {/* following */}
                    <div className="text-center">
                        <p className="text-2xl font-bold text-cyan-500">1000</p>
                        <p className="text-xs text-gray-500">Following</p>
                    </div>
                </div>

                {/* button follow */}
                <div className="w-full text-center">
                    <button className="w-full py-3 rounded-full bg-yellow-400 text-sm text-black font-medium hover:shadow-yellow-500/50 hover:shadow-lg transition-shadow active:shadow-yellow-800/40 active:shadow-inner">Follow</button>
                </div>

                {/* description */}
                <div className="pb-8">
                    <p className="text-sm text-gray-500 text-justify leading-4">
                        Morgan has collected ants since they were six years old and now has many dozen ants but none in their plants.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card6
