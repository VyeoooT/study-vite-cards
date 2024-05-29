import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe, faMobileButton } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Card14() {
    return (
        // card
        <div className="w-80 rounded-3xl bg-white shadow-black/10 shadow-lg">
            {/* top */}
            <div className="w-full flex flex-col items-center">
                {/* container */}
                <div className="w-11/12 bg-emerald-400 flex flex-col items-center rounded-2xl -translate-y-10 py-6 shadow-black/30 shadow-lg">
                    {/* avatar */}
                    <div className="w-1/2">
                        <img className="w-full" src={images.avt} alt="" color="#16A085" />
                    </div>
    
                    {/* info */}
                    <div className="text-center mt-3 text-white">
                        {/* name */}
                        <p className="text-3xl tracking-wider font-bold mb-2">John Doe</p>
    
                        {/* position */}
                        <p className="text-sm">Mobile App Developer</p>
                    </div>
                </div>
            </div>
    
            {/* center - contact */}
            <div className="flex flex-col items-start mx-5 my-3 overflow-hidden space-y-3">
                {/* phone */}
                <div className="w-full flex flex-row flex-wrap items-center space-x-2">
                    {/* icon */}
                    <div className="basis-10 flex justify-center">
                        <FontAwesomeIcon className="hover:cursor-pointer" icon={faMobileButton} color="#16A085" size="xl" />
                    </div>
    
                    {/* text */}
                    <div className="text-emerald-500">
                        <p className="text-base font-bold">5-555-666-777</p>
                        <p className="text-xs">Mobile number</p>
                    </div>
                </div>
    
                {/* mail */}
                <div className="w-full flex flex-row flex-wrap items-center space-x-2">
                    {/* icon */}
                    <div className="basis-10 flex justify-center">
                        <FontAwesomeIcon className="hover:cursor-pointer" icon={faEnvelope} color="#16A085" size="xl" />
                    </div>
    
                    {/* text */}
                    <div className="text-emerald-500">
                        <p className="text-base font-bold">Example@gmail.com</p>
                        <p className="text-xs">Email address</p>
                    </div>
                </div>
    
                {/* website */}
                <div className="w-full flex flex-row flex-wrap items-center space-x-2">
                    {/* icon */}
                    <div className="basis-10 flex justify-center">
                        <FontAwesomeIcon className="hover:cursor-pointer" icon={faGlobe} color="#16A085" size="xl" />
                    </div>
    
                    {/* text */}
                    <div className="text-emerald-500">
                        <p className="text-base font-bold">www.example.com</p>
                        <p className="text-xs">Website address</p>
                    </div>
                </div>
            </div>
    
            {/* bottom */}
            <div className="w-full flex flex-row justify-center">
                {/* social */}
                <div className="w-11/12 flex flex-row flex-wrap justify-evenly bg-emerald-400 py-5 rounded-2xl translate-y-1/2 shadow-black/10 shadow-lg">
                    <button>
                        <FontAwesomeIcon icon={faFacebook} size="xl" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card14
