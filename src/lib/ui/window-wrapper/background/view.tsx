import React, {useEffect, useRef, useState} from "react";
import * as styles from "../window-wrapper.module.scss"
import {ParticlesController} from "./controller";
import {app} from "../../../../app/constants";

export const DistortedBackground: React.FC = React.memo(() => {
    const [controller] = useState(() => new ParticlesController(app))
    const canvasRef = useRef<HTMLCanvasElement>(null)


    // visual effects
    useEffect(() => {
        canvasRef.current && controller.init(canvasRef.current)
        return controller.dispose.bind(controller)
    }, [])

    return (
        <>
            <canvas ref={canvasRef} className={styles.canvas}/>
            <svg className={styles.svg}>
                <defs>
                    <filter id={'liquid'}>
                        <feTurbulence type="fractalNoise" baseFrequency=".03"/>
                        <feDisplacementMap in="SourceGraphic" scale="150"/>
                    </filter>
                </defs>
            </svg>
        </>
    )
})