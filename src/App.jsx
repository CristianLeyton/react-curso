import { Card } from "./components/Card";
import { Usuario } from "./components/Usuario";
import './App.css'
import Counter from "./components/Counter";
import Text from "./components/Text";

function App() {
  const nombre = <h1>CDL</h1>;
  const edad = <h3>28</h3>;
  const correo = <h3>cdl@gmail.com</h3>;

  const cdl = (
    <div >
      {nombre} {edad} {correo}
    </div>
  );

  return (
    <div>
      {cdl}
      {cdl}
      {cdl}
      <Usuario nombre='Carpi' edad={28} nacionalidad='Argentina'/>
      <Usuario nombre='Micaela' edad={25} nacionalidad='Uruguaya'/>
      <Card/>
      <Counter/>
      <Text/>
    </div>
  );
}

export default App;
