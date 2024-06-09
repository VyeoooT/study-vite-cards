import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faDollar } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

function Card16() {
    const [notiBuyNow, setNotiBuyNow] = useState(false)
    const [disBtnBuyNow, setDisBtnBuyNow] = useState(false)

    const handleNotiBuyNow = () => {
        setNotiBuyNow(true)
        setDisBtnBuyNow(true)

        setTimeout(() => {
            window.open("https://portal.vietnix.vn/cart.php?a=view", "_blank")

            setNotiBuyNow(false)
            setDisBtnBuyNow(false)
        }, 1300);
    }

    return (
        // card
        <div className="relative w-72 rounded-3xl bg-linear-gradient-card16 py-5 space-y-7 divide-y divide-gray-500 shadow-black/50 shadow-xl overflow-hidden">
            {/* top */}
            <div className="w-full flex flex-col items-center my-6 space-y-5">
                {/* title */}
                <p className="text-center text-4xl font-bold text-yellow-500">Standard</p>
    
                {/* price */}
                <div className="flex flex-row flex-wrap items-baseline">
                    <FontAwesomeIcon icon={faDollar} color="white" />
    
                    <p className="text-4xl text-white">199</p>
    
                    <p className="text-base text-white">/month</p>
                </div>
            </div>
    
            {/* bottom */}
            <div className="w-full flex flex-col items-center px-2 pt-5 space-y-8">
                {/* content */}
                <div className="space-y-5">
                    {/* 10 web */}
                    <div className="flex flex-row flex-wrap justify-center items-center space-x-2">
                        <FontAwesomeIcon icon={faCircleCheck} color="white" />
                        
                        <p className="text-base text-white">10 Website</p>
                    </div>
        
                    {/* 25gb storage */}
                    <div className="flex flex-row flex-wrap justify-center items-center space-x-2">
                        <FontAwesomeIcon icon={faCircleCheck} color="white" />
                        
                        <p className="text-base text-white">25GB Storage</p>
                    </div>
        
                    {/* 10 database */}
                    <div className="flex flex-row flex-wrap justify-center items-center space-x-2">
                        <FontAwesomeIcon icon={faCircleCheck} color="white" />
                        
                        <p className="text-base text-white">10 Database</p>
                    </div>
        
                    {/* free domain */}
                    <div className="flex flex-row flex-wrap justify-center items-center space-x-2">
                        <FontAwesomeIcon icon={faCircleXmark} color="white" />
                        
                        <p className="text-base text-white">Free Domain</p>
                    </div>
        
                    {/* profesional email */}
                    <div className="flex flex-row flex-wrap justify-center items-center space-x-2">
                        <FontAwesomeIcon icon={faCircleCheck} color="white" />
                        
                        <p className="text-base text-white">Profesional Email</p>
                    </div>
        
                    {/* 24/7 support */}
                    <div className="flex flex-row flex-wrap justify-center items-center space-x-2">
                        <FontAwesomeIcon icon={faCircleCheck} color="white" />
                        
                        <p className="text-base text-white">24/7 Support</p>
                    </div>
                </div>

                {/* button */}
                <div>
                    <button
                        className="py-2 px-7 bg-emerald-400 rounded-full border-2 border-transparent hover:text-white hover:bg-transparent hover:border-emerald-500 transition-colors active:translate-y-1 disabled:opacity-60 disabled:translate-y-0"
                        onClick={handleNotiBuyNow}
                        disabled={disBtnBuyNow}
                    >
                        Buy Now
                    </button>
                </div>

                {/* notification */}
                { notiBuyNow &&
                    <div className="absolute top-1/4 -translate-y-5 bg-slate-400/40 px-4 py-1 rounded-full">
                        <p className="text-sm font-light text-stone-700">Moving to payment page...</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Card16
