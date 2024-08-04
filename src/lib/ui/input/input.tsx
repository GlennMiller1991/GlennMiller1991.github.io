import React from 'react'
import styles from './input.module.scss'
import {cn} from "@/app/constants";

type tInput = {
    name: string,
    asTextArea?: boolean,
    containerClass?: string,
    focusedBackgroundClass?: string,
    [key: string]: any
}
export const Input: React.FC<tInput> = React.memo(({
                                                       name,
                                                       asTextArea,
                                                       containerClass,
                                                       focusedBackgroundClass,
                                                       ...props
                                                   }) => {
    return (
        <div className={cn(styles.fieldContainer, containerClass)}>
            {
                asTextArea ?
                    <textarea className={cn(styles.input, styles.field, styles.textarea)}
                              {...props}
                    /> :
                    <input className={cn(styles.input, styles.field)}
                           {...props}
                    />
            }
            <div className={cn(styles.underField, props.value && styles.focusedDiv)}/>
            <div className={cn(styles.text, props.value && styles.focusedText)}>
                {name}
            </div>
        </div>
    )
})