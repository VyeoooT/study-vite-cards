import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

const products = [
    {
        "id": 1,
        "name": "LEBRON MAX AIR",
        "type": "KID'S BACKPACK",
        "description":
            "The LeBron Max Air Kids' Backpack has cushioned, adjustable straps, a top-loading design and spacious main compartment for comfortable carrying and easy access to your gear."
        ,
        "variants": [
            {
                "color": "black",
                "imageMain": images.schoolBagBlack21,
                "price": 65.00
            },
            {
                "color": "red",
                "imageMain": images.schoolBagRed21,
                "price": 63.36
            }
        ]
    }
]

function Card21() {
    // select color product
    interface variantInterface {
        color: string,
        imageMain: string,
        price: number
    }

    const initProduct = products[0]
    const [product, setProduct] = useState(initProduct)
    const [variant, setVariant] = useState(initProduct.variants[0])

    const handleVariant = (variant: variantInterface) => {
        setVariant(variant)
        setProduct(prevProduct => ({
            ...prevProduct,
            imageMain: variant.imageMain,
            price: variant.price
        }))
    }

    // notification add to cart
    const [notiAddCart, setNotiAddCart] = useState(false)
    const [disBtn, setDisBtn] = useState(false)

    const handleNoti = () => {
        setNotiAddCart(true)
        setDisBtn(true)

        setTimeout(() => {
            setNotiAddCart(false)
            setDisBtn(false)
        }, 1200);
    }

    const bgColor = (color: string) => {
        const bgColorMapping: { [key:string]: string } = {
            black: "bg-black",
            red: "bg-red-600"
        }

        if (!bgColorMapping[color]) {
            console.log(`not exists background-color mapping: ${color}`)
            return ""
        }
        
        return bgColorMapping[color]
    }

    return (
        // card
        <div className="w-42rem flex flex-row bg-gray-100 py-8 space-x-3 border-8 border-white rounded-xl shadow-neutral-500/50 shadow-xl font-roboto overflow-hidden">
            {/* left */}
            <div className="flex items-center justify-center basis-1/2">
                {/* imageMain */}
                <img className="w-full" src={variant.imageMain} alt="" />
            </div>

            {/* right */}
            <div className="relative flex flex-col justify-start basis-1/2 text-black pe-7 space-y-5">
                {/* name - product */}
                <div>
                    <p className="text-2xl font-medium">{product.name}</p>
                    <p className="text-sm font-medium">{product.type}</p>
                </div>

                {/* price */}
                <div>
                    <p className="text-4xl font-bold">${variant.price.toFixed(2)}</p>
                </div>
    
                {/* about */}
                <div>
                    <p className="text-base text-justify">
                        {product.description}
                    </p>
                </div>
    
                {/* select color */}
                <div className="flex flow-row flex-wrap space-x-3">
                    {product.variants.map((backgColor, idx) => (
                        <button
                            key={idx}
                            className={`w-8 h-8 ${bgColor(backgColor.color)} rounded-sm`}
                            onClick={() => handleVariant(backgColor)}
                        >
                        </button>
                    ))}

                    {/* <button className="w-8 h-8 bg-black rounded-sm"></button> */}
                </div>
    
                {/* button */}
                <div className="w-full">
                    <button
                        className="w-full py-2 border-black border-2 rounded-md text-base font-medium uppercase hover:shadow-neutral-400 hover:shadow-md transition-shadow active:shadow-inner disabled:shadow-none disabled:opacity-80"
                        disabled={disBtn}
                        onClick={handleNoti}
                    >
                        add to cart
                    </button>
                </div>

                {/* add to cart */}
                { notiAddCart &&
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 w-44 px-2 py-5 bg-slate-300/80 rounded-xl shadow-lg">
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color="green" />
                        <p className="text-sm">Add to cart successfully</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Card21
