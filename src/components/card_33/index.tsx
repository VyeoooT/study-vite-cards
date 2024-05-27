import './style.css'
import images from '../../assets/images'
import icons from '../../assets/icons'

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
                <div className="flex space-x-3">
                    <img src={icons.iconLinkedin33} alt="" />
                    <img src={icons.iconGit33} alt="" />
                    <img src={icons.iconLetter33} alt="" />
                </div>

                {/* button */}
                <div className="">
                    <button className="py-2 px-6 bg-blue-600 text-white text-sm rounded-full">Message</button>
                </div>
            </div>
        </div>
    )
}

export default Carrd33
