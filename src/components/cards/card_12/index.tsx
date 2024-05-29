import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function Card12() {
    return (
        // card
        <div className="w-80 rounded-2xl pb-8 bg-white shadow-neutral-600/50 shadow-lg">
            {/* top */}
            <div className="w-full">
                {/* avatar */}
                <div className="w-1/3 mx-auto -translate-y-1/2 p-1 bg-purple-500 shadow-orange-200 shadow-2xl rounded-full">
                    <img className="w-full" src={images.avt} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="w-full flex flex-col flex-wrap items-center text-center px-2 -mt-10 space-y-6 overflow-hidden">
                {/* info */}
                <div className="space-y-1">
                    {/* name */}
                    <p className="text-2xl font-medium">Coding League</p>
    
                    {/* position */}
                    <p className="text-base text-gray-500">Front-End Developer</p>
                </div>

                {/* social */}
                <div className="w-full flex flex-col flex-wrap px-10 space-y-5">
                    {/* social - text */}
                    <div className="flex flex-row flex-wrap justify-center space-x-4">
                        {/* follower */}
                        <div>
                            <p className="text-2xl font-medium">5k+</p>
                            <p className="text-sm text-gray-400">Follower</p>
                        </div>

                        {/* following */}
                        <div>
                            <p className="text-2xl font-medium">2000</p>
                            <p className="text-sm text-gray-400">Following</p>
                        </div>

                        {/* Works */}
                        <div>
                            <p className="text-2xl font-medium">300</p>
                            <p className="text-sm text-gray-400">Works</p>
                        </div>
                    </div>

                    {/* social - icon */}
                    <div className="flex flex-row flex-wrap justify-center space-x-4">
                        <button>
                            <FontAwesomeIcon icon={faFacebook} size='lg' color="#2266AE" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faInstagram} size='lg' color="#D7326C" mask={faCircle} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faTwitter} size='lg' color="#1890DF" mask={faCircle} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faGithub} size='lg' color="#404142" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card12
