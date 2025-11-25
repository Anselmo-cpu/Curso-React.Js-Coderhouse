
import './App.css'
import { useState } from 'react'
import Item from "./components/Item"


function App() {

  const [count, setcount] = useState(0)

  const handleClick = () => {
    setcount(count + 1)
  }

  return (
    <>
      <section className='container'>
      <h1>Contador {count}</h1>
      <button onClick={handleClick}>+</button>
      </section>
    <hr />
      <div>
        <Item title="M vave MK-300" price="$250,000" img="https://acdn-us.mitiendanube.com/stores/005/685/596/products/audioimport-2025-10-01t125854-539-70c4654f14bc7a74db17593341128205-640-0.webp" description="Pedalera Multiefecto de M Vave"/>

        <Item title="M vave Tank G" price="$150,000" img="https://www.musicarms.net/wp-content/uploads/2024/04/M-VAVE-Tank-G-%E0%B9%80%E0%B8%AD%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%84.jpg" description="Pedalera Multiefecto de M Vave"/> 

        <Item title="M Vave Cube Baby" price ="$100,000" img="https://http2.mlstatic.com/D_NQ_NP_677756-MLU73129178458_122023-O.webp" description="Pedalera Multiefecto de M Vave"/>
      </div>
    </>
  )
}



   


export default App
