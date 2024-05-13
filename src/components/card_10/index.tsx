import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card10() {
    return (
        // card
        <div className="w-64 rounded-3xl bg-white shadow-card-10">
            {/* top */}
            <div className="w-full">
                {/* avatar */}
                <div className="w-1/2 mx-auto py-4">
                    <img className="w-full" src={images.avt} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="w-full flex flex-col items-center py-6 px-3 space-y-5">
                {/* info */}
                <div className="text-center space-y-3">
                    {/* name */}
                    <p className="text-3xl font-medium">Nick Watson</p>

                    {/* potision */}
                    <p className="text-lg text-gray-500">CEO & Founder</p>

                    {/* school */}
                    <p className="text-base">Oxford university</p>
                </div>

                {/* social */}
                <div className="flex flex-row flex-wrap justify-center space-x-2">
                    <img src={icons.iconFb10} alt="" />
                    <img src={icons.iconIg10} alt="" />
                    <img src={icons.iconTwitter10} alt="" />
                    <img src={icons.iconLinkedin10} alt="" />
                </div>

                {/* button */}
                <div className="w-full text-center px-5">
                    <button className="w-full py-2 bg-black rounded-full text-white font-medium text-base">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Card10
