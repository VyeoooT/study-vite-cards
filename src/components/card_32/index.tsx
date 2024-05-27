import './style.css'
import images from '../../assets/images'

function Card32() {
    return (
        // card
        <div className="w-80 bg-white flex flex-col items-center py-4 rounded-2xl overflow-hidden space-y-5 shadow-neutral-500/50 shadow-lg">
            {/* img - product */}
            <div>
                <img src={images.shoes32} alt="" />
            </div>

            <div className="mx-2 space-y-5">
                <div className="flex flex-col items-center space-y-4">
                    {/* select color */}
                    <div className="flex space-x-5">
                        {/* orange color */}
                        <div className="w-3 h-3 bg-orange-600 rounded-full outline outline-offset-1 outline-1"></div>

                        {/* blue color */}
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>

                        {/* black color */}
                        <div className="w-3 h-3 bg-black rounded-full"></div>

                        {/* red color */}
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>

                    {/* name */}
                    <div className="text-xl font-light text-center">
                        <p>Velocity Nitro Men's Running Shoes</p>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    {/* price */}
                    <div className="flex text-xl space-x-2">
                        <p className="font-light">Price: </p><p className="text-orange-600">$50</p>
                    </div>

                    {/* button */}
                    <div>
                        <button className="py-2 px-10 bg-orange-600 rounded-xl text-white">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card32
