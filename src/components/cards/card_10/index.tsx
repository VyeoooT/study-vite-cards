import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Card10() {
    return (
        // card
        <div className="w-64 rounded-3xl bg-white shadow-card-10">
            {/* top */}
            <div className="w-full">
                {/* avatar */}
                <div className="w-1/2 mx-auto py-4">
                    <img className="w-full" src={images.avt} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="w-full flex flex-col items-center py-6 px-3 space-y-5">
                {/* info */}
                <div className="text-center space-y-3">
                    {/* name */}
                    <p className="text-3xl font-medium">Nick Watson</p>

                    {/* potision */}
                    <p className="text-lg text-gray-500">CEO & Founder</p>

                    {/* school */}
                    <p className="text-base">Oxford university</p>
                </div>

                {/* social */}
                <div className="flex flex-row flex-wrap justify-center space-x-3">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDribbble} size="lg" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                </div>

                {/* button */}
                <div className="w-full text-center px-5">
                    <button className="w-full py-1 bg-black rounded-full text-white font-medium text-base border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors active:shadow-green-900 active:shadow-inner">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Card10
