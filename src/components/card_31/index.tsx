import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card31() {
    return (
        // card
        <div className="w-64 flex flex-col bg-white rounded-2xl shadow-neutral-500/50 shadow-xl overflow-hidden">
            {/* top */}
            <div className="flex justify-center items-center">
                <img src={images.shoes31} alt="" />
            </div>

            {/* content - product */}
            <div className="flex flex-col items-center mx-5 space-y-5">
                {/* name */}
                <p className="text-3xl font-bold">Shoes</p>

                {/* description */}
                <p className="text-center text-sm text-black/50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                {/* price */}
                <p className="text-3xl font-bold">$100.00</p>

                {/* rate */}
                <div className="flex space-x-2">
                    <img src={icons.iconStarOrange31} alt="" />
                    <img src={icons.iconStarOrange31} alt="" />
                    <img src={icons.iconStarOrange31} alt="" />
                    <img src={icons.iconStarOrange31} alt="" />
                    <img src={icons.iconStarBlack31} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="py-5 text-center bg-sky-600 mt-5">
                <button className="text-white text-xl">Buy Now</button>
            </div>
        </div>
    )
}

export default Card31
