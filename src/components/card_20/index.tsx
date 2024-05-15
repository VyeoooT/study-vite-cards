import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card20() {
    return (
        // card
        <div className="w-48rem bg-white shadow-neutral-500/50 shadow-xl font-raleway">
            {/* header */}
            <div className="flex flex-row justify-between items-center mx-6 py-6">
                {/* back to */}
                <div className="flex flex-row">
                    <img src={icons.iconBack20} alt="" />
                    <p className="ml-2 text-sm text-gray-500">BACK TO ALL PLANTS</p>
                </div>

                {/* wishlist */}
                <div>
                    <img src={icons.iconHeart} alt="" />
                </div>
            </div>

            {/* line */}
            <div className="w-full h-2px-card-20 bg-gray-200"></div>

            {/* container - content */}
            <div className="w-full flex flex-row space-x-5">
                {/* left */}
                <div className="flex justify-center items-center basis-2/5">
                    {/* img */}
                    <div className="w-full mx-10">
                        <img className="w-full" src={images.plant20} alt="" />
                    </div>
                </div>

                {/* line */}
                <div className="w-2px-card-20 bg-gray-200"></div>

                {/* right */}
                <div className="basis-3/5 pe-14 py-6 text-gray-500">
                    {/* name - product */}
                    <div className="w-full text-left">
                        <p className="uppercase text-3xl">classNameic peace lily</p>
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
                        <button className="uppercase border-2 px-8 py-2 font-medium">add to cart</button>
                        <button className="uppercase border-2 px-8 py-2 font-medium">wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card20
