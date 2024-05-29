import './style.css'
import images from '../../../assets/images'

function Card39() {
    return (
        // card
        <div className="w-72 flex flex-col bg-white pb-5 space-y-4 outline outline-1 outline-sky-950/30 rounded-2xl overflow-hidden shadow-neutral-500/50 shadow-lg">
            {/* top */}
            <div className="flex flex-col mx-2 mt-2">
                {/* bg-img */}
                <div className="rounded-xl overflow-hidden">
                    <img className="aspect-square object-cover" src={images.imgBackground39} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="flex flex-col items-start mx-3 space-y-5">
                {/* tag */}
                <div className="flex space-x-2">
                    <button className="px-2 py-1 border border-gray-300 rounded-full text-xs text-gray-500 active:shadow-sky-900 active:shadow-inner transition-all">Nature</button>
                    <button className="px-2 py-1 border border-gray-300 rounded-full text-xs text-gray-500 active:shadow-sky-900 active:shadow-inner transition-all">Lake</button>
                </div>

                {/* name */}
                <div className="">
                    <p className="text-3xl text-gray-800 font-medium">Lago di Braies</p>
                </div>

                {/* desc */}
                <div className="">
                    <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptates tempora dolorem? Vel laboriosam officiis autem nam, voluptates illo hic odio ut obcaecati sit eum assumenda tempora veritatis, tenetur ipsum.
                    </p>
                </div>

                {/* button */}
                <div className="w-full flex justify-center -translate-y-1">
                    <button className="px-8 py-2 bg-sky-200 rounded-full text-sm font-medium text-sky-600 hover:px-20 active:shadow-sky-900 active:shadow-inner transition-all">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Card39
