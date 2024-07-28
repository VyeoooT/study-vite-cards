import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

import { useState } from 'react'

function Card4() {
    // handle create 5 icon star | checked rate star
    const starQty = 5
    const iconStarsMap = Array.from({ length: starQty })
    const arrayFill = Array(starQty).fill(true)
    
    const [checked, setChecked] = useState(arrayFill)
    const [lastChecked, setLastChecked] = useState(0)

    const handleChecked = (index: number) => {
        setLastChecked(index)
        // console.log("lastChecked: ", lastChecked)

        setChecked(prevChecked => {
            const newChecked = [...prevChecked]
            const currentChecked = prevChecked[index]

            // console.log("newChecked: ", newChecked)
            // console.log("currentChecked: ", index, currentChecked)

            if (currentChecked) {
                for (let i = index + 1; i < starQty; i++) {
                    newChecked[i] = false
                    // console.log("newChecked[i]: ", [i], newChecked[i]);
                }
            } else {
                for (let i = lastChecked + 1; i <= index; i++) {
                    newChecked[i] = true
                    // console.log("newChecked[i]: ", [i], newChecked[i]);
                }
            }
            
            // {console.log("return newChecked: ", newChecked)}
            return newChecked
        })
    }

    // handle about me
    const [btnAboutMe, setBtnAboutMe] = useState("About Me")
    const [showAbout, setShowAbout] = useState(false)

    const handleAboutMe = () => {
        setShowAbout(!showAbout)

        if (btnAboutMe === "About Me") {
            setBtnAboutMe("Hide About")
            // console.log("content default: ", showAbout)
        }
        else {
            setBtnAboutMe("About Me")
            // console.log("content default: ", showAbout)
        }
    }

    // handle hire me
    const [btnHireMe, setBtnHireMe] = useState("Hire Me")
    const [showCarpentry, setShowCarpentry] = useState(false)

    const handleHireMe = () => {
        setShowCarpentry(!showCarpentry)

        if (btnHireMe === "Hire Me") {
            setBtnHireMe("Hired")
        }
        else {
            setBtnHireMe("Hire Me")
        }
    }

    return (
        // card
        <div className="w-64 rounded-2xl space-y-10 bg-white shadow-neutral-500/50 shadow-2xl overflow-hidden">
            {/* top */}
            <div className="relative w-full bg-purple-700 py-10">
                {/* carpentry */}
                {showCarpentry &&
                <div className="absolute top-5 left-3 px-5 py-1 border border-red-800 -rotate-12">
                    <p className="text-xl text-red-800 uppercase">Hired</p>
                </div>}

                {/* social */}
                <div className="flex flex-col -translate-y-6 -translate-x-4 items-end space-y-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="opacity-50 hover:cursor-pointer hover:opacity-100 hover:transition-opacity transition-opacity" icon={faFacebook} style={{color: "white"}} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="opacity-50 hover:cursor-pointer hover:opacity-100 hover:transition-opacity transition-opacity" icon={faGithub} style={{color: "white"}} />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="opacity-50 hover:cursor-pointer hover:opacity-100 hover:transition-opacity transition-opacity" icon={faTwitter} style={{color: "white"}} />
                    </a>
                </div>
                
                {/* avatar */}
                <div className="w-1/2 bg-purple-700 rounded-full padding-2px absolute -bottom-1/4 translate-x-1/2">
                    <img className="w-full bg-white rounded-full padding-2px" src={images.avt} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="flex flex-col items-center bg-white pb-8 px-2 space-y-6">
                
                { showAbout ?
                    (
                        <div className="text-sm">
                            {/* about me */}
                            <p><span className="font-bold">Name:</span> Prem Shahi</p>
                            <p><span className="font-bold">Position:</span> Web Developer</p>
                            <p><span className="font-bold">Country:</span> Mexico</p>
                            <p><span className="font-bold">Phone:</span> 09x x83 3220</p>
                            <p><span className="font-bold">Mail:</span> premshahi@gmail.com</p>
                            <p><span className="font-bold text-justify">Introduce yourself:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatibus, voluptas quibusdam.</p>
                        </div>
                    )
                    
                    : 
                    (
                        <div className="flex flex-col items-center space-y-2">
                            {/* info defautl */}
                            {/* name */}
                            <p className="text-2xl font-medium">Prem Shahi</p>

                            {/* description */}
                            <p className="leading-3 text-sm">Web Developer</p>
                        </div>
                    )
                }

                {/* rate */}
                <div className="w-full flex flex-row flex-wrap justify-center space-x-1">
                    {iconStarsMap.map((_, idx) => (
                        // console.log("re-render"),
                        
                        <button key={idx} onClick={() => handleChecked(idx)}>
                            <FontAwesomeIcon className="translate-y-0 hover:translate-y-1 transition-transform" icon={checked[idx] ? faStarSolid : faStarRegular} style={{ color: "#7E22CE" }} />
                        </button>
                    ))}
                </div>

                {/* button */}
                <div className="font-medium flex flex-row flex-wrap justify-around space-x-3">
                    <button className="bg-purple-700 text-white text-sm rounded-full w-28 px-3 py-2 transition-colors hover:shadow-purple-500/60 hover:shadow-md active:shadow-gray-600 active:shadow-inner" onClick={handleAboutMe}>{btnAboutMe}</button>
                    <button className="bg-purple-700 text-white text-sm rounded-full w-24 px-3 py-2 transition-colors hover:shadow-purple-500/60 hover:shadow-md active:shadow-gray-600 active:shadow-inner" onClick={handleHireMe}>{btnHireMe}</button>
                </div>
            </div>
        </div>
    )
}

export default Card4
