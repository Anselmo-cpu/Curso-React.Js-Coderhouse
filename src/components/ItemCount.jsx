export default function ItemCount(){
    const [count, setCount] = useState(1)

    function handleLess(){
        setCount(count -1 )
    }

    function HandleAdd(){
        setCount(count + 1)
    }

    return
        <div>
        <div>
            <button onClick={handleLess}></button>
            <span>{count}</span>
            <button onClick={HandleAdd}></button>
        </div>
            <button>Agregar al carrito</button>
        </div>





}