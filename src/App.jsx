import { useState } from "react";
import { useEffect } from "react";
// importar axios 
import axios from "axios";

function App() {
  //SE CREA UNA CONSTANTE QUE CONTENGA LA VARIABLE DE ENTORN
  const API_URL=import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState();

  useEffect(() => {
    axios.get(`${API_URL}assets`)//HACE REFERENCIA A LA CONSTANTE
      // .then((resp) => resp.json())   AXIOS YA HACE LA CONVERSIÓN A JSON
      .then((data) => {
        console.log(data)
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error("La petición no funcina!");
      });
  }, []);

  // agregar un louder para el tiempo de espera de los datos a la hora de la consulta
  if(!criptos)return <span>Cargando...</span>
  
  return (
    <>
      <h1>LISTA DE CRIPTO MONEDAS</h1>
      <ol>
        {
          criptos.map(({ id, name, priceUsd }) => (
          <li key={id}>
            Nombre: {name} Precio: {priceUsd}
          </li>))
        }
      </ol>
    </>
  );
}

export default App;
