import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

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
                        <img className="shadow-blue-400 shadow-sm rounded-full" src={icons.iconFb12} alt="" />
                        <img className="shadow-blue-400 shadow-sm rounded-full" src={icons.iconIg12} alt="" />
                        <img className="shadow-blue-400 shadow-sm rounded-full" src={icons.iconGit12} alt="" />
                        <img className="shadow-blue-400 shadow-sm rounded-full" src={icons.iconTwitter12} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card12
