import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCartFlatbed, faCartShopping, faCircleCheck, faCreditCard, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { faOpencart } from '@fortawesome/free-brands-svg-icons'

import { useState } from 'react'

const products = [
    {
        "id": 1,
        "collection": "Winter Collection",
        "name": "Men Black Sneakers",
        "variants": [
            {
                "color": "orange",
                "imageMain": images.nikeOrangeCard22,
                "price": 150,
                "sale": 200
            },
            {
                "color": "black",
                "imageMain": images.nikeBlackCard22,
                "price": 99,
                "sale": 100
            },
            {
                "color": "blue",
                "imageMain": images.nikeBlueCard22,
                "price": 120,
                "sale": 97
            }
        ],
        "sizes": [
            7, 8, 9, 10, 11, 12
        ]
    }
]

function Card22() {
    // notification go to cart
    const [goToCart, setGoToCart] = useState(false)

    const showGoToCart = () => {
        setGoToCart(true)

        setTimeout(() => {
            setGoToCart(false)
            window.open("https://shopee.vn/cart", "_blank")
        }, 1200);
    }

    // Custom hook to handle button disable logic
    const useDisableButton = (initialState: boolean = false): [boolean, (duration?: number) => Promise<void>] => {
        const [disabled, setDisabled] = useState(initialState)

        const disableButton = async (duration: number = 1200) => {
            setDisabled(true)
            await new Promise(resolve => setTimeout(resolve, duration))
            setDisabled(false)
        }

        return [disabled, disableButton]
    }

    const [disableBtn, setDisableBtn] = useDisableButton()

    // notification add to cart
    const [notiAddCart, setNotiAddCart] = useState(false)

    const notiAddToCart = async () => {
        setNotiAddCart(true)
        await setDisableBtn()

        setTimeout(() => {
            setNotiAddCart(false)
        }, 1200)
    }

    // notification go to cart
    const [payment, setPayment] = useState(false)

    const directionalPayment = async () => {
        setPayment(true)
        await setDisableBtn()

        setTimeout(() => {
            setPayment(false)
            window.open("https://shopee.vn/payment", "_blank")
        }, 1200)
    }
    
    // map data
    interface variantInterface {
        imageMain: string,
        price: number,
        sale: number,
        color: string,
    }

    const initProduct = products[0]
    const [product, setProduct] = useState(initProduct)
    const [variant, setVariant] = useState(initProduct.variants[0])
    const [pickSize, setPickSize] = useState(initProduct.sizes[0])
    const [variantIndex, setVariantIndex] = useState(0)

    const handleVariant = (variant: variantInterface) => {
        setVariant(variant)
        setProduct(prevProduct => ({
            ...prevProduct,
            imageMain: variant.imageMain,
            color: variant.color,
            price: variant.price,
            sale: variant.sale
        }))
    }

    const bgColor = (color: string) => {
        const bgColorMapping: { [key: string]: string } = {
            blue: "bg-blue-500",
            orange: "bg-orange-500",
            black: "bg-black"
        }

        if (!bgColorMapping[color]) {
            console.log(`not exists background-color mapping: ${color}`)
            return ""
        }
        
        return bgColorMapping[color]
    }

    const outlineColor = (color: string) => {
        const outlineColorMapping: { [key: string]: string } = {
            blue: "outline-blue-500",
            orange: "outline-orange-500",
            black: "outline-black"
        }

        if (!outlineColorMapping[color]) {
            console.log(`not exists outline-color mapping: ${color}`)
            return ""
        }
        
        return outlineColorMapping[color]
    }

    // next icon to variant product
    const handleNextVariant = () => {
        const newIndex = (variantIndex + 1) % initProduct.variants.length
        setVariantIndex(newIndex)
        setVariant(initProduct.variants[newIndex])
    }

    // previous icon to variant product
    const handlePreviousVariant = () => {
        const newIndex = (variantIndex - 1 + initProduct.variants.length) % initProduct.variants.length
        setVariantIndex(newIndex)
        setVariant(initProduct.variants[newIndex])
    }
    
    return (
        // card
        <div className="w-42rem flex flex-row bg-slate-700 gap-x-7 pe-10 font-muli shadow-neutral-500/50 shadow-lg">
            {/* left */}
            <div className={`flex flex-col justify-center relative basis-1/2 transition-colors duration-300 ease-linear border-custom-card-22 ${bgColor(variant.color)}`}>
                {/* img */}
                <div className="absolute w-150 -left-1/3">
                    <img className="w-full transition-all duration-1000 ease-linear" src={variant.imageMain} alt="" />
                </div>
    
                {/* arrow - left/right */}
                <div className="w-full flex flex-row absolute translate-x-1/4 bottom-10 space-x-4">
                    <button onClick={handlePreviousVariant}>
                        <FontAwesomeIcon className="hover:text-slate-600 transition-colors" icon={faArrowLeft} color="white" />
                    </button>
                    <button onClick={handleNextVariant}>
                        <FontAwesomeIcon className="hover:text-slate-600 transition-colors" icon={faArrowRight} color="white" />
                    </button>
                </div>
            </div>
    
            {/* right */}
            <div className="relative flex flex-col gap-y-20 basis-1/2 my-8">
                {/* header */}
                <div className="flex flex-row justify-between items-center">
                    {/* brand */}
                    <p className="basis-3/6 text-xl text-orange-600 font-bold">Arimax</p>
    
                    {/* icon */}
                    <div className="basis-2/6 flex justify-between items-center">
                        <button>
                            <FontAwesomeIcon className="hover:text-orange-600 transition-colors" icon={faMagnifyingGlass} color="white" />
                        </button>
                        <button>
                            <FontAwesomeIcon className="hover:text-orange-600 transition-colors" icon={faUser} color="white" />
                        </button>
                        <button onClick={showGoToCart}>
                            <FontAwesomeIcon className="hover:text-orange-600 transition-colors" icon={faCartShopping} color="white" />
                        </button>
                    </div>

                    {/* go to cart */}
                    {goToCart &&
                        <div className="absolute top-14 left-1/2 -translate-x-1/2 px-3 p-1 rounded-full bg-slate-600">
                            <p className="text-sm text-orange-500">Go to cart...</p>
                        </div>
                    }
                </div>
    
                {/* info */}
                <div className="flex flex-col justify-between items-start gap-5">
                    {/* collection */}
                    <div className="text-white space-y-3">
                        <p>{product.collection}</p>
                        <p className="text-3xl font-extrabold">{product.name}</p>
                    </div>
    
                    {/* price */}
                    <div className="flex flex-row items-center text-white space-x-8">
                        {/* price sale */}
                        <p className="basis-1/4 text-2xl font-bold">${variant.price}</p>
    
                        {/* price old */}
                        <p className="flex-1 text-xl line-through decoration-red-600">${variant.sale}</p>
                    </div>
    
                    {/* size */}
                    <div className="w-4/5 flex justify-between items-center text-white text-sm">
                        <p>SIZE</p>
                        {product.sizes.map((size, idx) => (
                            <button
                                key={idx}
                                className={`w-6 aspect-square rounded-full transition-colors hover:bg-neutral-400 ${pickSize === size ? `${bgColor(variant.color)}` : "bg-none"}`}
                                onClick={() => setPickSize(size)}
                            >
                                <p>{size}</p>
                            </button>
                        ))}
                    </div>
    
                    {/* colors */}
                    <div className="w-3/5 flex flex-row justify-between items-center">
                        <p className="text-sm text-white">COLOR</p>
    
                        {/* color */}
                        {product.variants.map((backgColor, idx) => (
                            <button
                                key={idx}
                                className={`w-5 h-5 rounded-full ${bgColor(backgColor.color)} ${variant.color === backgColor.color ? `outline outline-2 ${outlineColor(backgColor.color)} outline-offset-2 transition-all` : "outline-none"} `}
                                onClick={() => handleVariant(backgColor)}
                            ></button>
                        ))}
                    </div>
    
                    {/* purchase */}
                    <div className="w-full flex flex-row items-center text-white text-sm space-x-16">
                        {/* buy now */}
                        <div>
                            <button
                                className="flex flow-row basis-1/2 items-center space-x-2 group"
                                disabled={disableBtn}
                                onClick={directionalPayment}
                            >
                                <FontAwesomeIcon className="group-hover:text-orange-500 transition-colors" icon={faCartFlatbed} />
                                <p className="group-hover:text-orange-500 transition-colors">Buy Now</p>
                            </button>
                        </div>
                        
                        {/* add to cart */}
                        <div>
                            <button
                                className="flex flow-row basis-1/2 items-center space-x-2 group"
                                disabled={disableBtn}
                                onClick={notiAddToCart}
                            >
                                <FontAwesomeIcon className="group-hover:text-orange-500 transition-colors" icon={faOpencart} />
                                <p className="group-hover:text-orange-500 transition-colors">Add To Cart</p>
                            </button>
                        </div>
                    </div>

                    {/* add to cart */}
                    { notiAddCart &&
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 w-44 px-2 py-5 bg-slate-300/80 rounded-xl shadow-lg">
                            <FontAwesomeIcon icon={faCircleCheck} size="lg" color="#F97316" />
                            <p className="text-sm text-orange-700">Add to cart successfully</p>
                        </div>
                    }

                    {/* go to payment */}
                    { payment &&
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 w-52 px-2 py-5 bg-slate-300/80 rounded-xl shadow-lg">
                            <FontAwesomeIcon icon={faCreditCard} size="lg" color="#F97316" />
                            <p className="text-sm text-orange-700">Go to the payment page...</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card22
