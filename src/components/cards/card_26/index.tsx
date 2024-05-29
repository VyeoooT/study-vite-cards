import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faInfinity, faMugSaucer, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons'

function Card26() {
    return (
        // card
        <div className="w-32rem bg-emerald-700/50 flex p-5 divide-x divide-gray-500/50 rounded-md overflow-hidden shadow-neutral-500/50 shadow-lg">
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

            {/* right */}
            <div className="flex flex-col basis-2/3 pl-3 space-y-20">
                {/* top */}
                <div className="flex flex-col flex-1 items-center space-y-2">
                    {/* name */}
                    <p className="text-3xl text-emerald-950 font-medium">Jane Doe</p>

                    {/* info */}
                    <div className="w-full flex justify-between text-sm text-emerald-950">
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
                <div className="flex justify-between text-sm text-emerald-950 font-medium">
                    {/* awards */}
                    <div className="flex flex-col items-center space-y-1">
                        <p className="">AWARDS</p>
                        <FontAwesomeIcon icon={faTrophy} size="2xl" />
                        <p className="text-xl font-medium">2</p>
                    </div>

                    {/* matches */}
                    <div className="flex flex-col items-center space-y-1">
                        <p className="">MATCHES</p>
                        <FontAwesomeIcon icon={faGamepad} size="2xl" />
                        <p className="text-xl font-medium">27</p>
                    </div>

                    {/* pals */}
                    <div className="flex flex-col items-center space-y-1">
                        <p className="">PALS</p>
                        <FontAwesomeIcon icon={faUsers} size="2xl" />
                        <p className="text-xl font-medium">123</p>
                    </div>

                    {/* coffee */}
                    <div className="flex flex-col items-center space-y-1">
                        <p className="">COFFEE</p>
                        <FontAwesomeIcon icon={faMugSaucer} size="2xl" />
                        <FontAwesomeIcon icon={faInfinity} size="xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card26
