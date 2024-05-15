import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

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
                        <img className="w-full" src={images.avt} alt="" />
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
            <div className="w-full mx-5 my-3 overflow-hidden space-y-3">
                {/* phone */}
                <div className="flex flex-row flex-wrap items-center space-x-2">
                    {/* icon */}
                    <div>
                        <img className="w-3/4" src={icons.iconPhone14} alt="" />
                    </div>
    
                    {/* text */}
                    <div className="text-emerald-500">
                        <p className="text-base font-bold">5-555-666-777</p>
                        <p className="text-xs">Mobile number</p>
                    </div>
                </div>
    
                {/* mail */}
                <div className="flex flex-row flex-wrap items-center space-x-2">
                    {/* icon */}
                    <div>
                        <img className="w-3/4" src={icons.iconLetter14} alt="" />
                    </div>
    
                    {/* text */}
                    <div className="text-emerald-500">
                        <p className="text-base font-bold">Example@gmail.com</p>
                        <p className="text-xs">Email address</p>
                    </div>
                </div>
    
                {/* website */}
                <div className="flex flex-row flex-wrap items-center space-x-2">
                    {/* icon */}
                    <div>
                        <img className="w-3/4" src={icons.iconWeb14} alt="" />
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
                    <img className="w-1/12" src={icons.iconFb14} alt="" />
                    <img className="w-1/12" src={icons.iconIg14} alt="" />
                    <img className="w-1/12" src={icons.iconLinkedin14} alt="" />
                    <img className="w-1/12" src={icons.iconTwitter14} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card14
