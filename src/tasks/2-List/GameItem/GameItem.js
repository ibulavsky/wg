import React from "react";
import s from "../list.module.css";

export const GameItem = ({game, isActive, setSelectedId}) => {
    const handler = () => setSelectedId(game.id);
    return (
        <li className={isActive ? s.active : ""}>
            <div onClick={handler}>{game.title}</div>
        </li>
    )
}