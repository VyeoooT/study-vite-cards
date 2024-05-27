import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card37() {
    return (
        // card
        <div className="w-80 bg-white pt-4 pb-10 text-neutral-700 rounded-md shadow-neutral-500/50 shadow-lg">
            {/* more button */}
            <div className="flex justify-end pr-2">
                <img src={icons.iconMore37} alt="" />
            </div>

            {/* contents */}
            <div className="flex flex-col px-8 space-y-7">
                {/* avatar - name - position */}
                <div className="flex flex-col items-center space-y-5">
                    <div className="w-1/3 relative">
                        <img src={images.avt} alt="" />

                        {/* tick */}
                        <div className="absolute bottom-1 right-1 bg-white rounded-full shadow-tick-card-37 z-10">
                            <img className="" src={icons.iconTick37} alt="" />
                        </div>
                    </div>

                    {/* name - position */}
                    <div className="flex flex-col items-center">
                        <p className="text-2xl">Sathish Kumar</p>
                        <p className="text-sm font-light">UI/UX Mobile Designer</p>
                    </div>
                </div>

                {/* Projects - Following - Followers */}
                <div className="flex justify-between">
                    {/* Projects */}
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-sm font-light">Projects</p>
                        <p className="text-xl font-medium leading-3">17</p>
                    </div>

                    {/* Following */}
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-sm font-light">Following</p>
                        <p className="text-xl font-medium leading-3">159</p>
                    </div>

                    {/* Followers */}
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-sm font-light">Followers</p>
                        <p className="text-xl font-medium leading-3">205</p>
                    </div>
                </div>

                {/* desc - social */}
                <div className="flex flex-col items-center space-y-5">
                    {/* desc */}
                    <p className="text-xs text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, porro dolor ex unde cum itaque laborum veritatis!
                    </p>

                    {/* social */}
                    <div className="flex items-center space-x-4">
                        <img className="rounded-full" src={icons.iconTwitter37} alt="" />
                        <img src={icons.iconFacebook37} alt="" />
                        <img src={icons.iconGoogle37} alt="" />
                        <img className="rounded-full" src={icons.iconBehance37} alt="" />
                    </div>
                </div>

                {/* button */}
                <div className="flex justify-center">
                    <button className="px-14 py-2 bg-transparent border border-neutral-400 rounded-full font-light">View Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Card37
