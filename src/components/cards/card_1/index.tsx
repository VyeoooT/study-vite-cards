import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Card1() {
  return (
    /* card */
    <div className="relative w-60 rounded-xl shadow-neutral-500/50 shadow-lg">
      {/* btn plus */}
      <div className="absolute top-1/4 right-0 translate-x-1/2 rounded-full bg-rose-500 shadow-button-card-1 hover:shadow-none hover:transition-shadow active:translate-y-1 active:transition-transform active:shadow-rose-700 active:shadow-inner">
        <button className="min-w-10 min-h-10 px-2 py-2 rounded-full">
          <FontAwesomeIcon icon={faPlus} style={{color: "white"}} />
        </button>
      </div>

      {/* top */}
      <div className="w-full bg-gray-200 flex flex-col items-center py-6 text-center rounded-tl-xl rounded-tr-xl overflow-hidden">
        {/* avt */}
        <div className="w-2/4">
          <img className="w-full" src={images.avt} alt="" />
        </div>

        <p className="mt-4 mx-2 text-xl font-bold">Leslie Walton</p>
        <p className="mt-2 mx-2 text-sm text-gray-500 mb-1">@Lesliew</p>
        <p className="text-sm mx-2 text-gray-500">Product Designer, Kyiv</p>
      </div>

      {/* bottom */}
      <div className="w-full bg-white flex flex-col items-center py-6 px-2 rounded-bl-xl rounded-br-xl overflow-hidden gap-y-8">
        {/* social */}
        <div className="w-full flex flex-row flex-wrap justify-around text-center">
          <div>
            <p className="font-bold">17</p>
            <p className="text-xs text-gray-400">SHOTS</p>
          </div>

          <div>
            <p className="font-bold">143</p>
            <p className="text-xs text-gray-400">FOLLOWING</p>
          </div>

          <div>
            <p className="font-bold">57</p>
            <p className="text-xs text-gray-400">FOLLOWERS</p>
          </div>
        </div>

        {/* button - message*/}
        <div className="text-center">
          <button className="text-xs py-3 px-10 bg-teal-500 rounded-full text-white font-bold hover:shadow-teal-300 hover:shadow-inner transition-colors active:bg-teal-300">
            Send Message
          </button>
        </div>

        {/* more */}
        <div>
          <button className="flex flex-row items-center space-x-1 transition-transform hover:-translate-y-1">
            <p className="text-xs text-gray-500">MORE</p>
            <FontAwesomeIcon icon={faChevronDown} style={{color: "gray"}} size="2xs"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card1
