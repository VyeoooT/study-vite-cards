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
                        <button className="w-4 h-4 bg-orange-600 rounded-full outline outline-offset-1 outline-1"></button>

                        {/* blue color */}
                        <button className="w-4 h-4 bg-emerald-500 rounded-full"></button>

                        {/* black color */}
                        <button className="w-4 h-4 bg-black rounded-full"></button>

                        {/* red color */}
                        <button className="w-4 h-4 bg-red-500 rounded-full"></button>
                    </div>

                    {/* name */}
                    <div className="text-xl font-light text-center">
                        <p>Velocity Nitro Men's Running Shoes</p>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-5">
                    {/* price */}
                    <div className="flex justify-center items-center space-x-2">
                        <p className="text-xl font-light">Price: </p><p className="text-2xl font-medium text-orange-600">$50</p>
                    </div>

                    {/* button */}
                    <div>
                        <button className="py-1 px-10 bg-orange-600 rounded-xl text-white border-2 border-transparent hover:border-orange-600 hover:bg-white hover:text-orange-600 transition-all active:translate-y-1">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card32
