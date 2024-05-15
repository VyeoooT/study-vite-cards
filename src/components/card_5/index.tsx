import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card_5() {
    return (
        // card
        <div className="w-36rem flex flex-row justify-center space-x-14 pe-14 rounded-3xl shadow-neutral-500 shadow-2xl overflow-hidden">
            {/* left */}
            <div className="relative basis-2/5">
                {/* avatar */}
                <div className="absolute w-3/4 top-5 right-0 translate-x-1/2">
                    <img className="w-full bg-white p-2 rounded-full" src={images.avtCard5} alt="" />
                </div>

                {/* bg */}
                <img className="w-full aspect-9-16 object-cover" src={images.bgCard5} alt="" />
            </div>

            {/* right */}
            <div className="w-full basis-auto flex flex-col mt-20 bg-white space-y-8">
                {/* collect */}
                <div className="text-end">
                    <p className="text-base font-bold text-green-800">Ant Collector</p>
                </div>

                {/* info */}
                <div className="space-y-3">
                    {/* title */}
                    <p className="text-3xl font-bold">Morgan Sweeney</p>

                    {/* description */}
                    <p className="leading-5 text-base">
                        Morgan has collected ants since they were six years old and now has many dozen ants but none in their plants.
                    </p>
                </div>

                {/* icons */}
                <div className="w-full flex flex-row justify-around pb-6">
                    <img src={icons.iconHeart} alt="" />
                    <img src={icons.iconLetter} alt="" />
                    <img src={icons.iconUser} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card_5
