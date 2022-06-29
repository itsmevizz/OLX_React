import React, { createContext, useState } from "react"


export const popUpContext = createContext(null)

function Modal({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <popUpContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </popUpContext.Provider>
    )
}

export default Modal
