import React, { useEffect, useState } from 'react'

const Pizza = () => {
    const [toggle, setToggle] = useState(false)
    const [show,setShow] = useState(true)
    useEffect( () => {
        setTimeout( () => {
            setShow(!toggle)
        },2000)
    },[toggle])

  return (
    <div>
        <h1>Orden de Pizza</h1>
        {show && <h3>Pizza de Champiñon</h3>}
        <button onClick={() => setToggle(!toggle)}> {toggle ? 'Cancelar Pedido' : 'Realizar Pedido'}</button>
    </div>
  )


}

export default Pizza