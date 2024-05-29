import './style.css'
import images from '../../assets/images'

function Card9() {
    return (
        // card
        <div className="w-64 rounded-3xl bg-white shadow-neutral-500/50 shadow-2xl">
            {/* top */}
            <div className="w-full">
                {/* avatar */}
                <div className="w-9/12 -translate-y-1/4 mx-auto">
                    <img className="w-full aspect-square object-cover rounded-2xl shadow-gray-500 shadow-xl" src={images.avtCard9} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="w-full flex flex-col items-center px-3 pb-6 -mt-5 space-y-5 overflow-hidden">
                {/* info */}
                <div>
                    {/* name */}
                    <p className="text-center text-xl font-medium">Alina Smith</p>

                    {/* position */}
                    <p className="text-sm text-gray-500 font-light">Senior UX/UI Designer</p>
                </div>

                {/* social */}
                <div className="w-full flex flex-row flex-wrap justify-around items-center text-center">
                    {/* posts */}
                    <div>
                        <p className="text-lg font-semibold text-gray-800">342</p>
                        <p className="text-sm text-gray-500">Posts</p>
                    </div>

                    {/* followers */}
                    <div>
                        <p className="text-lg font-semibold text-gray-800">120k</p>
                        <p className="text-sm text-gray-500">Followers</p>
                    </div>

                    {/* following */}
                    <div>
                        <p className="text-lg font-semibold text-gray-800">285</p>
                        <p className="text-sm text-gray-500">Following</p>
                    </div>
                </div>

                {/* button */}
                <div className="w-full flex flex-row flex-wrap justify-around">
                    <button className="py-1 px-6 text-sm text-white font-medium bg-pink-500 rounded-md border-2 border-transparent hover:text-gray-500 hover:border-gray-300 hover:bg-white transition-colors active:translate-y-1">Follow</button>
                    <button className="py-1 px-6 text-sm text-gray-500 font-medium bg-white border-2 border-gray-300 rounded-md hover:text-white hover:border-transparent hover:bg-pink-500 transition-colors active:translate-y-1">Message</button>
                </div>
            </div>
        </div>
    )
}

export default Card9
