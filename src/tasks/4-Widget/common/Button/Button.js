import React from "react";
import s from "./button.module.css";

export const Button = ({onClick, disabled, text}) => {
    return (
        <button className={s.button} onClick={onClick} disabled={disabled}>{text}</button>
    )
}