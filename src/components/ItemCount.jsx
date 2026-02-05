import { useEffect, useState } from "react"

export default function ItemCount(){
    const [count, setCount] = useState(1)

    console.log("actualizacion de item count")

    function handleLess(){
        setCount(count -1 )
    }

    function handleAdd(){
        setCount(count + 1)
    }

    return (

        <div>
        <div>
            <button onClick={handleLess}></button>
            <span>{count}</span>
            <button onClick={handleAdd}></button>
        </div>
            <button>Agregar al carrito</button>
        </div>
    )
        
}

 