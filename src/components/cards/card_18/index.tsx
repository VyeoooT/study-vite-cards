import './styles.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function Card18() {
    return (
        // card
        <div className="w-96 bg-white relative shadow-neutral-500/50 shadow-xl">
            {/* arrow - left */}
            <button className="absolute w-10 h-10 p-2 flex justify-center items-center bg-red-600 rounded-full top-1/2 left-0 -translate-x-1/2 shadow-arrow-card-18 hover:shadow-none active:-translate-x-8 transition-transform">
                <FontAwesomeIcon icon={faArrowLeft} color="white" />
            </button>

            {/* arrow - right */}
            <button className="absolute w-10 h-10 p-2 flex justify-center items-center bg-red-600 rounded-full top-1/2 right-0 translate-x-1/2 shadow-arrow-card-18 hover:shadow-none active:translate-x-8 transition-transform">
                <FontAwesomeIcon icon={faArrowRight} color="white" />
            </button>

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
                        <p className="text-sm leading-6 text-gray-600 font-medium">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor voluptatum quod.
                        </p>
                    </div>
                </div>

                {/* bottom */}
                <div className="w-full flex flex-col px-5">
                    {/* quantity - total price - delivery */}
                    <div className="flex flex-wrap items-center justify-between">
                        {/* quantity */}
                        <div className="flex flex-col items-center space-y-8">
                            {/* text */}
                            <p className="text-base text-gray-600 font-medium">Quantity</p>

                            {/* select quantity */}
                            <div className="flex justify-center items-center">
                                <button>
                                    <FontAwesomeIcon icon={faCircleMinus} color="#929292" />
                                </button>

                                <input className="w-8 px-1 text-center text-gray-600" type="text" defaultValue="1"/>
                                
                                <button>
                                    <FontAwesomeIcon icon={faCirclePlus} color="#929292" />
                                </button>
                            </div>
                        </div>

                        {/* total price */}
                        <div className="flex flex-col items-center space-y-8">
                            {/* text */}
                            <p className="text-base text-gray-600 font-medium">Total Price</p>

                            {/* price */}
                            <div className="flex justify-center">
                                <img src="/img/icon-dollar.png" alt="" />
                                <p className="text-xl text-gray-700 font-medium">7</p>
                            </div>
                        </div>

                        {/* delivery */}
                        <div className="flex flex-col items-center space-y-8">
                            {/* text */}
                            <p className="text-base text-gray-600 font-medium">Delivery</p>

                            <div className="flex">
                                <img className="mr-2" src="/img/icon-ship.png" alt="" />
                                <p className="text-base text-gray-600 font-medium">In 60 mins</p>
                            </div>
                        </div>
                    </div>

                    {/* button */}
                    <div className="w-full text-center translate-y-1/2">
                        <button className="px-14 py-2 bg-red-600 uppercase text-sm text-white font-semibold rounded-full shadow-red-400/50 shadow-xl hover:-translate-y-1 hover:shadow-none transition-transform active:shadow-red-900 active:shadow-inner">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card18
