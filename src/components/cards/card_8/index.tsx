import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

import { useState } from 'react'

function Card8() {
    // handle rate star
    const starQty = 5
    const iconStarMap = Array.from({ length: starQty })
    const arrayFill = Array(starQty).fill(true)

    const [checked, setChecked] = useState(arrayFill)
    const [lastChecked, setLastChecked] = useState(0)

    const handleRating = (index: number) => {
        setLastChecked(index)

        setChecked(prevChecked => {
            const newRating = [...prevChecked]
            const currentChecked = prevChecked[index]

            if (currentChecked) {
                for (let i = index + 1; i < starQty; i++) {
                    newRating[i] = false
                }
            }
            else {
                for (let i = lastChecked + 1; i <= index; i++) {
                    newRating[i] = true
                }
            }

            return newRating
        })
    }

    // Show about me
    const [btnAboutMe, setBtnAboutMe] = useState("About Me")
    const [showAbout, setShowAbout] = useState(false)

    const toggleAbout = () => {
        setShowAbout(!showAbout)

        if (btnAboutMe === "About Me") {
            setBtnAboutMe("Hide About")
        }
        else {
            setBtnAboutMe("About Me")
        }
    }

    // Hire me
    const [btnHire, setBtnHire] = useState("Hire Me")
    const [showCarpentry, setShowCarpentry] = useState(false)

    const toggleCarpentry = () => {
        setShowCarpentry(!showCarpentry)

        if (btnHire === "Hire Me") {
            setBtnHire("Hired")
        }
        else {
            setBtnHire("Hire Me")
        }
    }

    return (
        // card
        <div className="w-64 rounded-3xl border-4 border-cyan-400 bg-black overflow-hidden">
            {/* top */}
            <div className="w-full relative pt-10 pb-4">
                {/* effect */}
                <div className="effect bg-cyan-400"></div>
    
                {/* social */}
                <div className="absolute top-5 right-5 flex flex-col z-10">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} style={{ color: "white" }}/>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ color: "white" }}/>
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }}/>
                    </a>
                </div>
    
                {/* avatar */}
                <div className="flex flex-row justify-center translate-x-0">
                    <img className="w-1/2 bg-black p-1 rounded-full" src={images.avt} alt="" />
                </div>

                {/* carpentry */}
                {showCarpentry &&
                <div className="absolute bottom-5 right-3 px-5 py-1 border border-red-800 rotate-12">
                    <p className="text-xl text-red-800 uppercase">Hired</p>
                </div>}
            </div>
    
            {/* bottom */}
            <div className="w-full flex flex-col pt-3 pb-8 px-5 space-y-4">
                {
                    showAbout ?
                    (<div className="text-sm text-white">
                        {/* about me */}
                        <ul className="list-disc list-inside">
                            <li>Name: Prem Shahi</li>
                            <li>Position: Web Developer</li>
                            <li>Country: Mexico</li>
                            <li>Phone: 09x x83 3220</li>
                            <li>Mail: premshahi@gmail.com</li>
                            <li>Introduce yourself: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatibus, voluptas quibusdam.</li>
                        </ul>
                    </div>)
                    :
                    (<div className="text-white text-center">
                        {/* info */}    
                        <p className="text-xl font-medium">Richard Nicole</p>
                        <p className="text-sm font-light">Web Developer</p>
                    </div>)
                }

                {/* rating */}
                <div className="flex flex-row flex-wrap justify-center space-x-1">
                    {iconStarMap.map((_, idx) => (
                        <button key={idx} onClick={() => handleRating(idx)}>
                            <FontAwesomeIcon icon={checked[idx] ? faStarSolid : faStarRegular} style={{ color: "#22D3EE" }} />
                        </button>
                    ))}
                </div>

                {/* button */}
                <div className="flex flex-row justify-around">
                    <button className="min-w-24 px-1 py-2 bg-cyan-400 rounded-full text-xs font-medium hover:shadow-cyan-400/50 hover:shadow-md active:shadow-cyan-800 active:shadow-inner transition-shadow" onClick={toggleAbout}>{btnAboutMe}</button>
                    <button className="min-w-20 px-1 py-2 bg-cyan-400 rounded-full text-xs font-medium hover:shadow-cyan-400/50 hover:shadow-md active:shadow-cyan-800 active:shadow-inner transition-shadow" onClick={toggleCarpentry}>{btnHire}</button>
                </div>
            </div>
        </div>
    )
}

export default Card8
