import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

function Card17() {
    return (
        // card
        <div className="w-38rem flex flex-row justify-between bg-white py-8 rounded-md shadow-neutral-500/50 shadow-lg">
            {/* left */}
            <div className="basis-2/5 flex flex-col justify-center">
                {/* card - left */}
                <div className="w-full -translate-x-1/4 rounded-2xl shadow-black/50 shadow-2xl">
                    {/* top */}
                    <div className="w-full bg-lime-500 px-5 rounded-tl-xl rounded-tr-xl">
                        {/* header */}
                        <div className="flex flex-row justify-between py-5">
                            <button>
                                <FontAwesomeIcon icon={faHeart} color="white" size="lg" />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faShareNodes} color="white" size="lg" />
                            </button>
                        </div>

                        {/* image - product */}
                        <div className="w-130p -translate-x-16">
                            <img src={images.greenAppleMain17} alt="" />
                        </div>
                    </div>

                    {/* bottom */}
                    <div className="p-5 bg-white rounded-bl-xl rounded-br-xl">
                        <div className="flex flex-row justify-around">
                            <img className="w-10 h-10 p-1 border-2 hover:cursor-pointer" src={images.greenApple217} alt="" />
                            <img className="w-10 h-10 p-1 border-2 hover:cursor-pointer" src={images.halfApple17} alt="" />
                            <img className="w-10 h-10 p-1 border-2 hover:cursor-pointer" src={images.greenAppleflipped17} alt="" />
                            <img className="w-10 h-10 p-1 border-2 hover:cursor-pointer" src={images.appleTop17} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className="basis-3/5 flex flex-col justify-start pe-10 space-y-6">
                {/* top */}
                <div className="w-full flex flex-col space-y-6">
                    {/* name - product */}
                    <div>
                        <p className="text-2xl font-bold text-neutral-700">Delicious Apples</p>
                        <p className="text-sm text-gray-400">COD: 4599</p>
                    </div>

                    {/* price */}
                    <div className="flex flex-row items-end space-x-4">
                        <p className="text-red-500 text-xl">R$</p>
                        <p className="text-red-500 text-4xl">7.93</p>
                    </div>

                    {/* select a color */}
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm text-gray-400">SELECT A COLOR</p>

                        {/* img */}
                        <div className="flex flex-row space-x-2">
                            <img className="w-9 h-9 p-1 border-2 rounded-md hover:cursor-pointer" src={images.greenApple217} alt="" />
                            <img className="w-9 h-9 p-1 hover:cursor-pointer" src={images.orangeApple17} alt="" />
                            <img className="w-9 h-9 p-1 hover:cursor-pointer" src={images.redApple17} alt="" />
                            <img className="w-9 h-9 p-1 hover:cursor-pointer" src={images.yellowApple17} alt="" />
                        </div>
                    </div>
                </div>

                {/* bottom */}
                <div className="space-y-8">
                    {/* benefits */}
                    <div className="text-sm space-x-5 space-y-2">
                        <p className="text-gray-400 uppercase">benefits</p>

                        <ul>
                            <li className="text-gray-600 list-disc">Apples are nutricious </li>
                            <li className="text-gray-600 list-disc">Apples may be good for weight loss</li>
                            <li className="text-gray-600 list-disc">Apples may be good for bone health</li>
                            <li className="text-gray-600 list-disc">They're linked to a lowest risk of diabetes</li>
                        </ul>
                    </div>

                    {/* button */}
                    <div>
                        <button className="py-3 p-9 bg-red-500 text-sm text-white font-semibold rounded-md shadow-gray-500/50 shadow-xl hover:shadow-none transition-shadow active:shadow-red-900 active:shadow-inner">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card17
