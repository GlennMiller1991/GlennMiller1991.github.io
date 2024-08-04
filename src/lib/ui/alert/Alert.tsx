import React, {useEffect} from 'react'
import * as styles from './Alert.module.scss'
import {app, classes, cn} from "../../../app/constants";


type IAlert = {
    children: string
}
export const Alert: React.FC<IAlert> = React.memo(({
                                                       children,
                                                   }) => {


    useEffect(() => {
        const id = setTimeout(() => {
            console.log('test')
            app.setAlertMessage(undefined)
        }, 3000)

        return () => {
            id && window.clearTimeout(id as unknown as number)
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={cn(styles.textWrapper, classes.flexCenter)}>
                {
                    children
                }
            </div>
        </div>
    )

})