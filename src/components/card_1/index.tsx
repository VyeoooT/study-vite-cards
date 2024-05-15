import './style.css'
import images from '../../assets/images'

function Card1() {
  return (
    /* card */
    <div className="relative w-60 rounded-xl shadow-neutral-500/50 shadow-lg">
      {/* btn plus */}
      <div className="absolute w-2/12 aspect-square rounded-full bg-rose-500 -right-1/4 top-1/4 -translate-x-full shadow-button-card-1">
        <span className="absolute w-6 h-0.5 bg-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></span>
        <span className="absolute w-6 h-0.5 bg-white top-1/2 left-1/2 rotate-90 -translate-y-1/2 -translate-x-1/2"></span>
      </div>

      {/* top */}
      <div className="w-full bg-gray-200 flex flex-col items-center py-6 text-center rounded-tl-xl rounded-tr-xl overflow-hidden">
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
          <button className="text-xs py-3 px-10 bg-teal-500 rounded-full text-white font-bold">
            Send Message
          </button>
        </div>

        {/* more */}
        <div className="flex flex-row items-center">
          <p className="text-xs text-gray-500 uppercase">More</p>
          <img src={images.iconArrowDown} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Card1
