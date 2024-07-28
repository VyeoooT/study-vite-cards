import './style.css'
// import icons from '../../assets/icons'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Card7() {
    return (
        // card
        <div className="w-64 flex flex-col items-center rounded-md bg-white border-2 border-black overflow-hidden">
            {/* top */}
            <div className="w-full">
                {/* avatar */}
                <img className="w-full object-cover" src={images.avtCard7} alt="" />
            </div>

            {/* bottom */}
            <div className="w-full flex flex-col items-center justify-center py-6 px-2 space-y-4">
                {/* info */}
                <div className="w-full text-center text-slate-800">
                    {/* name */}
                    <p className="text-xl font-medium">Robert Downey Jr</p>

                    {/* position */}
                    <p className="text-sm">Web Developer </p>
                </div>

                {/* social */}
                <div className="flex flex-row flex-wrap justify-center space-x-4">
                    <a href="https://facebook.com" target="_blank" className="flex justify-center items-center min-w-8 min-h-8 px-1 py-1 outline outline-2 outline-black rounded-full opacity-80 hover:cursor-pointer hover:opacity-100 transition-opacity">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="flex justify-center items-center min-w-8 min-h-8 px-1 py-1 outline outline-2 outline-black rounded-full opacity-80 hover:cursor-pointer hover:opacity-100 transition-opacity">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://x.com" target="_blank" className="flex justify-center items-center min-w-8 min-h-8 px-1 py-1 outline outline-2 outline-black rounded-full opacity-80 hover:cursor-pointer hover:opacity-100 transition-opacity">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card7
