import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'

function Card37() {
    return (
        // card
        <div className="w-80 bg-white pt-4 pb-10 text-neutral-700 rounded-md shadow-neutral-500/50 shadow-lg">
            {/* more button */}
            <div className="flex justify-end pr-2">
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            {/* contents */}
            <div className="flex flex-col px-8 space-y-7">
                {/* avatar - name - position */}
                <div className="flex flex-col items-center space-y-5">
                    <div className="w-1/3 relative">
                        <img src={images.avt} alt="" />

                        {/* tick-green */}
                        <div className="absolute bottom-1 right-1 z-10">
                            <FontAwesomeIcon className="shadow-tick-card-37 rounded-full" icon={faCheckCircle} color="#4ECB71" />
                        </div>
                    </div>

                    {/* name - position */}
                    <div className="flex flex-col items-center">
                        <p className="text-2xl">Sathish Kumar</p>
                        <p className="text-sm font-light">UI/UX Mobile Designer</p>
                    </div>
                </div>

                {/* Projects - Following - Followers */}
                <div className="flex justify-between">
                    {/* Projects */}
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-sm font-light">Projects</p>
                        <p className="text-xl font-medium leading-3">17</p>
                    </div>

                    {/* Following */}
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-sm font-light">Following</p>
                        <p className="text-xl font-medium leading-3">159</p>
                    </div>

                    {/* Followers */}
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-sm font-light">Followers</p>
                        <p className="text-xl font-medium leading-3">205</p>
                    </div>
                </div>

                {/* desc - social */}
                <div className="flex flex-col items-center space-y-5">
                    {/* desc */}
                    <p className="text-xs text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, porro dolor ex unde cum itaque laborum veritatis!
                    </p>

                    {/* social */}
                    <div className="flex items-center space-x-4">
                        <button className="w-6 h-6 bg-cyan-500 rounded-full">
                            <FontAwesomeIcon icon={faTwitter} color="white" size='xs' />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faFacebook} color="#3b5b96" size="xl" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faGooglePlus} color="#ff775e" size="xl" />
                        </button>
                        <button className="w-6 h-6 bg-blue-700 rounded-full">
                            <FontAwesomeIcon icon={faBehance} color="white" size='xs' />
                        </button>
                    </div>
                </div>

                {/* button */}
                <div className="flex justify-center">
                    <button className="px-14 py-2 bg-transparent border border-neutral-400 rounded-full font-light hover:border-transparent hover:bg-cyan-500 hover:text-white hover:shadow-neutral-300 hover:shadow-lg active:shadow-cyan-800 active:shadow-inner transition-all duration-300 ease-in-out">View Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Card37
