import { useState } from 'react';

export default function Text() {

    const [show, setShow] = useState(true);

    function handleShow() {
        setShow(!show);
    }

  return (
    <div>
        <button onClick={handleShow}> {show ? 'Ocultar' : 'Mostrar' } </button>
        {show && <h2>Hola mundo!</h2> }
    </div>
  )
}
