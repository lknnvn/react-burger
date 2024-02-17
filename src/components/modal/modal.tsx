import React, {useEffect, useCallback} from 'react'
import ReactDOM from 'react-dom'
import styles from './modal.module.scss'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from "../modal-overlay"

interface ModalProps {
    title?: string
    onClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({title,  onClose, children}) => {

    const handleEscPress = useCallback(
        (e: any) => {
            if (e.key === 'Escape') {
                onClose()
            }
        },
        [onClose]
    )

    useEffect(() => {
        document.addEventListener('keydown', handleEscPress)

        return () => {
            document.removeEventListener('keydown', handleEscPress)
        }
    }, [handleEscPress])

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClose={onClose}>
                <div className={`${styles.modal} ${title ? styles.withTitle : styles.withoutTitle}`}
                     onClick={(e) => e.stopPropagation()}>
                    <div className={`${styles.header} ${!title && styles.headerWithTitle}`}
                         style={{justifyContent: title ? "space-between" : "flex-end"}}>
                        {title && <span className={styles.title}>{title}</span>}
                        <CloseIcon type="primary" onClick={onClose}/>
                    </div>
                    {children}
                </div>
            </ModalOverlay>
        </>,
        document.getElementById('modal-root')!
    )
}

export default Modal