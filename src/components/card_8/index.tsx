import './style.css'
import images from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

function Card8() {
    return (
        // card
        <div className="w-64 rounded-3xl border-4 border-cyan-400 bg-black overflow-hidden">
            {/* top */}
            <div className="w-full relative pt-10 pb-4">
                {/* effect */}
                <div className="effect bg-cyan-400"></div>
    
                {/* social */}
                <div className="absolute top-5 right-5 flex flex-col space-y-3 z-10">
                    <FontAwesomeIcon className="hover:cursor-pointer" icon={faFacebook} style={{ color: "white" }}/>
                    <FontAwesomeIcon className="hover:cursor-pointer" icon={faGithub} style={{ color: "white" }}/>
                    <FontAwesomeIcon className="hover:cursor-pointer" icon={faTwitter} style={{ color: "white" }}/>
                </div>
    
                {/* avatar */}
                <div className="flex flex-row justify-center translate-x-0">
                    <img className="w-1/2 bg-black p-1 rounded-full" src={images.avt} alt="" />
                </div>
            </div>
    
            {/* bottom */}
            <div className="w-full flex flex-col pt-3 pb-8 px-5 space-y-4">
                {/* info */}
                <div className="text-white text-center">
                    {/* name */}
                    <p className="text-xl font-medium">Richard Nicole</p>
    
                    {/* position */}
                    <p className="text-sm font-light">Web Developer</p>
                </div>
    
                {/* rating */}
                <div className="flex flex-row flex-wrap justify-center space-x-1">
                    <FontAwesomeIcon className="hover:cursor-pointer" icon={faStarSolid} style={{ color: "#22D3EE" }} />
                    <FontAwesomeIcon className="hover:cursor-pointer" icon={faStarSolid} style={{ color: "#22D3EE" }} />
                    <FontAwesomeIcon className="hover:cursor-pointer" icon={faStarSolid} style={{ color: "#22D3EE" }} />
                    <FontAwesomeIcon className="hover:cursor-pointer" icon={faStarSolid} style={{ color: "#22D3EE" }} />
                    <FontAwesomeIcon className="hover:cursor-pointer" icon={faStarRegular} style={{ color: "#22D3EE" }} />
                </div>

                {/* button */}
                <div className="flex flex-row justify-around">
                    <button className="px-6 py-2 bg-cyan-400 rounded-full text-xs font-medium hover:shadow-cyan-400/50 hover:shadow-md active:shadow-cyan-800 active:shadow-inner transition-shadow">About Me</button>
                    <button className="px-6 py-2 bg-cyan-400 rounded-full text-xs font-medium hover:shadow-cyan-400/50 hover:shadow-md active:shadow-cyan-800 active:shadow-inner transition-shadow">Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default Card8
