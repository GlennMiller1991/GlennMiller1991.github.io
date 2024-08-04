import React from 'react'
import * as styles from './window-wrapper.module.scss'
import {DistortedBackground} from "./background/view";
import {IoCloseOutline} from "react-icons/io5";
import {app, cn} from "../../../app/constants";

type IWindowWrapper = {
    onClose?: () => void
}
export const WindowWrapper: React.FC<React.PropsWithChildren<IWindowWrapper>> = React.memo(({
                                                                                                children,
                                                                                                onClose
                                                                                            }) => {

    return (
        <div className={cn(styles.modalContainer, 'flexCenter')}>
            <DistortedBackground/>
            <div className={styles.modalContent}>
                <button className={cn(styles.closeBtn, 'flexCenter')} onClick={() => {
                    onClose && onClose()
                    !onClose && app.setWindowContent(undefined)
                }}>
                    <IoCloseOutline/>
                </button>
                {
                    children
                }
            </div>

        </div>
    )
})



