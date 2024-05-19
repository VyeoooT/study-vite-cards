import React from "react"

interface CardContainerProps {
    label: string

    // `React.ReactElement` accepts only JSX elements. Ex: element <div>, <p>,...
    children: React.ReactElement

    // `React.ReactNode` accepts the most inputs
    // children2: React.ReactNode

    // cung cap tuy chon `?`: [optional], co hoac khong truyen {children}
    // children?: React.ReactElement
}

function CardContainer({label, children}: CardContainerProps) {
    return (
        <div className="flex flex-col items-center space-y-4">
            {children}
            <p className="text-xl font-bold text-blue-800">{label}</p>
        </div>
    )
}

export default CardContainer
