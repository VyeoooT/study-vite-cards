import './style.css'
import images from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Card29() {
    return (
        // card
        <div className="w-44rem flex flex-row bg-white space-x-10 p-10 rounded-md overflow-hidden shadow-neutral-500/50 shadow-lg">
            {/* left */}
            <div className="basis-3/5 flex flex-col justify-around">
                {/* top */}
                <div>
                    <img className="w-full aspect-video object-cover" src={images.shoes29} alt="" />
                </div>

                {/* bottom */}
                <div className="flex flex-col space-y-2">
                    <p className="text-sm text-pink-900/60">CHOOSE SIZE</p>

                    <div className="flex flex-row justify-between text-pink-900/60">
                        <button className="min-w-10 h-10 p-2 border-2 flex items-center justify-center">5</button>
                        <button className="min-w-10 h-10 p-2 border-2 flex items-center justify-center">6</button>
                        <button className="min-w-10 h-10 p-2 border-2 flex items-center justify-center bg-pink-900/60 text-white">7</button>
                        <button className="min-w-10 h-10 p-2 border-2 flex items-center justify-center">8</button>
                        <button className="min-w-10 h-10 p-2 border-2 flex items-center justify-center">9</button>
                        <button className="min-w-10 h-10 p-2 border-2 flex items-center justify-center">10</button>
                        <button className="min-w-10 h-10 p-2 border-2 flex items-center justify-center">11</button>
                        <button className="min-w-10 h-10 p-2 border-2 flex items-center justify-center">12</button>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className="basis-2/5 flex flex-col justify-between space-y-5">
                {/* top */}
                <div className="flex flex-col items-start space-y-3">
                    {/* collect - name product */}
                    <div className="space-y-1">
                        <p className="text-pink-900/60 text-xs tracking-wide">WOMEN'S RUNNING SHOE</p>
                        <p className="text-neutral-800 text-3xl">NIKE EPIC REACT FLYKNIT</p>
                    </div>

                    {/* price */}
                    <div>
                        <p className="text-pink-900/60 text-3xl font-medium">$150</p>
                    </div>
                </div>

                {/* bottom */}
                <div className="text-sm text-justify font-light space-y-5">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates assumenda, inventore obcaecati facere eos temporibus, enim sequi deleniti quasi nesciunt? Minus velit nostrum fugiat dolore rerum possimus, officia porro.
                    </p>

                    <div className="flex flex-row divide-x">
                        <button className="basis-4/5 py-2 bg-pink-900/60 rounded-sm text-white font-medium hover:bg-pink-400 transition-colors active:shadow-neutral-500/50 active:shadow-inner">ADD TO CART</button>

                        <button className="basis-1/5 py-2 bg-pink-900/40 rounded-sm flex justify-center hover:bg-pink-300 transition-colors active:shadow-neutral-500/50 active:shadow-inner group">
                            <FontAwesomeIcon className="group-hover:text-pink-400" icon={faHeart} size="2xl" color="white" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card29
