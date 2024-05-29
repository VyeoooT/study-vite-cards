import './style.css'
import images from '../../../assets/images'

function Card28() {
    return (
        // card
        <div className="w-42rem flex bg-white rounded-md shadow-neutral-500/50 shadow-lg overflow-hidden">
            {/* left */}
            <div className="basis-1/2">
                <img className="w-full h-full object-cover" src={images.imgCard28} alt="" />
            </div>

            {/* right */}
            <div className="flex flex-col justify-center basis-1/2 mx-10 space-y-8">
                {/* title */}
                <div>
                    <p className="text-3xl font-bold text-neutral-700">Harvest Vase</p>
                    <p className="text-sm font-light text-neutral-500 tracking-widest-03-em">BY STUDIO AND FRIENDS</p>
                </div>

                {/* content */}
                <div>
                    <p className="text-neutral-500">
                        Harvest Vases are a reinterpretation of peeled fruits and vegetables as functional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth.
                    </p>
                </div>

                {/* price - button */}
                <div className="flex justify-between items-center">
                    {/* price */}
                    <p className="text-3xl font-medium">78$</p>

                    {/* button */}
                    <button className="py-3 px-14 bg-emerald-500/50 text-white rounded-full border-2 border-transparent hover:bg-white hover:text-emerald-500 hover:border-emerald-600 transition-colors active:shadow-neutral-500/50 active:shadow-inner">BUY NOW</button>
                </div>
            </div>
        </div>
    )
}

 export default Card28
