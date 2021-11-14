import React from "react";
import s from "./checkbox.module.css";

export const Checkbox = ({id, label, disabled, checked, onchange}) => {
    return (
        <div className={s.element}>
            <input type='checkbox' id={id} checked={checked}
                   disabled={disabled}
                   onChange={onchange}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
