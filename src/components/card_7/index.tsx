import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card7() {
    return (
        // card
        // <div className="w-64 max-2xl:w-80 max-xl:w-72 max-lg:w-64 max-md:w-52 max-sm:w-40 flex flex-col items-center rounded-md bg-white border-2 border-black overflow-hidden">
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
                    {/* <p className="text-3xl max-2xl:text-2xl max-xl:text-xl max-lg:text-xl max-md:text-base max-sm:text-md font-medium">Robert Downey Jr</p> */}
                    <p className="text-xl font-medium">Robert Downey Jr</p>

                    {/* position */}
                    <p className="text-sm">Web Developer </p>
                </div>

                {/* social */}
                <div className="flex flex-row flex-wrap justify-center space-x-4">
                    <img src={icons.iconFb7} alt="" />
                    <img src={icons.iconGit7} alt="" />
                    <img src={icons.iconLinkedin7} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card7
