import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck, faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

const products = [
    {
        "id": 1,
        "name": "Delicious Apples",
        "description": {
            "benefits": [
                "Apples are nutricious",
                "Apples may be good for weight loss",
                "Apples may be good for bone health",
                "They're linked to a lowest risk of diabetes"
            ],
        },
        "variants": [
            {
                "color": "green",
                "imageMain": images.appleGreenMain17,
                "imgSelect": images.appleGreenSelect17,
                "price": 7.93
            },
            {
                "color": "yellow",
                "imageMain": images.appleGoldenMain17,
                "imgSelect": images.appleGoldenSelect17,
                "price": 8.99
            },
            // {
            //     "color": "orange",
            //     "image": images.orangeApple17,
            //     "imgSelect": images.orangeAppleMain17,
            //     "price": 10.00
            // },
            {
                "color": "red",
                "imageMain": images.appleRedMain17,
                "imgSelect": images.appleRedSelect17,
                "price": 15.67
            }
        ],
        "thumbnails": [
            images.appleThumb117,
            images.appleThumb217,
            images.appleThumb317,
            images.appleThumb417
        ]
    }
]

function Card17() {
    // react heart
    const [reactHeart, setReactHeart] = useState(faHeartRegular)

    const handleReactHeart = () => {
        if (reactHeart === faHeartRegular) {
            setReactHeart(faHeartSolid)
        }
        else {
            setReactHeart(faHeartRegular)
        }
    }

    // map data
    interface variantInterface {
        color: string,
        price: number,
        imageMain: string,
        imgSelect: string
    }

    const initProduct = products[0]
    const [product, setProduct] = useState(initProduct)
    const [variants, setVariants] = useState(initProduct.variants[0])

    const handleVariant = (variant: variantInterface) => {
        setVariants(variant)
        setProduct(prevProduct => ({
            ...prevProduct, // giu lai cac thuoc tinh cua san pham, khi cap nhap state, khong bi mat di
            images: variant.imageMain,
            prices: variant.price
        }))

        console.log(product)
    }

    const bgColor = (color: string) => {
        const bgColorMapping: { [key:string]: string } = {
            green: "bg-green-600",
            yellow: "bg-yellow-600",
            red: "bg-red-600"
        }

        return bgColorMapping[color] || console.log(`not exits background-color: ${color}`)
    }

    // add to cart
    const [notiAddCart, setNotiAddCart] = useState(false)
    const [disBtn, setDisBtn] = useState(false)

    const handleAddToCart = () => {
        setNotiAddCart(true)
        setDisBtn(true)

        setTimeout(() => {
            setNotiAddCart(false)
            setDisBtn(false)
        }, 1200)
    }

    return (
        // card
        <div className="w-38rem flex flex-row justify-between bg-white py-8 rounded-md shadow-neutral-500/50 shadow-lg">
            {/* left */}
            <div className="basis-2/5 flex flex-col justify-center">
                {/* card - left */}
                <div className="w-full -translate-x-1/4 rounded-2xl shadow-black/50 shadow-2xl">
                        {/* top */}
                        <div className={`w-full ${bgColor(variants.color)} px-5 rounded-tl-xl rounded-tr-xl`}>
                            {/* header */}
                            <div className="flex flex-row justify-between py-5">
                                <button onClick={handleReactHeart}>
                                    <FontAwesomeIcon icon={reactHeart} color="white" size="lg" />
                                </button>
                                <a href="https://product/share" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faShareNodes} color="white" size="lg" />
                                </a>
                            </div>

                            {/* image - product */}
                            <div className="w-130p -translate-x-16">
                                <img src={variants.imageMain} alt="" />
                            </div>
                        </div>

                    {/* bottom */}
                    <div className="p-5 bg-white rounded-bl-xl rounded-br-xl">
                        <div className="flex flex-row justify-around">
                            {product.thumbnails.map((thumbnail, idx) => (
                                <button key={idx} className="w-10 h-10 p-1 border-2">
                                    <img src={thumbnail} alt="" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className="relative basis-3/5 flex flex-col justify-start pe-10 space-y-6">
                {/* top */}
                <div className="w-full flex flex-col space-y-6">
                    {/* name - product */}
                    <div>
                        <p className="text-2xl font-bold text-neutral-700">{product.name}</p>
                        <p className="text-sm text-gray-400">COD: 4599</p>
                    </div>

                    {/* price */}
                    <div className="flex flex-row items-end space-x-4">
                        <p className="text-red-500 text-xl">R$</p>
                        <p className="text-red-500 text-4xl">{variants.price.toFixed(2)}</p>
                    </div>

                    {/* select a color */}
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm text-gray-400">SELECT A COLOR</p>

                        {/* img - selected */}
                        <div className="flex flex-row space-x-2">
                            {product.variants.map((variant, idx) => (
                                <button
                                    key={idx}
                                    className={`w-9 aspect-square p-1 hover:-translate-y-1 transition-transform ${variants.color === variant.color ? "border-2 rounded-md hover:translate-y-0" : "border-none"}`}
                                    onClick={() => handleVariant(variant)}
                                >
                                    <img src={variant.imgSelect} alt="" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* bottom */}
                <div className="space-y-8">
                    {/* benefits */}
                    <div className="text-sm space-x-5 space-y-2">
                        <p className="text-gray-400 uppercase">benefits</p>

                        <ul>
                            {product.description.benefits.map((benefit, idx) => (
                                <li key={idx} className="text-gray-600 list-disc">{benefit}</li>
                            ))}
                        </ul>
                    </div>

                    {/* button */}
                    <div>
                        <button
                            className="py-3 p-9 bg-red-500 text-sm text-white font-semibold rounded-md shadow-gray-500/50 shadow-xl hover:shadow-none transition-shadow active:shadow-red-900 active:shadow-inner disabled:opacity-70 disabled:shadow-none"
                            onClick={handleAddToCart}
                            disabled={disBtn}
                        >
                            ADD TO CART
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
        </div>
    )
}

export default Card17
