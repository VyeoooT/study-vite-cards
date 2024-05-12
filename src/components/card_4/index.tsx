import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card4() {
    return (
        // card
        <div className="w-64 rounded-3xl shadow-neutral-500/50 shadow-2xl overflow-hidden">
            {/* top */}
            <div className="relative w-full bg-purple-700 pt-8">
                {/* avatar */}
                <div className="w-1/2 bg-purple-700 rounded-full padding-2px absolute top-1/5 translate-x-1/2">
                    <img className="w-full bg-white rounded-full padding-2px" src={images.avt} alt="" />
                </div>

                {/* social */}
                <div className="flex flex-col flex-wrap items-end -translate-y-5 mr-2 space-y-2">
                    <img src={icons.iconFacebook} alt="" />
                    <img src={icons.iconGithub} alt="" />
                    <img src={icons.iconTwitter} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="w-full bg-white pt-12 pb-8 px-2 flex flex-col items-center space-y-6">
                {/* info */}
                <div className="flex flex-col items-center space-y-2">
                    {/* name */}
                    <p className="text-2xl font-medium">Prem Shahi</p>

                    {/* description */}
                    <p className="leading-3 text-sm">Web Developer</p>
                </div>

                {/* rate */}
                <div className="w-full flex flex-row flex-wrap justify-center">
                    <img src={icons.iconStarFill} alt="" />
                    <img src={icons.iconStarFill} alt="" />
                    <img src={icons.iconStarFill} alt="" />
                    <img src={icons.iconStarFill} alt="" />
                    <img src={icons.iconStarNoFill} alt="" />
                </div>

                {/* button */}
                <div className="font-medium flex flex-row flex-wrap justify-around space-x-3">
                    <button className="bg-purple-700 text-white text-sm rounded-full py-2 px-6">About Me</button>
                    <button className="bg-purple-700 text-white text-sm rounded-full py-2 px-6">Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default Card4
