import React from 'react'
import styles from './modal-overlay.module.scss'

interface ModalOverlayProps {
    onClose: () => void
    children?: React.ReactNode
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ onClose, children }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            {children}
        </div>
    );
};

export default ModalOverlay