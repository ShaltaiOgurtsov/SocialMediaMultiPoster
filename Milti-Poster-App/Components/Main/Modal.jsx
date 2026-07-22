import { useEffect } from "react";

import close from "@/assets/icons/menuItems/close.png"


export function Modal({isOpen, onClose, children}){

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === 'Escape') onClose()
        }

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);

    }, [isOpen, onClose])

    if (!isOpen) return false

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent" onClick={(event) => event.stopPropagation()}>
                <button className="modalClose" onClick={onClose}>
                    <img src={close} alt="close" className="modalCloseIcon"/>
                </button>
                {children}
            </div>
        </div>
    )
}