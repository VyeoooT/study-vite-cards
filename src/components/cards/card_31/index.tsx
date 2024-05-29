import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

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
                    <FontAwesomeIcon icon={faStarSolid} color="#FAA04D" size="xl" />
                    <FontAwesomeIcon icon={faStarSolid} color="#FAA04D" size="xl" />
                    <FontAwesomeIcon icon={faStarSolid} color="#FAA04D" size="xl" />
                    <FontAwesomeIcon icon={faStarSolid} color="#FAA04D" size="xl" />
                    <FontAwesomeIcon icon={faStarRegular} color="#FAA04D" size="xl" />
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
