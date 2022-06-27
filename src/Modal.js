import React, { createContext, useState } from 'react'

export const popUpContext = createContext('null')

function Modal({open,children}) {
    const [isOpen, setIsOpen] = useState(false)
   if (!open) {
    return null
   }else{
       return (
        <popUpContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </popUpContext.Provider>
      )
   }
}

export default Modal
