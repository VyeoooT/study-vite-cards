import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

function Card4() {
    return (
        // card
        <div className="w-64 rounded-2xl space-y-10 bg-white shadow-neutral-500/50 shadow-2xl overflow-hidden">
            {/* top */}
            <div className="relative w-full bg-purple-700 py-10">
                {/* social */}
                <div className="flex flex-col -translate-y-6 -translate-x-4 items-end space-y-2">
                    <FontAwesomeIcon className="opacity-50 hover:cursor-pointer hover:opacity-100 hover:transition-opacity transition-opacity" icon={faFacebook} style={{color: "white"}} />
                    <FontAwesomeIcon className="opacity-50 hover:cursor-pointer hover:opacity-100 hover:transition-opacity transition-opacity" icon={faGithub} style={{color: "white"}} />
                    <FontAwesomeIcon className="opacity-50 hover:cursor-pointer hover:opacity-100 hover:transition-opacity transition-opacity" icon={faTwitter} style={{color: "white"}} />
                </div>
                
                {/* avatar */}
                <div className="w-1/2 bg-purple-700 rounded-full padding-2px absolute -bottom-1/4 translate-x-1/2">
                    <img className="w-full bg-white rounded-full padding-2px" src={images.avt} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="flex flex-col items-center bg-white pb-8 px-2 space-y-6">
                {/* info */}
                <div className="flex flex-col items-center space-y-2">
                    {/* name */}
                    <p className="text-2xl font-medium">Prem Shahi</p>

                    {/* description */}
                    <p className="leading-3 text-sm">Web Developer</p>
                </div>

                {/* rate */}
                <div className="w-full flex flex-row flex-wrap justify-center space-x-1">
                    <FontAwesomeIcon className="translate-y-0 hover:cursor-pointer hover:translate-y-1 transition-transform" icon={faStarSolid} style={{ color: "#7E22CE" }} />
                    <FontAwesomeIcon className="translate-y-0 hover:cursor-pointer hover:translate-y-1 transition-transform" icon={faStarSolid} style={{ color: "#7E22CE" }} />
                    <FontAwesomeIcon className="translate-y-0 hover:cursor-pointer hover:translate-y-1 transition-transform" icon={faStarSolid} style={{ color: "#7E22CE" }} />
                    <FontAwesomeIcon className="translate-y-0 hover:cursor-pointer hover:translate-y-1 transition-transform" icon={faStarSolid} style={{ color: "#7E22CE" }} />
                    <FontAwesomeIcon className="translate-y-0 hover:cursor-pointer hover:translate-y-1 transition-transform" icon={faStarRegular} style={{ color: "#7E22CE" }} />
                </div>

                {/* button */}
                <div className="font-medium flex flex-row flex-wrap justify-around space-x-3">
                    <button className="bg-purple-700 text-white text-sm rounded-full py-2 px-6 transition-colors hover:shadow-purple-500/60 hover:shadow-md active:shadow-gray-600 active:shadow-inner">About Me</button>
                    <button className="bg-purple-700 text-white text-sm rounded-full py-2 px-6 transition-colors hover:shadow-purple-500/60 hover:shadow-md active:shadow-gray-600 active:shadow-inner">Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default Card4
