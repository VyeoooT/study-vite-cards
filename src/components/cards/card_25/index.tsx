import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

function Card25() {
    return (
        // card
        <div className="w-45rem bg-white flex flex-col space-y-7 pl-10 py-10 shadow-neutral-600/50 shadow-xl overflow-hidden font-monterrat">
            {/* header */}
            <div className="flex justify-between items-center space-x-10 pe-10">
                {/* back to */}
                <button className="w-full flex justify-start bg-blue-700 pl-2 py-2 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" color="white" />
                </button>
    
                {/* new products */}
                <div className="flex-none">
                    <p className="text-xl uppercase font-semibold">New Products</p>
                </div>
            </div>
    
            {/* content */}
            <div className="flex space-x-1 mx-4 pe-10">
                {/* left */}
                <div className="flex flex-col items-start grow shrink basis-1/2 space-y-2">
                    {/* info */}
                    <div className="flex flex-col">
                        {/* name */}
                        <p className="text-6xl font-extrabold">Nurton</p>
    
                        {/* tag */}
                        <p className="text-2xl uppercase text-neutral-600 font-monterrat leading-3">office chair</p>
    
                        {/* price */}
                        <p className="text-2xl font-fjalla-one text-neutral-800 mt-5">$210.00</p>
                    </div>
    
                    {/* img */}
                    <div className="w-11/12 mx-auto">
                        <img className="w-full" src={images.chair} alt="" />
                    </div>
                </div>
    
                {/* right */}
                <div className="flex flex-col flex-1 basis-1/2 gap-y-8">
                    {/* description */}
                    <div>
                        <p className="text-base font-light font-opensan leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro repellendus at totam quisquam, fugiat architecto ut, nihil quibusdam eos eligendi hic eaque, placeat commodi nobis natus voluptatum. Eligendi, facilis.
                        </p>
                    </div>
    
                    {/* in stock */}
                    <div className="flex flex-col gap-y-3">
                        <div>
                            <p className="text-base text-lime-600 font-bold">In stock</p>
                        </div>
                    
                        {/* rate */}
                        <div className="flex flex-row space-x-4">
                            <div className="space-x-1">
                                <button>
                                    <FontAwesomeIcon icon={faStarSolid} color="#F7C01B" />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faStarSolid} color="#F7C01B" />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faStarSolid} color="#F7C01B" />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faStarSolid} color="#F7C01B" />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faStarRegular} color="#F7C01B" />
                                </button>
                            </div>

                            <p className="ml-3 text-base text-neutral-600">(64 reviews)</p>
                        </div>
                    </div>
                </div>
            </div>
    
            {/* footer */}
            <div className="flex flex-col gap-y-5">
                {/* line */}
                <div className="block pt-1 bg-neutral-600 relative">
                    {/* gray */}
                    <div className="w-1/4 absolute top-0 left-0 pt-1 bg-blue-700"></div>
                </div>
    
                {/* info - cart */}
                <div className="flex flex-row items-center gap-x-1 pe-10">
                    {/* text */}
                    <div className="uppercase flex-1">
                        <p className="text-sm font-semibold text-neutral-600">recommended by</p>
                        <p className="text-xl font-semibold text-blue-700">andrew palmer</p>
                    </div>
    
                    {/* add to cart */}
                    <div className="">
                        <button className="px-8 py-3 bg-blue-700 text-white rounded-full hover:outline-2 hover:outline hover:outline-blue-700 hover:bg-white hover:text-blue-700 transition-colors">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card25
