import React from 'react'
import styles from './window-wrapper.module.scss'
import { DistortedBackground } from "./background/view";
import { IoCloseOutline } from "react-icons/io5";
import { classes, cn } from "@/app/constants";

type IWindowWrapper = {
    onClose?: () => void
}
export const WindowWrapper: React.FC<React.PropsWithChildren<IWindowWrapper>> = React.memo(({
    children,
    onClose
}) => {

    return (
        <div className={cn(styles.modalContainer, classes.flexCenter)}>
            <DistortedBackground />
            <div className={styles.modalContent}>
                <button className={cn(styles.closeBtn, classes.flexCenter)} onClick={onClose}>
                    <IoCloseOutline />
                </button>
                {
                    children
                }
            </div>

        </div>
    )
})



