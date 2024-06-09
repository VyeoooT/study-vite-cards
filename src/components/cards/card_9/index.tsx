import './style.css'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from 'react'

function Card9() {
    // handle follower
    const [followers, setFollower] = useState(120432)
    const [btnFollow, setBtnFollow] = useState("Follow")
    
    const handleFollow = () => {
        if (btnFollow === "Follow") {
            setFollower(followers + 1)
            setBtnFollow("Unfollow")
        }
        else {
            setFollower(followers - 1)
            setBtnFollow("Follow")
        }
    }

    // toggle message box
    const [btnMessage, setBtnMessage] = useState("Message")
    const [showMessage, setShoMessage] = useState(false)

    const toggleMessage = () => {
        setShoMessage(!showMessage)

        if (btnMessage === "Message") {
            setBtnMessage("Hide Message")
        }
        else {
            setBtnMessage("Message")
        }
    }

    // handle chat
    const [btnSend, setBtnSend] = useState("#aa66aa")
    const [valueInput, setValueInput] = useState("")
    const [messages, setMessages] = useState<string[]>([])

    const handleSend = () => {
        if (valueInput.trim() !== '') {
            setMessages([...messages, valueInput])
            setValueInput("")
        }
    }

    // change color btnSend
    useEffect(() => {
        if (valueInput !== "") {
            setBtnSend("#aa11aa")
        }
        else {
            setBtnSend("#aa66aa")
        }
    })

    return (
        // card
        <div className="w-64 rounded-3xl bg-white shadow-neutral-500/50 shadow-2xl">
            {/* top */}
            <div className="w-full">
                {/* avatar */}
                <div className="w-9/12 -translate-y-1/4 mx-auto">
                    <img className="w-full aspect-square object-cover rounded-2xl shadow-gray-500 shadow-xl" src={images.avtCard9} alt="" />
                </div>
            </div>

            {/* bottom */}
            <div className="w-full flex flex-col items-center px-3 pb-6 -mt-5 space-y-5 overflow-hidden">
                {/* info */}
                <div>
                    {/* name */}
                    <p className="text-center text-xl font-medium">Alina Smith</p>

                    {/* position */}
                    <p className="text-sm text-gray-500 font-light">Senior UX/UI Designer</p>
                </div>

                {/* social */}
                <div className="w-full flex flex-row flex-wrap justify-around items-center text-center">
                    {/* posts */}
                    <div>
                        <p className="text-lg font-semibold text-gray-800">342</p>
                        <p className="text-sm text-gray-500">Posts</p>
                    </div>

                    {/* followers */}
                    <div>
                        <p className="text-lg font-semibold text-gray-800">{followers}</p>
                        <p className="text-sm text-gray-500">Followers</p>
                    </div>

                    {/* following */}
                    <div>
                        <p className="text-lg font-semibold text-gray-800">285</p>
                        <p className="text-sm text-gray-500">Following</p>
                    </div>
                </div>

                {/* message */}
                { showMessage &&
                    <div className="w-64 bg-white py-2 shadow-inner rounded-xl divide-y divide-fuchsia-100">
                        {/* header */}
                        <div className="flex justify-center pb-2">
                            <p className="text-sm text-fuchsia-800 font-medium">Send Message</p>
                        </div>

                        {/* chat | input */}
                        <div className="space-y-5 divide-y divide-fuchsia-100">
                            <div className="flex flex-col space-y-2 p-4">
                                {/* Chat message from another user */}
                                <div className="flex justify-start">
                                    <p className="bg-gray-200 text-black px-2 py-1 rounded-lg max-w-xs shadow-md text-xs">Hello!</p>
                                </div>

                                {/* Chat message from the user */}
                                <div className="flex flex-col items-end space-y-1">
                                    {messages.map((message, idx) => (
                                        <p key={idx} className="max-w-52 text-white text-xs break-words px-2 py-1 bg-blue-500 rounded-lg shadow-md">{message}</p>
                                    ))}
                                </div>
                            </div>

                            {/* input */}
                            <div className="flex justify-around items-center px-1 pt-1">
                                <input
                                    className="placeholder:italic placeholder:text-slate-400 border border-slate-300 rounded-full block bg-white basis-auto py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-pink-500 focus:ring-pink-500 focus:ring-1 text-xs" 
                                    placeholder="Message..." 
                                    type="text"
                                    value={valueInput}
                                    onChange={(e) => setValueInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                />
                                <button onClick={handleSend}>
                                    <FontAwesomeIcon icon={faPaperPlane} color={btnSend} />
                                </button>
                            </div>
                        </div>
                    </div>
                }

                {/* button */}
                <div className="w-full flex flex-row flex-wrap justify-around">
                    <button className="w-24 px-2 py-1 text-sm text-white font-medium bg-pink-500 rounded-md border-2 border-transparent hover:text-gray-500 hover:border-gray-300 hover:bg-white transition-colors active:translate-y-1" onClick={handleFollow}>{btnFollow}</button>
                    <button className="w-28 px-2 py-1 text-sm text-gray-500 font-medium bg-white border-2 border-gray-300 rounded-md hover:text-white hover:border-transparent hover:bg-pink-500 transition-colors active:translate-y-1" onClick={toggleMessage}>{btnMessage}</button>
                </div>
            </div>
        </div>
    )
}

export default Card9
