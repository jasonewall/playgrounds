
function LineItemControls({ quantity, onQuantityChange }: {
    quantity: number,
    onQuantityChange: (quantity: number) => void,
}) {
    return <div className="text-center">
        <button className="border-2 border-slate-300" onClick={() => onQuantityChange(quantity - 1)}>-</button>
        <input className="text-center w-5" value={quantity} onChange={(e) => { onQuantityChange(parseInt(e.target.value)); }}/>
        <button className="border-2 border-slate-300" onClick={() => onQuantityChange(quantity + 1)}>+</button>
        <button className="border-2 border-slate-300" onClick={() => onQuantityChange(0)}>D</button>
    </div>;
}

export default LineItemControls
