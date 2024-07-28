import './style.css'
import images from '../../../assets/images'

function Card35() {
    return (
        // card
        <div className="w-80 flex flex-col shadow-neutral-500 drop-shadow-lg">
            {/* top */}
            <div className="aspect-4-3-card-35 relative flex flex-col justify-center items-center bg-gradient-to-bl from-stone-500 from-40% via-yellow-900/80 to-red-950 rounded-tl-xl rounded-tr-xl">
                {/* img */}
                <div className="w-130p absolute">
                    <img className="w-full" src={images.clash35} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="space-y-8 pt-10 bg-white rounded-bl-xl rounded-br-xl overflow-hidden">
                {/* level - name */}
                <div className="flex flex-col items-center space-y-2 mx-5">
                    <p className="text-xs text-yellow-600 font-bold">LEVEL 4</p>
                    <p className="text-3xl font-bold leading-3">The Barbarian</p>
                </div>

                {/* desc */}
                <div className="mx-5">
                    <p className="text-sm text-neutral-600 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti doloremque autem maxime eligendi fugit libero vero? Voluptatum, architecto ab? Maiores, excepturi animi? Consequatur nulla vel temporibus nesciunt, quae mollitia!
                    </p>
                </div>

                {/* info */}
                <div className="flex bg-yellow-600 text-white divide-x divide-yellow-900/50 ">
                    {/* time training */}
                    <div className="flex flex-col items-center px-8 py-3 hover:bg-slate-300 hover:text-yellow-800 transition-colors duration-300">
                        <p className="text-2xl font-bold">20s</p>
                        <p className="text-xs font-light">TRAINING</p>
                    </div>

                    {/* speed */}
                    <div className="flex flex-col items-center px-8 py-3 hover:bg-slate-300 hover:text-yellow-800 transition-colors duration-300">
                        <p className="text-2xl font-bold">16</p>
                        <p className="text-xs font-light">SPEED</p>
                    </div>

                    {/* time training */}
                    <div className="flex flex-col items-center px-8 py-3 hover:bg-slate-300 hover:text-yellow-800 transition-colors duration-300">
                        <p className="text-2xl font-bold">150</p>
                        <p className="text-xs font-light">COST</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card35
