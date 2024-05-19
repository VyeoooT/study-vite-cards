import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card26() {
    return (
        // card
        <div className="w-32rem bg-emerald-700/50 flex flex-row p-5 space-x-5 rounded-md overflow-hidden shadow-neutral-500/50 shadow-lg">
            {/* left */}
            <div className="flex flex-col basis-1/3 justify-evenly items-center">
                {/* level */}
                <div>
                    <p className="py-1 px-2 bg-neutral-500/40 rounded-full text-xs text-white">LEVEL 13</p>
                </div>

                {/* avatar */}
                <div className="w-1/2">
                    <img className="w-full border-2 border-emerald-950 rounded-full" src={images.avt} alt="" />
                </div>

                {/* points */}
                <div>
                    <p className="py-1 px-2 bg-neutral-500/40 rounded-full text-xs text-white">5,312 POINTS</p>
                </div>
            </div>

            {/* line */}
            <div className="border-l-2 border-emerald-950/10"></div>

            {/* right */}
            <div className="flex flex-col basis-2/3 space-y-20">
                {/* top */}
                <div className="flex flex-col items-center space-y-2">
                    {/* name */}
                    <p className="text-3xl text-emerald-950 font-medium">Jane Doe</p>

                    {/* info */}
                    <div className="w-full flex flex-row justify-between text-sm text-emerald-950">
                        <div>
                            <p>Group Name</p>
                            <p>Position/Role</p>
                        </div>
                        <div>
                            <p>Joined January 2019</p>
                            <p>City, Country</p>
                        </div>
                    </div>
                </div>

                {/* bottom */}
                <div className="flex flex-row justify-between text-sm text-emerald-950 font-medium">
                    {/* awards */}
                    <div className="flex flex-col items-center">
                        <p className="">AWARDS</p>
                        <img src={icons.iconCup26} alt="" />
                        <p className="text-xl font-medium">2</p>
                    </div>

                    {/* matches */}
                    <div className="flex flex-col items-center">
                        <p className="">MATCHES</p>
                        <img src={icons.iconControlGame26} alt="" />
                        <p className="text-xl font-medium">27</p>
                    </div>

                    {/* pals */}
                    <div className="flex flex-col items-center">
                        <p className="">PALS</p>
                        <img src={icons.iconUserGr26} alt="" />
                        <p className="text-xl font-medium">123</p>
                    </div>

                    {/* coffee */}
                    <div className="flex flex-col items-center">
                        <p className="">COFFEE</p>
                        <img src={icons.iconCoffee26} alt="" />
                        <p className="text-xl font-medium">VC</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card26
