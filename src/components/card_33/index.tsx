import './style.css'
import images from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Carrd33() {
    return (
        // card
        <div className="w-80 bg-white space-y-10 rounded-3xl shadow-neutral-500/50 shadow-lg overflow-hidden">
            {/* top */}
            <div className="flex justify-center bg-blue-600">
                <img className="w-1/3 outline outline-blue-600 outline-2 rounded-full translate-y-1/4" src={images.avt} alt="" />
            </div>

            {/* bottom */}
            <div className="flex flex-col justify-center items-center pb-5 space-y-5">
                {/* position */}
                <div className="text-center space-y-1">
                    <p className="text-xl font-medium tracking-wide text-neutral-800">Frontend-developer</p>
                    <p className="text-sm font-light">Tech Job-Seeker</p>
                </div>

                {/* social */}
                <div className="flex space-x-5">
                    <button>
                        <FontAwesomeIcon icon={faLinkedin} color="#0076B2" size="2x" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faEnvelope} color="#a6645d" size="2x" />
                    </button>
                </div>

                {/* button */}
                <div className="">
                    <button className="py-2 px-6 bg-blue-600 text-white text-sm rounded-full hover:px-12 transition-all active:shadow-blue-800 active:shadow-inner">Message</button>
                </div>
            </div>
        </div>
    )
}

export default Carrd33
