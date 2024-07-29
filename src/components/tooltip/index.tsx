import React, { useState } from 'react'
import './style.css'

interface Props {
    text: string
    children: React.ReactNode
}

function Tooltip({ text, children }: Props) {
    const [showTooltip, setShowTooltip] = useState(false)
    
    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}

            {/* contents */}
            <div className={`tooltip ${showTooltip ? "open" : ""}`}>
                {text}

                {/* arrow */}
                <div className="arrow" />
            </div>
        </div>
    )
}

export default Tooltip
