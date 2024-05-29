import './style.css'
import images from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCartFlatbed, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { faOpencart } from '@fortawesome/free-brands-svg-icons'

function Card22() {
    return (
        // card
        <div className="w-42rem flex flex-row bg-slate-700 gap-x-7 pe-10 font-muli shadow-neutral-500/50 shadow-lg">
            {/* left */}
            <div className="flex flex-col justify-center relative basis-1/2 bg-orange-600 border-custom-card-22">
                {/* img */}
                <div className="absolute w-150 -left-1/3">
                    <img className="w-full" src={images.shoesCard22} alt="" />
                </div>
    
                {/* arrow - left/right */}
                <div className="w-full flex flex-row absolute translate-x-1/4 bottom-10 space-x-4">
                    <button className="hover:-translate-x-1">
                        <FontAwesomeIcon icon={faArrowLeft} color="white" />
                    </button>
                    <button className="hover:translate-x-1">
                        <FontAwesomeIcon icon={faArrowRight} color="white" />
                    </button>
                </div>
            </div>
    
            {/* right */}
            <div className="flex flex-col gap-y-20 basis-1/2 my-8">
                {/* header */}
                <div className="flex flex-row justify-between items-center">
                    {/* brand */}
                    <p className="basis-3/6 text-xl text-orange-600 font-bold">Arimax</p>
    
                    {/* icon */}
                    <div className="basis-2/6 flex justify-between items-center">
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faUser} color="white" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faCartShopping} color="white" />
                        </button>
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
                    <div className="w-4/5 flex justify-between text-white text-sm">
                        <p>SIZE</p>
                        <button>
                            <p>7</p>
                        </button>
                        <button>
                            <p>8</p>
                        </button>
                        <button>
                            <p>9</p>
                        </button>
                        <button>
                            <p>10</p>
                        </button>
                        <button>
                            <p>11</p>
                        </button>
                    </div>
    
                    {/* colors */}
                    <div className="w-3/5 flex flex-row justify-between items-center">
                        <p className="text-sm text-white">COLOR</p>
    
                        {/* color */}
                        <button className="w-5 h-5 rounded-full bg-yellow-500"></button>
                        <button className="w-5 h-5 rounded-full bg-black"></button>
                        <button className="w-5 h-5 rounded-full bg-sky-500"></button>
                    </div>
    
                    {/* purchase */}
                    <div className="w-full flex flex-row items-center text-white text-sm space-x-16">
                        {/* buy now */}
                        <div>
                            <button className="flex flow-row basis-1/2 items-center space-x-2">
                                <FontAwesomeIcon icon={faCartFlatbed} />
                                <p>Buy Now</p>
                            </button>
                        </div>
                        
                        {/* add to cart */}
                        <div>
                            <button className="flex flow-row basis-1/2 items-center space-x-2">
                                <FontAwesomeIcon icon={faOpencart} />
                                <p>Add To Cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card22
