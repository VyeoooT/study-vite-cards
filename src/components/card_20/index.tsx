import './style.css'
import images from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function Card20() {
    return (
        // card
        <div className="w-48rem flex flex-col bg-white shadow-neutral-500/50 shadow-xl font-raleway divide-y">
            {/* header */}
            <div className="flex flex-row justify-between items-center mx-6 py-5">
                {/* back to */}
                <div>
                    <button className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faAngleLeft} color="#6B7280" />
                        <p className="text-sm text-gray-500">BACK TO ALL PLANTS</p>
                    </button>
                </div>

                {/* wishlist */}
                <div>
                    <button>
                        <FontAwesomeIcon icon={faHeart} color="#6B7280" />
                    </button>
                </div>
            </div>

            {/* container - content */}
            <div className="flex flex-row space-x-5 divide-x">
                {/* left */}
                <div className="flex justify-center items-center basis-2/5">
                    {/* img */}
                    <div className="w-full mx-10">
                        <img className="w-full" src={images.plant20} alt="" />
                    </div>
                </div>

                {/* right */}
                <div className="basis-3/5 pl-7 pe-20 py-6 text-gray-500">
                    {/* name - product */}
                    <div className="w-full text-left">
                        <p className="uppercase text-2xl">classNameic peace lily</p>
                        <p className="uppercase text-base">popular house plant</p>
                    </div>

                    {/* price */}
                    <div className="py-5 text-left">
                        <p className="text-4xl font-light">$ 18</p>
                    </div>

                    {/* about */}
                    <div>
                        <p className="text-justify text-base font-light">
                            classNameic Peace Lily is a spathiphyllum floor plants arranged in a bamboo planter with a blue & red ribbom and butterfly pick
                        </p>
                    </div>

                    {/* button */}
                    <div className="flex flex-row flex-wrap justify-between py-5">
                        <button className="uppercase border-2 px-8 py-2 font-medium hover:shadow-neutral-400/50 hover:shadow-md transition-shadow active:shadow-inner">add to cart</button>
                        <button className="uppercase border-2 px-8 py-2 font-medium hover:shadow-neutral-400/50 hover:shadow-md transition-shadow active:shadow-inner">wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card20
