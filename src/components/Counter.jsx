import { useState } from "react"

export default function Counter() {
   
    const [number, setNumber] = useState(0);

    function sumar() {
        setNumber(number+1);
    }

    function restar() {
        setNumber(number-1);
    }

  return (
    <div>
        <button className="bg-slate-300 p-1 capitalize " onClick={restar}>restar</button>
        <h2>{number}</h2>
        <button className="bg-slate-300 p-1 capitalize " onClick={sumar}>Sumar</button>
    </div>
  )
}
