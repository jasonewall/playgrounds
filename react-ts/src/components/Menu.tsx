import React from "react";

export interface MenuItem<T> {
    description: string;

    value: T;
}

function Menu<T>({ onClick, items }: {
    onClick: React.Dispatch<React.SetStateAction<number>>,
    items: MenuItem<T>[],
}) {
    return <div id="menu">
        {items.map((item, index) => {
            return <button key={index} onClick={() => onClick(index)}>{item.description}</button>
        })}
    </div>;
}

export default Menu;
