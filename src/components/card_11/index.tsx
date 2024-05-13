import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card11() {
    return (
        // card
        <div className="w-72 rounded-md pt-7 pb-5 space-y-4 bg-white shadow-neutral-500/50 shadow-xl overflow-hidden">
            {/* top */}
            <div className="w-full">
                {/* avatar */}
                <div className="w-1/2 mx-auto bg-purple-600 padding-2px rounded-full">
                    <img className="w-full bg-white padding-2px rounded-full" src={images.avt} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="flex flex-col items-center px-5 space-y-3">
                {/* info */}
                <div className="space-y-1">
                    {/* name */}
                    <p className="text-xl text-purple-600 font-medium text-center">David Chrish</p>

                    {/* rate */}
                    <div className="flex flex-row flex-wrap justify-center space-x-1">
                        <img src={icons.iconStarFill11} alt="" />
                        <img src={icons.iconStarFill11} alt="" />
                        <img src={icons.iconStarFill11} alt="" />
                        <img src={icons.iconStarNoFill11} alt="" />
                        <img src={icons.iconStarNoFill11} alt="" />
                    </div>
                </div>

                {/* description */}
                <div className="text-base text-justify font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo adipisci ea recusandae animi atque alias deleniti
                </div>

                {/* button */}
                <div className="w-full flex flex-row flex-wrap justify-around">
                    <button className="px-5 py-2 rounded-md border-2 border-purple-600 text-purple-600">Read More</button>
                    <button className="px-5 py-2 rounded-md bg-purple-600 text-white">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Card11
