import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

function Card1() {
  // increase follow
  const [follower, setFollower] = useState(57)
  const [plusMinus, setPlusMinus] = useState(faPlus)

  // alert
  const messageSend = () => {
    alert('message send')
  }
  
  // more/less
  const [moreLess, setMoreLess] = useState("MORE")
  const [iconChevron, setIconChevron] = useState(faChevronDown)
  const [showDesc, setShowDesc] = useState(false)

  // handle follower
  const handleFollower = () => {
    if (plusMinus === faPlus) {
      setPlusMinus(faMinus)
      // console.log("dau tru")

      setFollower(follower + 1)
    }
    else {
      setPlusMinus(faPlus)
      // console.log("dau cong")

      setFollower(follower - 1)
    }
  }

  // handle more/less desc
  const handleMoreDesc = () => {
    setShowDesc(!showDesc)
    
    if (moreLess === "MORE") {
      // console.log("show")
      setMoreLess("LESS")
      setIconChevron(faChevronUp)
    }
    if (moreLess === "LESS") {
      // console.log("hidden")
      setMoreLess("MORE")
      setIconChevron(faChevronDown)
    }
  }

  return (
    // console.log("render card1"),
    
    /* card */
    <div className="relative w-60 rounded-xl shadow-neutral-500/50 shadow-lg">
      {/* btn plus */}
      <div className="card1">
        <button id="btnFollow" className="min-w-10 min-h-10 px-2 py-2 rounded-full" onClick={handleFollower}>
          <FontAwesomeIcon icon={plusMinus} style={{color: "white"}} />
        </button>
      </div>

      {/* top */}
      <div className="w-full bg-gray-200 flex flex-col items-center py-6 text-center rounded-tl-xl rounded-tr-xl overflow-hidden">
        {/* avt */}
        <div className="w-2/4">
          <img className="w-full" src={images.avt} alt="" />
        </div>
        
        {/* info */}
        <p className="mt-4 mx-2 text-xl font-bold">Leslie Walton</p>
        <p className="mt-2 mx-2 text-sm text-gray-500 mb-1">@Lesliew</p>
        <p className="text-sm mx-2 text-gray-500">Product Designer, Kyiv</p>
      </div>

      {/* bottom */}
      <div className="w-full bg-white flex flex-col items-center py-6 px-2 rounded-bl-xl rounded-br-xl overflow-hidden space-y-8">
        {/* social */}
        <div className="w-full flex flex-row flex-wrap justify-around text-center">
          {/* shots */}
          <div>
            <p className="font-bold">17</p>
            <p className="text-xs text-gray-400">SHOTS</p>
          </div>

          {/* following */}
          <div>
            <p className="font-bold">143</p>
            <p className="text-xs text-gray-400">FOLLOWING</p>
          </div>

          {/* followers */}
          <div>
            <p className="font-bold">{follower}</p>
            <p className="text-xs text-gray-400">FOLLOWERS</p>
          </div>
        </div>

        {/* btn message / more */}
        <div className="space-y-3">
          {/* button - message */}
          <div className="text-center">
            <button onClick={messageSend} className="text-xs py-3 px-10 bg-teal-500 rounded-full text-white font-bold hover:shadow-teal-300 hover:shadow-inner transition-colors active:bg-teal-300">
              Send Message
            </button>
          </div>

          {/* more */}
          <div className="flex flex-col items-center space-y-3">
            {/* desc */}
            <div>
              <p className={`text-sm text-gray-500 text-justify transition-all ${showDesc ? "line-clamp-none" : "line-clamp-2"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eum perferendis consequatur exercitationem sequi similique illum voluptate ipsa aut voluptatem nam est odio nisi dolor, eligendi ratione praesentium velit itaque.
              </p>
            </div>

            {/* more - btn */}
            <button className="flex flex-row items-center space-x-1 transition-transform hover:-translate-y-1" onClick={handleMoreDesc}>
              <p className="text-xs text-gray-500">{moreLess}</p>
              <FontAwesomeIcon icon={iconChevron} style={{color: "gray"}} size="2xs"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card1
