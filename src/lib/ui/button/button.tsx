import React from 'react'
import styles from './button.module.scss'

type Test = {
    prop?: boolean
}

const t: Test = {}
t.prop = undefined

type tButton = {
    text: string,
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: React.FC<tButton> = React.memo(({
                                                         text,
                                                         ...props
                                                     }) => {
    return (
        <button className={styles.submitBtn} {...props}>
            {
                text
            }
        </button>
    )
})