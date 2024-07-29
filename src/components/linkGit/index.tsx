import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tooltip from "../tooltip"

function LinkGithub() {
    return (
        <>
            <div className="fixed bottom-10 left-10 z-[1] drop-shadow-md">
                    <a href="https://github.com/VyeoooT/study-vite-cards" target="_blank" rel="noopener noreferrer">
                        <Tooltip text="Link source code">
                                <FontAwesomeIcon aria-hidden={true} icon={faGithub} size="3x" style={{ background: "#fff", borderRadius: "100%" }} bounce />
                        </Tooltip>
                    </a>
            </div>
        </>
    )
}

export default LinkGithub
