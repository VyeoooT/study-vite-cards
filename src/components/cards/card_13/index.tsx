import './style.css'
import icons from '../../../assets/icons'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

import { useCallback, useState } from 'react'

const products = [
    {
        "id": 1,
        "name": "ADDIDAS GAZE ZX",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, fuga? Officia obcaecati magni natus nam labore laborum. Ducimus provident quia dolor deserunt! Facilis magni, laboriosam aut maiores incidunt distinctio harum.",
        "colors": [
            "blue",
            "yellow",
            "pink"
        ],
        "prices": [
            9.99,
            11.99,
            15.00
        ],
        "ratings": [
            1,
            3,
            5
        ],
        "images": [
            images.addidasBlue,
            images.addidasYellow,
            images.addidasPink
        ]
    }
]

function Card13() {
    // go to cart
    const [notiCart, setNotiCart] = useState(false)
    const [disableCart, setDisableCart] = useState(false)

    const goToCart = () => {
        setDisableCart(true)
        setNotiCart(true)

        setTimeout(() => {
            window.open("https://shopee.vn/cart/", "_blank", "noopener, noreferrer")
            // console.log("open link")

            setNotiCart(false)
            setDisableCart(false)
        }, 1500)
    }

    // rate
    const starQty = 5
    const stars = Array.from({ length: starQty })

    // map data
    const initProduct = products[0]
    const [properties, setProperties] = useState({
        ...initProduct,
        color: initProduct.colors[0],
        price: initProduct.prices[0],
        rating: initProduct.ratings[0],
        image: initProduct.images[0]
    })

    const handlePropertiesProduct = useCallback((index: number) => {
        setProperties({
            ...initProduct,
            color: initProduct.colors[index],
            price: initProduct.prices[index],
            rating: initProduct.ratings[index],
            image: initProduct.images[index]
        })
    }, [initProduct])

    // mapping colors
    const bgColor = (color: string) => {
        const bgColorMapping: { [key: string]:string } = {
            blue: "bg-blue-600",
            yellow: "bg-yellow-600",
            pink: "bg-pink-600"
        }

        if (!bgColorMapping[color]) {
            // console.log(`not exists background-color mapping: ${color}`)
            return ""
        }
        
        return bgColorMapping[color]
    }

    const outlineColor = (color: string) => {
        const outlineColorMapping: { [key: string]:string } = {
            blue: "outline-blue-600",
            yellow: "outline-yellow-600",
            pink: "outline-pink-600"
        }

        if (!outlineColorMapping[color]) {
            // console.log(`not exists outline-color mapping: ${color}`)
            return ""
        }
        
        return outlineColorMapping[color]
    }

    // btn add to cart
    const [notiAddToCart, setNotiAddToCart] = useState(false)
    const [disableBtnAddCart, setDisableBtnAddCart] = useState(false)

    const handleAddToCart = () => {
        setNotiAddToCart(true)
        setDisableBtnAddCart(true)

        setTimeout(() => {
            setNotiAddToCart(false)
            setDisableBtnAddCart(false)
        }, 1200)
    }

    return (
        // card
        <div className="relative w-80 rounded-3xl pb-8 space-y-4 bg-white shadow-neutral-500/50 shadow-lg">
            {/* top */}
            <div className="relative flex flex-col">
                {/* notification */}
                { notiCart &&
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center text-xs text-white w-28 px-2 py-1 rounded-full bg-slate-500 opacity-50">
                        <p>Go to cart...</p>
                    </div>
                }

                {/* header */}
                <div className="flex flex-row justify-between mx-8 mt-8">
                    {/* logo */}
                    <div>
                        <a href="https://www.adidas.com.vn" target="_blank" rel="noopener noreferrer">
                            <img src={icons.iconLogo} alt="" />
                        </a>
                    </div>
    
                    {/* cart */}
                    <div>
                        <button onClick={goToCart} disabled={disableCart}>
                            <img src={icons.iconCart} alt="" />
                        </button>
                    </div>
                </div>
    
                {/* image - product */}
                <div className="w-10/12 mx-auto rotate-12">
                    <img className="w-full" src={properties.image} alt="" />
                </div>
            </div>
    
            {/* bottom */}
            <div className="flex flex-col px-6 space-y-6">
                {/* info */}
                <div className="flex flex-col items-start space-y-2">
                    <div className="space-y-1">
                        {/* name - product */}
                        <p className="text-xl font-medium">{properties.name}</p>
        
                        {/* description */}
                        <p className="text-sm text-gray-600 leading-5 text-justify">
                            {properties.description}
                        </p>
                    </div>

                    {/* rate */}
                    <div className="flex flex-row flex-wrap space-x-1">
                        {stars.map((_, idx) => (
                            <button key={idx}>
                                <FontAwesomeIcon icon={idx < properties.rating ? faStarSolid : faStarRegular} color="#333" />
                            </button>
                        ))}
                    </div>
                </div>
    
                {/* colours - price */}
                <div className="flex flex-row flex-wrap justify-between items-center">
                    {/* colour */}
                   <div className="flex flex-row flex-wrap items-center space-x-2">
                        <p className="text-lg font-medium text-gray-500">Colour:</p>
    
                        {/* color */}
                        {initProduct.colors.map((color, idx) => (
                            // console.log(initProduct.colors, properties.color, color, idx, properties.color === color ? true : false, properties.color === color ? "outline outline-2 " + `outline-${color}-500` + " outline-offset-1" : "outline-none"),

                            <button
                                key={idx}
                                className={`w-4 h-4 ${bgColor(color)} rounded-full ${properties.color === color ? `outline outline-2 ${outlineColor(color)} outline-offset-1` : "outline-none"}`}
                                onClick={() => handlePropertiesProduct(idx)}
                            >
                            </button>
                        ))}
                   </div>
    
                   {/* price */}
                   <div className="flex flex-col items-center">
                        <p className="text-3xl text-gray-600 font-semibold">{properties.price.toFixed(2)}</p>
                        <p className="text-xs text-gray-500 font-medium">Nine dollar only</p>
                   </div>
                </div>
    
                {/* button */}
                <div className="w-full text-center">
                    <button
                        className="w-full bg-gradient-to-l from-purple-500 to-cyan-500 rounded-full text-base py-2 font-medium text-white hover:shadow-purple-200 hover:shadow-lg transition-shadow active:shadow-cyan-400 active:shadow-inner disabled:opacity-70"
                        onClick={handleAddToCart}
                        disabled={disableBtnAddCart}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>

            {/* notification */}
            { notiAddToCart &&
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center w-10/12 px-2 py-5 space-y-3 bg-slate-300 shadow-lg rounded-lg">
                    <FontAwesomeIcon className="highlight rounded-full" icon={faCircleCheck} size="xl" color="#10b981" />
                    <p className="text-sm text-emerald-800">The product has been added to cart</p>
                </div>
            }
        </div>
    )
}

export default Card13
