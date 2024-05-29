import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faShareNodes } from '@fortawesome/free-solid-svg-icons'

function Card34() {
    return (
        // card
        <div className="w-48rem flex items-center shadow-neutral-500/50 drop-shadow-lg">
            {/* left */}
            <div className="relative basis-1/2 h-5/6 bg-gradient-to-bl from-orange-400 from-30% via-orange-500 to-orange-700 px-3">
                {/* header */}
                <div className="flex justify-between items-center mt-3">
                    <img className="hover:cursor-pointer" src={icons.iconLogo34} alt="" />
                    <div className="flex justify-center items-center min-w-10 min-h-10 bg-white rounded-full">
                        <button>
                            <FontAwesomeIcon icon={faShareNodes} size="lg" color="#EA580C" />
                        </button>
                    </div>
                </div>

                {/* text watermark */}
                <div className="absolute top-1/5">
                    <p className="text-9xl text-neutral-50/10 font-extrabold tracking-wider">NIKE</p>
                </div>

                {/* img */}
                <div className="absolute w-120p rotate-shoes-card-34 -left-1/4 top-1/4 -translate-y-5">
                    <img src={images.shoes34} alt="" />
                </div>
            </div>

            {/* right */}
            <div className="basis-1/2 p-10 bg-white divide-y">
                {/* title - desc */}
                <div className="pb-3">
                    <div className="flex justify-between">
                        {/* hastag */}
                        <p className="text-2xl font-bold">Nike Zoom KD 12</p>
                        <p className="px-2 py-1 w-fit h-fit bg-orange-600 text-white text-xs font-bold rounded-md">NEW</p>
                    </div>

                    <p className="text-sm">Men's Runing Shoes</p>
                </div>

                {/* product info */}
                <div className="py-3">
                    <p className="text-base font-bold uppercase">Product Info</p>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facere provident illum quam, explicabo ea officiis expedita est consectetur molestiae quaerat nam quae, nobis sed consequatur non. Excepturi, veniam. Sequi.
                    </p>
                </div>

                {/* color */}
                <div className="flex flex-col py-3 space-y-1">
                    <p className="text-base font-medium">COLOR</p>

                    <div className="flex items-center space-x-5 ml-2">
                        {/* blue */}
                        <button className="w-5 h-5 rounded-full bg-blue-600"></button>

                        {/* red */}
                        <button className="w-5 h-5 rounded-full bg-red-600"></button>

                        {/* green */}
                        <button className="w-5 h-5 rounded-full bg-green-600"></button>

                        {/* orange */}
                        <button className="w-3 h-3 rounded-full bg-orange-600 outline outline-neutral-400/30 outline-2 outline-offset-4"></button>

                        {/* gray */}
                        <button className="w-5 h-5 rounded-full bg-gray-600"></button>
                    </div>
                </div>

                {/* sizes */}
                <div className="py-3 space-y-1">
                    <p className="text-base font-medium">SIZE</p>

                    {/* size */}
                    <div className="flex items-center space-x-4 ml-2">
                        <button className="min-w-7 h-7 p-1 bg-neutral-200 rounded-md flex items-center justify-center text-sm font-medium">7</button>
                        <button className="min-w-7 h-7 p-1 bg-neutral-200 rounded-md flex items-center justify-center text-sm font-medium">8</button>
                        <button className="min-w-7 h-7 p-1 bg-orange-600 rounded-md flex items-center justify-center text-sm text-white font-medium">9</button>
                        <button className="min-w-7 h-7 p-1 bg-neutral-200 rounded-md flex items-center justify-center text-sm font-medium">10</button>
                        <button className="min-w-7 h-7 p-1 bg-neutral-200 rounded-md flex items-center justify-center text-sm font-medium">11</button>
                    </div>
                </div>

                {/* add cart - price */}
                <div className="flex items-center justify-between pt-3">
                    {/* cart */}
                    <button className="flex items-center py-2 px-4 space-x-2 bg-orange-600 text-white font-medium transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:rounded-full active:shadow-orange-200 active:shadow-inner">
                        <FontAwesomeIcon icon={faCartShopping} size="1x" />
                        <p>ADD TO CART</p>
                    </button>


                    {/* price */}
                    <p className="text-2xl font-bold">$189.99</p>
                </div>
            </div>
        </div>
    )
}

export default Card34
