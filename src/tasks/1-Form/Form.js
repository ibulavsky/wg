import React from "react";
import s from './form.module.css';

export const Form = ({text = "найти", styleType}) => {

    return (
        <form className={s.form + " " + s[`form-${styleType}`]}>
            <div className={s.container + " " + s[`container-${styleType}`]}>
                <span className={s.searchIcon} role="img" aria-label="search"/>
                <input className={s.input + " " + s[`input-${styleType}`]} type="text" placeholder={styleType} required={true}/>
                <button className={s.resetIcon} role="img" aria-label="reset"/>
            </div>
            <button className={s.submit + " " + s[`submit-${styleType}`]} type="submit">
                {text}
            </button>
        </form>
    );
}