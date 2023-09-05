import React from "react";

export interface MenuItem<T> {
    description: string;

    value: T;
}

function Menu<T>({ onClick, items, selected }: {
    onClick: React.Dispatch<React.SetStateAction<number>>,
    items: MenuItem<T>[],
    selected: number,
}) {
    return <div className="menu">
        {items.map((item, index) => {
            return <button className={index === selected ? 'active' : ''} key={index} onClick={() => onClick(index)}>{item.description}</button>
        })}
    </div>;
}

export default Menu;
