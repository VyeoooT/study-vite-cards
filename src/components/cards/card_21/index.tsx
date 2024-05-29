import './style.css'
import images from '../../../assets/images'

function Card21() {
    return (
        // card
        <div className="w-42rem flex flex-row bg-gray-100 py-8 space-x-3 border-8 border-white rounded-xl shadow-neutral-500/50 shadow-xl font-roboto overflow-hidden">
            {/* left */}
            <div className="flex items-center justify-center basis-1/2">
                {/* img */}
                <img className="w-full" src={images.schoolBag21} alt="" />
            </div>

            {/* right */}
            <div className="flex flex-col justify-start basis-1/2 text-black pe-7 space-y-5">
                {/* name - product */}
                <div>
                    <p className="text-2xl uppercase font-medium">lebron max air</p>
                    <p className="text-sm uppercase font-medium">kid's backpack</p>
                </div>

                {/* price */}
                <div>
                    <p className="text-4xl font-bold">$65</p>
                </div>
    
                {/* about */}
                <div>
                    <p className="text-base text-justify">
                        The LeBron Max Air Kids' Backpack has cushioned, adjustable straps, a top-loading design and spacious main compartment for comfortable carrying and easy access to your gear.
                    </p>
                </div>
    
                {/* select color */}
                <div className="flex flow-row flex-wrap space-x-3">
                    <button className="w-8 h-8 bg-black rounded-sm"></button>
                    <button className="w-8 h-8 bg-red-600 rounded-sm"></button>
                </div>
    
                {/* button */}
                <div className="w-full">
                    <button className="w-full py-2 border-black border-2 rounded-md text-base font-medium uppercase hover:shadow-neutral-400 hover:shadow-md transition-shadow active:shadow-inner">add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card21
