import React from "react";
import {GameItem} from "../GameItem/GameItem";
import s from "../list.module.css";
import {Games} from "../List";

export const GamesList = ({selectedId, setSelectedId}) => {
    return (
        <ul className={s.list}>
            {Games.map(g => <GameItem key={g.id} game={g} isActive={g.id === selectedId}
                                      setSelectedId={setSelectedId}/>)}
        </ul>
    )
}