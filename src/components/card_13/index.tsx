import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card13() {
    return (
        // card
        <div className="w-80 rounded-3xl pb-8 space-y-4 bg-white shadow-neutral-500/50 shadow-lg">
            {/* top */}
            <div className="w-full flex flex-col">
                {/* header */}
                <div className="flex flex-row justify-between mx-8 my-8">
                    {/* logo */}
                    <div>
                        <img src={icons.iconLogo} alt="" />
                    </div>
    
                    {/* cart */}
                    <div>
                        <img src={icons.iconCart} alt="" />
                    </div>
                </div>
    
                {/* image - product */}
                <div className="w-10/12 mx-auto">
                    <img className="w-full" src={images.shoes} alt="" />
                </div>
            </div>
    
            {/* bottom */}
            <div className="w-full flex flex-col px-6 space-y-5">
                {/* info */}
                <div className="flex flex-col items-start">
                    {/* name - product */}
                    <p className="text-xl font-medium">ADDIDAS GAZE ZX</p>
    
                    {/* description */}
                    <p className="text-sm text-gray-600 leading-5 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ipsa harum quia quidem.
                    </p>
    
                    {/* rate */}
                    <div className="flex flex-row flex-wrap -ml-1">
                        <img src={icons.iconStarFill13} alt="" />
                        <img src={icons.iconStarFill13} alt="" />
                        <img src={icons.iconStarFill13} alt="" />
                        <img src={icons.iconStarFill13} alt="" />
                        <img src={icons.iconStarNoFill13} alt="" />
                    </div>
                </div>
    
                {/* colours - price */}
                <div className="flex flex-row flex-wrap justify-between items-center space-y-5">
                    {/* colour */}
                   <div className="flex flex-row flex-wrap items-center space-x-2">
                        <p className="text-lg font-medium text-gray-500">Colour:</p>
    
                        {/* color - blue */}
                        <div className="border-2 rounded-full bg-blue-600 p-2px">
                            <div className="border-2 rounded-full bg-neutral-600">
                                {/* chosse color */}
                                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                            </div>
                        </div>
    
                        {/* color - pink */}
                        <div className="w-4 h-4 bg-pink-600 rounded-full"></div>
    
                        {/* color - yellow */}
                        <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                   </div>
    
                   {/* price */}
                   <div className="flex flex-col items-center">
                        <p className="text-3xl text-gray-600 font-semibold">$ 09.00</p>
                        <p className="text-xs text-gray-500 font-medium">Nine dollar only</p>
                   </div>
                </div>
    
                {/* button */}
                <div className="w-full text-center">
                    <button className="w-full bg-linear-gradient-btn-card-13 rounded-full text-base py-2 font-medium text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card13