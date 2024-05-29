import './style.css'
import images from '../../../assets/images'

function Card27() {
    return (
        // card
        <div className="w-32rem bg-red-400 flex flex-row space-x-5 rounded-md overflow-hidden shadow-neutral-500/50 shadow-lg">
            {/* left */}
            <div className="flex flex-col basis-1/3 justify-evenly items-center">
                {/* level */}
                <div>
                    <p className="py-1 px-2 bg-neutral-500/40 rounded-full text-xs text-white">LEVEL 13</p>
                </div>

                {/* avatar */}
                <div className="w-1/2">
                    <img className="w-full border-2 border-red-500/50 rounded-full" src={images.avt} alt="" />
                </div>

                {/* points */}
                <div>
                    <p className="py-1 px-2 bg-neutral-500/40 rounded-full text-xs text-white">5,312 POINTS</p>
                </div>
            </div>

            {/* right */}
            <div className="flex flex-col basis-2/3 space-y-14 bg-white py-5 px-5">
                {/* top */}
                <div className="flex flex-col items-center space-y-8">
                    {/* name */}
                    <p className="text-3xl font-medium">Jane Doe</p>

                    {/* description */}
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus nemo officiis quo deleniti rem totam porro quasi assumenda aperiam
                    </p>
                </div>

                {/* bottom */}
                <div className="flex flex-row justify-end text-sm font-light">
                    <p>
                        Mouses over the card for more info
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card27
