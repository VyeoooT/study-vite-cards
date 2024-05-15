import './style.css'
import icons from '../../assets/icons'
import images from '../../assets/images'

function Card22() {
    return (
        // card
        <div className="w-42rem flex flex-row bg-slate-700 gap-x-7 pe-10 font-muli">
            {/* left */}
            <div className="flex flex-col justify-center relative basis-1/2 bg-orange-600 border-custom-card-22">
                {/* img */}
                <div className="absolute w-150 -left-1/3">
                    <img className="w-full" src={images.shoesCard22} alt="" />
                </div>
    
                {/* arrow - left/right */}
                <div className="w-full flex flex-row absolute translate-x-1/4 bottom-10 space-x-4">
                    <img src={icons.iconArrowLeft22} alt="" />
                    <img src={icons.iconArrowRight22} alt="" />
                </div>
            </div>
    
            {/* right */}
            <div className="w-full flex flex-col gap-y-20 basis-1/2 my-8">
                {/* header */}
                <div className="flex flex-row justify-between items-center">
                    {/* brand */}
                    <p className="basis-3/6 text-xl text-orange-600 font-bold">Arimax</p>
    
                    {/* icon */}
                    <div className="basis-2/6 flex flex-row justify-between">
                        <img src={icons.iconSearch22} alt="" />
                        <img src={icons.iconUser22} alt="" />
                        <img src={icons.iconCart22} alt="" />
                    </div>
                </div>
    
                {/* info */}
                <div className="flex flex-col justify-between items-start gap-5">
                    {/* collection */}
                    <div className="text-white space-y-3">
                        <p>Winter Collection</p>
                        <p className="text-3xl font-extrabold">Men Black Sneakers</p>
                    </div>
    
                    {/* price */}
                    <div className="flex flex-row items-center text-white space-x-8">
                        {/* price sale */}
                        <p className="basis-1/4 text-2xl font-bold">$150</p>
    
                        {/* price old */}
                        <p className="flex-1 text-xl line-through decoration-red-600">$200</p>
                    </div>
    
                    {/* size */}
                    <div className="w-4/5 flex flex-row justify-between text-white text-sm">
                        <p>SIZE</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                    </div>
    
                    {/* colors */}
                    <div className="w-3/5 flex flex-row justify-between items-center">
                        <p className="text-sm text-white">COLOR</p>
    
                        {/* color */}
                        <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                        <div className="w-5 h-5 rounded-full bg-black"></div>
                        <div className="w-5 h-5 rounded-full bg-sky-500"></div>
                    </div>
    
                    {/* purchase */}
                    <div className="w-full flex flex-row justify-start items-center text-white text-sm">
                        {/* buy now */}
                        <div className="flex flow-row basis-1/2 items-center space-x-2">
                            <img src={icons.iconCart22} alt="" />
                            <p>Buy Now</p>
                        </div>
                        
                        {/* add to cart */}
                        <div className="flex flow-row basis-1/2 items-center space-x-2">
                            <img src={icons.iconCartBold22} alt="" />
                            <p>Add To Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card22
