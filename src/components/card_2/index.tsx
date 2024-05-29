import './style.css'
import images from '../../assets/images'

function Card2() {
    return (
        // card
        <div className="w-64 rounded-3xl overflow-hidden shadow-neutral-500/50 shadow-lg">
            {/* top */}
            <div className="w-full bg-white">
                {/* bg-top-blue */}
                <div className="w-full bg-blue-600 flex justify-center py-5 rounded-bl-3xl">
                    {/* avatar */}
                    <div className="w-1/2 rounded-full bg-white padding-2px">
                        <img className="w-full rounded-full bg-blue-600 padding-2px" src={images.avt} alt="" />
                    </div>
                </div>
            </div>

            {/* bottom */}
            <div className="w-full bg-blue-600">
                {/* bg-bottom-white */}
                <div className="w-full flex flex-col items-center bg-white rounded-tr-3xl pt-2 pb-4 px-2 gap-y-3">
                    {/* info */}
                    <p className="text-2xl font-medium">David Dell</p>
                    <p className="text-center text-sm text-neutral-600">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto laboriosam corporis, modi adipisci consequuntur
                    </p>

                    {/* button */}
                    <div>
                        <button className="bg-blue-600 py-2 px-5 rounded-lg text-white text-sm transition-shadow hover:shadow-blue-500/50 hover:shadow-lg active:shadow-blue-400 active:shadow-inner">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2
