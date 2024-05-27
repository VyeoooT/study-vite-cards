import './style.css'
import images from '../../assets/images'

function Card36() {
    return (
        // card
        <div className="w-32rem relative flex bg-sky-200/50 py-10 rounded-xl shadow-neutral-500/50 shadow-lg overflow-hidden">
            {/* effect */}
            <div className="absolute px-32 py-32 bg-sky-600 rounded-full top-0 -translate-y-1/2 right-0 translate-x-1/2 z-20"></div>
            <div className="absolute px-8 py-8 bg-white rounded-full top-1/4 translate-y-1/4 right-0 translate-x-1/2 z-10"></div>

            {/* line - right/bottom */}
            <div className="absolute h-full border border-white top-0 -translate-y-5 right-2 z-0 shadow-neutral-400 shadow-xl"></div>
            <div className="absolute w-full border border-white bottom-2 -translate-x-5 left-0 z-0 shadow-neutral-400 shadow-xl"></div>


            {/* left */}
            <div className="basis-1/4 flex flex-col items-center">
                {/* avt */}
                <div className="w-1/2 outline outline-white outline-4 rounded-full">
                    <img src={images.avt} alt="" />
                </div>
            </div>

            {/* right */}
            <div className="basis-3/4 flex flex-col items-start space-y-5 pe-10">
                {/* name - @ */}
                <div className="">
                    <p className="text-2xl font-bold">Bradley Steve</p>
                    <p className="text-sm font-medium">@bradleysteve</p>
                </div>

                {/* about */}
                <div className="">
                    <p className="text-base font-light">
                        I'm a Front End Developer, follow me to be the first who see my new work.
                    </p>
                </div>

                {/* social */}
                <div className="flex space-x-14 font-bold">
                    {/* views */}
                    <div>
                        <p className="text-xl">15K</p>
                        <p className="text-sm">Views</p>
                    </div>

                    {/* projects */}
                    <div>
                        <p className="text-xl">82</p>
                        <p className="text-sm">Projects</p>
                    </div>

                    {/* followers */}
                    <div>
                        <p className="text-xl">1.3M</p>
                        <p className="text-sm">Followers</p>
                    </div>
                </div>

                {/* button */}
                <div className="flex space-x-2">
                    <button className="min-w-32 px-4 py-1 rounded-md bg-black text-base text-white font-bold">Follow</button>
                    <button className="min-w-32 px-4 py-1 rounded-md bg-transparent border border-black text-base text-black font-medium">View profile</button>
                </div>
            </div>
        </div>
    )
}

export default Card36
