import './style.css'
import images from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

function Card11() {
    return (
        // card
        <div className="w-72 rounded-md pt-7 pb-5 space-y-4 bg-white shadow-neutral-500/50 shadow-xl overflow-hidden">
            {/* top */}
            <div className="w-full">
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
                        <button>
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#9340AA" }} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#9340AA" }} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#9340AA" }} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faStarRegular} style={{ color: "#9340AA" }} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faStarRegular} style={{ color: "#9340AA" }} />
                        </button>
                    </div>
                </div>

                {/* description */}
                <div className="text-base text-justify font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo adipisci ea recusandae animi atque alias deleniti
                </div>

                {/* button */}
                <div className="w-full flex flex-row flex-wrap justify-between">
                    <button className="px-5 py-2 rounded-md border-2 border-purple-600 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white transition-colors">Read More</button>
                    <button className="px-5 py-2 rounded-md bg-purple-600 text-white border-2 border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 transition-colors">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Card11
