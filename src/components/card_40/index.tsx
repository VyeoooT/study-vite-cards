import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card40() {
    return (
        // card
        <div className="w-96 flex flex-col bg-white pb-5 space-y-4 rounded-md shadow-neutral-500/50 shadow-lg overflow-hidden">
            {/* img food */}
            <div className="relative">
                <img className="aspect-video object-cover" src={images.imgFood40} alt="" />

                {/* tag */}
                <div className="absolute top-3 right-3 min-w-20 px-2 py-2 bg-indigo-500">
                    <p className="text-sm text-center text-white">Cooking</p>
                </div>
            </div>

            {/* contents */}
            <div className="flex flex-col flex-1 mx-6 space-y-10">
                <div className="flex flex-col items-start space-y-2">
                    {/* name food */}
                    <div>
                        <p className="text-2xl text-gray-800 font-medium">
                            Simplest Salad Recipe ever
                        </p>
                    </div>

                    {/* desc */}
                    <div>
                        <p className="text-base text-gray-600 leading-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reprehenderit.
                        </p>
                    </div>
                </div>

                {/* info */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                        <img src={icons.iconTimer40} alt="" />
                        <p className="text-sm text-gray-800">6 mins ago</p>
                    </div>

                    <div className="flex items-center space-x-1">
                        <img src={icons.iconComment40} alt="" />
                        <p className="text-sm text-gray-800">39 Comments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card40
