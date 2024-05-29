import './style.css'
import images from '../../assets/images'

function Card19() {
    return (
        // card
        <div className="w-96 overflow-hidden shadow-neutral-500/50 shadow-lg">
            {/* top */}
            <div className="w-full relative bg-black">
                {/* bg */}
                <div className="w-full clip-path-top_card-19">
                    <img className="w-full" src={images.bgCard19} alt="" />
                </div>

                {/* avatar */}
                <div className="w-1/4 mx-8 absolute bottom-0 left-0 z-10">
                    <img className="w-full" src={images.avt} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="w-full flex flex-col justify-start bg-black px-8 py-5 space-y-8">
                {/* info */}
                <div className="text-white space-y-4">
                    {/* name - position */}
                    <div>
                        <p className="text-3xl">Wisteria Widget</p>
                        <p className="text-cyan-700">Photographer</p>
                    </div>
                
                    {/* about */}
                    <p className="leading-8 text-base font-medium">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda maiores, expedita eveniet debitis.
                    </p>
                </div>
    
                {/* button */}
                <div className="flex flex-row flex-wrap justify-between">
                    <button className="text-sm py-2 px-10 border-2 border-cyan-700 text-cyan-700 active:translate-y-1 transition-transform">FOLLOW</button>
                    <button className="text-sm py-2 px-10 border-2 text-white font-medium active:translate-y-1 transition-transform">MORE INFO</button>
                </div>
            </div>
        </div>
    )
}

export default Card19
