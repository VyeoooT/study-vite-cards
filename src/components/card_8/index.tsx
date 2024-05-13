import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card8() {
    return (
        // card
        <div className="w-64 rounded-3xl border-4 border-cyan-400 bg-black overflow-hidden">
            {/* top */}
            <div className="w-full relative pt-10 pb-4">
                {/* effect */}
                <div className="effect bg-cyan-400"></div>
    
                {/* social */}
                <div className="absolute top-5 right-5 space-y-2">
                    <img src={icons.iconFb8} alt="" />
                    <img src={icons.iconGit8} alt="" />
                    <img src={icons.iconTwitter8} alt="" />
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
                    <img src={icons.iconStarFill8} alt="" />
                    <img src={icons.iconStarFill8} alt="" />
                    <img src={icons.iconStarFill8} alt="" />
                    <img src={icons.iconStarFill8} alt="" />
                    <img src={icons.iconStarNoFill8} alt="" />
                </div>

                {/* button */}
                <div className="flex flex-row justify-around">
                    <button className="px-6 py-2 bg-cyan-400 rounded-full text-xs font-medium">About Me</button>
                    <button className="px-6 py-2 bg-cyan-400 rounded-full text-xs font-medium">Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default Card8
