import './styles.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card18() {
    return (
        // card
        <div className="w-96 bg-white relative shadow-neutral-500/50 shadow-xl">
            {/* arrow - left */}
            <div className="absolute p-2 bg-red-600 rounded-full top-1/2 left-0 -translate-x-1/2 shadow-arrow-card-18">
                <img src={icons.iconArrowLeft18} alt="" />
            </div>

            {/* arrow - right */}
            <div className="absolute p-2 bg-red-600 rounded-full top-1/2 right-0 translate-x-1/2 shadow-arrow-card-18">
                <img src={icons.iconArrowRight18} alt="" />
            </div>

            {/* contents */}
            <div className="space-y-10">
                {/* top */}
                <div className="w-full flex flex-col">
                    {/* img - product */}
                    <div className="w-full -translate-y-1/3">
                        <img src={images.strawberry18} alt="" />
                    </div>

                    {/* info */}
                    <div className="-mt-40 mx-8 text-center space-y-5">
                        {/* name */}
                        <p className="text-4xl tracking-widest text-red-600 font-medium">Strawberries</p>

                        {/* description */}
                        <p className="text-sm leading-8 text-gray-600 font-medium">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor voluptatum quod.
                        </p>
                    </div>
                </div>

                {/* bottom */}
                <div className="w-full flex flex-col px-5">
                    {/* quantity - total price - delivery */}
                    <div className="flex flex-row flex-wrap justify-between">
                        {/* quantity */}
                        <div className="text-center space-y-8">
                            {/* text */}
                            <p className="text-base text-gray-600 font-medium">Quantity</p>

                            {/* select quantity */}
                            <div className="flex flex-row justify-center items-center">
                                <img className="w-1/5 h-1/5 bg-gray-400 rounded-full" src={icons.iconminus18} alt="" />
        
                                <input className="w-5 mx-2 text-center text-gray-600" type="text" value="1"/>
        
                                <img className="w-1/5 h-1/5 bg-gray-400 rounded-full" src={icons.iconPlus18} alt="" />
                            </div>
                        </div>

                        {/* total price */}
                        <div className="text-center space-y-8">
                            {/* text */}
                            <p className="text-base text-gray-600 font-medium">Total Price</p>

                            {/* price */}
                            <div className="flex flex-row justify-center">
                                <img src="/img/icon-dollar.png" alt="" />

                                <p className="text-2xl text-gray-700 font-medium">7</p>
                            </div>
                        </div>

                        {/* delivery */}
                        <div className="text-center space-y-8">
                            {/* text */}
                            <p className="text-base text-gray-600 font-medium">Delivery</p>

                            <div className="flex flex-row">
                                <img className="mr-2" src="/img/icon-ship.png" alt="" />

                                <p className="text-base text-gray-600 font-medium">In 60 mins</p>
                            </div>
                        </div>
                    </div>

                    {/* button */}
                    <div className="w-full text-center translate-y-1/2">
                        <button className="px-14 py-2 bg-red-600 uppercase text-sm text-white font-semibold rounded-full shadow-red-400/50 shadow-xl">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card18
