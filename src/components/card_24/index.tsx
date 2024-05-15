import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card24() {
    return (
        // card
        <div className="w-34rem flex flex-row items-center bg-white relative overflow-hidden font-montserrat shadow-neutral-500/50 shadow-lg">
            {/* left */}
            <div className="flex flex-col basis-3/5 pl-5 pr-10 py-10 z-10">
            {/* <div className="absolute left-5 z-10"> */}
                {/* about */}
                <div className="space-y-5">
                    {/* button */}
                    <div>
                        <button className="px-4 py-2 bg-blue-400 text-white text-base rounded-full">EXCLUSIVE</button>
                    </div>
    
                    {/* name */}
                    <p className="text-4xl font-bold">Afro<br/>baseball hair</p>
    
                    {/* description */}
                    <p className="w-full text-gray-600">
                        Shadow your real allegiance to New York's Pirate radio with this cool cap featuring the Graphic Know Wave logo.
                    </p>
                </div>
    
                {/* purchase */}
                <div className="flex flex-row mt-8">
                    <button className="text-base text-black px-4 py-3 border-2 rounded-s-full border-r-2 border-neutral-600 hover:text-white hover:font-bold hover:bg-black">$115</button>
                    <button className="flex text-base text-black px-4 py-3 border-2 rounded-e-full border-neutral-600">
                        <img className="mr-2" src={icons.iconCart24} alt="" />ADD TO CART
                    </button>
                </div>
            </div>
            
            {/* <img className="absolute top-0 right-0 w-32 h-32" src="/img/avt.png" alt="" /> */}
    
            {/* right */}
            <div className="absolute top-0 -right-5 w-2/3">
            {/* <div className="basis-2/5"> */}
                <img className="w-full" src={images.avtCard24} alt="" />
            </div>
        </div>
    )
}

export default Card24
