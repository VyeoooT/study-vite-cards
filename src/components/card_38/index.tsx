import './style.css'
import images from '../../assets/images'

function Card38() {
    return (
        // card
        <div className="w-96 flex bg-white shadow-teal-900/50 shadow-lg">
            {/* left */}
            <div className="basis-2/3 space-y-12 py-7">
                {/* avt - name - position */}
                <div className="flex flex-col items-center space-y-3">
                    {/* avt */}
                    <div className="w-1/3 outline outline-1 outline-teal-900 outline-offset-2 rounded-full">
                        <img src={images.avt} alt="" />
                    </div>

                    {/* name - position */}
                    <div className="flex flex-col items-center text-teal-900">
                        <p className="text-2xl">Salix Dubois</p>
                        <p className="text-base">Programmer</p>
                    </div>
                </div>

                {/* button */}
                <div className="flex flex-col items-center space-y-3">
                    <button className="min-w-36 px-3 py-1 bg-transparent border border-teal-900 text-base text-teal-900 font-medium rounded-full">Follow</button>
                    <button className="min-w-36 px-3 py-1 bg-transparent border border-teal-900 text-base text-teal-900 font-medium rounded-full">Message</button>
                </div>
            </div>

            {/* right */}
            <div className="basis-1/3 bg-teal-900/50">
                {/* social */}
                <div className="flex flex-col justify-center divide-y divide-white">
                    {/* posts */}
                    <div className="flex flex-col items-center py-7">
                        <p className="text-3xl font-medium text-teal-900">523</p>
                        <p className="text-sm font-light text-emerald-900">Posts</p>
                    </div>

                    {/* posts */}
                    <div className="flex flex-col items-center py-7">
                        <p className="text-3xl font-medium text-teal-900">1387</p>
                        <p className="text-sm font-light text-emerald-900">Likes</p>
                    </div>

                    {/* posts */}
                    <div className="flex flex-col items-center py-7">
                        <p className="text-3xl font-medium text-teal-900">146</p>
                        <p className="text-sm font-light text-emerald-900">Followers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card38
