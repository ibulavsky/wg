import React from "react";
import {GameItem} from "../GameItem/GameItem";
import s from "../list.module.css";
import {Games} from "../List";

export const GamesMobileList = ({selectedId, setSelectedId, isOpen, setOpen}) => {

    const hide = () => {
        setOpen(false)
    }

    const changeId = (id) => {
        setSelectedId(id)
        setOpen(false)
    }

    return (
        <ul style={{display: isOpen ? "block" : "none"}} className={`${s.mobileList}`} onMouseLeave={hide}>
            {Games.map(g => <GameItem key={g.id} game={g} isActive={g.id === selectedId}
                                      setSelectedId={changeId}/>)}
        </ul>
    )
}