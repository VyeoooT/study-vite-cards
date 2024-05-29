import './style.css'
import images from '../../../assets/images'

function Card3() {
    return (
        // card
        <div className="w-72 rounded-2xl overflow-hidden shadow-neutral-500/50 shadow-lg">
            {/* top */}
            <div className="w-full">
                <img className='w-full object-cover' src={images.bgCard3} alt="" />
            </div>

            {/* bottom */}
            <div className="w-full bg-white flex flex-col justify-start py-4 px-2 gap-y-16">
                {/* about */}
                <div className="flex flex-col gap-y-1">
                    {/* button - technology */}
                    <div>
                        <button className="py-1 px-2 btn-linear-custom rounded-full translate-y-0 text-white text-xs hover:-translate-y-1 transition-transform active:shadow-gray-500/50 active:shadow-inner">Technology</button>
                    </div>

                    {/* text */}
                    <div className="flex flex-col gap-y-2">
                        {/* title */}
                        <p className="text-xl font-medium">What's New In 2024 Tech</p>

                        {/* description */}
                        <p className="text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta aperiam possimus sunt rerum, necessitatibus voluptatibus fugiat vel repellendus.
                        </p>
                    </div>
                </div>

                {/* infomation */}
                <div className="flex flex-row flex-wrap items-center">
                    {/* avatar */}
                    <div className="w-1/6 mr-3">
                        <img className="w-full" src={images.avt} alt="" />
                    </div>

                    {/* about */}
                    <div className="flex flex-col">
                        {/* name */}
                        <p className="text-base font-bold">Jane Doe</p>

                        {/* status */}
                        <p className="text-sm text-gray-500">2h ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card3
