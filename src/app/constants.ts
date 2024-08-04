import c from '../index.module.css'
import classNames from "classnames";
import {AppController} from "./infra/app.controller";


export const classes = c
export const cn = classNames

export const app = new AppController()