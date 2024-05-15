import './style.css'
import icons from '../../assets/icons'

function Card16() {
    return (
        // card
        <div className="w-72 rounded-3xl bg-linear-gradient-card16 py-5 space-y-7 shadow-black/50 shadow-xl overflow-hidden">
            {/* top */}
            <div className="w-full flex flex-col items-center my-6 space-y-5">
                {/* title */}
                <p className="text-center text-4xl font-bold text-yellow-500">Standard</p>
    
                {/* price */}
                <div className="flex flex-row flex-wrap items-baseline">
                    <img src={icons.iconDollar} alt="" />
    
                    <p className="text-4xl text-white">199</p>
    
                    <p className="text-base text-white">/month</p>
                </div>
            </div>
    
            {/* line */}
            <div className="w-full h-2px bg-gray-500"></div>
    
            {/* bottom */}
            <div className="w-full flex flex-col items-center px-2 space-y-8">
                {/* content */}
                <div className="space-y-5">
                    {/* 10 web */}
                    <div className="flex flex-row flex-wrap justify-center space-x-2">
                        <img src={icons.iconTick} alt="" />
                        
                        <p className="text-base text-white">10 Website</p>
                    </div>
        
                    {/* 25gb storage */}
                    <div className="flex flex-row flex-wrap justify-center space-x-2">
                        <img src={icons.iconTick} alt="" />
                        
                        <p className="text-base text-white">25GB Storage</p>
                    </div>
        
                    {/* 10 database */}
                    <div className="flex flex-row flex-wrap justify-center space-x-2">
                        <img src={icons.iconTick} alt="" />
                        
                        <p className="text-base text-white">10 Database</p>
                    </div>
        
                    {/* free domain */}
                    <div className="flex flex-row flex-wrap justify-center space-x-2">
                        <img src={icons.iconXFilled} alt="" />
                        
                        <p className="text-base text-white">Free Domain</p>
                    </div>
        
                    {/* profesional email */}
                    <div className="flex flex-row flex-wrap justify-center space-x-2">
                        <img src={icons.iconTick} alt="" />
                        
                        <p className="text-base text-white">Profesional Email</p>
                    </div>
        
                    {/* 24/7 support */}
                    <div className="flex flex-row flex-wrap justify-center space-x-2">
                        <img src={icons.iconTick} alt="" />
                        
                        <p className="text-base text-white">24/7 Support</p>
                    </div>
                </div>

                {/* button */}
                <div>
                    <button className="py-2 px-7 bg-emerald-400 rounded-full">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card16
